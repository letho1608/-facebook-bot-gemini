import { Client } from "fca-utils";
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from 'dotenv';
import chalk from 'chalk'; // Thư viện để tạo màu cho log

dotenv.config(); // Tải các biến môi trường từ file .env

// Khởi tạo bot client với fca-utils
const client = new Client({
    ignoreMessageInCommandEvent: true // Không cần sử dụng tiền tố
});

// Cấu hình API Google Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

// Hàm gọi API Gemini và xử lý phản hồi
const getGeminiResponse = async (userInput) => {
    try {
        console.log(chalk.blue("Đang xử lý yêu cầu từ người dùng..."));
        
        // Gửi yêu cầu tới API Gemini
        const result = await model.generateContent(userInput);
        console.log(result); // Kiểm tra phản hồi từ API Gemini
        
        // Lấy phản hồi từ API
        const response = await result.response;
        const text = response.text();

        console.log(chalk.green("Yêu cầu đã được xử lý thành công."));
        return text;
    } catch (error) {
        console.error(chalk.red("Lỗi khi gọi API Gemini:"), error);
        return "Đã xảy ra lỗi trong quá trình xử lý yêu cầu của bạn.";
    }
};

// Lắng nghe tin nhắn từ người dùng và trả lời
client.on('message', async (message) => {
    const userInput = message.body; // Lấy nội dung tin nhắn từ người dùng

    // Log tin nhắn nhận được
    console.log(chalk.cyan(`Nhận tin nhắn từ người dùng: "${userInput}"`));

    // Gọi API Gemini để lấy phản hồi
    const response = await getGeminiResponse(userInput);

    // Gửi phản hồi từ Gemini cho người dùng
    message.reply(response);

    // Log phản hồi đã gửi
    console.log(chalk.magenta(`Đã trả kết quả cho người dùng: "${response}"`));
});

// Đăng nhập vào bot và mở server
client.openServer(process.env.PORT);
client.loginWithAppState(process.env.APPSTATE);
client.on('ready', (_, bid) => {
    console.log(chalk.green(`Đăng nhập thành công với ID: ${bid}`));
});

// Xử lý lỗi đăng nhập hoặc sự cố khác
client.on('error', (e) => {
    console.error(chalk.red("Lỗi đăng nhập"), e);
});
