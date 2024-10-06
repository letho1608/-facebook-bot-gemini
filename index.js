import { Client } from "fca-utils";
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from 'dotenv';
import chalk from 'chalk'; // Thêm thư viện chalk

dotenv.config(); // Đảm bảo bạn đã cấu hình .env để chứa GEMINI_API_KEY

const client = new Client({
    prefix: process.env.PREFIX,
    ignoreMessageInCommandEvent: true
});

// Cấu hình API Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

// Hàm gọi API Gemini và xử lý phản hồi
const getGeminiResponse = async (userInput) => {
    try {
        // Thông báo khi yêu cầu bắt đầu xử lý
        console.log(chalk.blue("Đang xử lý yêu cầu..."));
        
        // Gửi yêu cầu đến API Gemini
        const result = await model.generateContent(userInput);

        // Xử lý phản hồi từ API
        const response = await result.response;
        const text = response.text();

        // Thông báo yêu cầu đã được xử lý thành công
        console.log(chalk.green("Yêu cầu đã được xử lý thành công."));
        return text;
    } catch (error) {
        // Thông báo khi có lỗi
        console.error(chalk.red("Đã có lỗi xảy ra khi gọi API Gemini:"), error);
        return chalk.yellow("Đã có lỗi xảy ra trong quá trình xử lý yêu cầu của bạn.");
    }
};

client.openServer(process.env.PORT);
client.loginWithAppState(process.env.APPSTATE);
client.on('ready', (_, bid) => {
    console.log(chalk.green(`Đăng nhập thành công với ID: ${bid} [${process.env.PREFIX}]`));
});

client.on('command', async (command) => {
    if (command.name === "ai") {
        const userInput = command.commandArgs.join(" ");
        
        // Thông báo khi nhận được yêu cầu từ người dùng trong CMD
        console.log(chalk.cyan(`Nhận yêu cầu từ người dùng: "${userInput}"`));
        
        // Gọi hàm xử lý Gemini và lấy kết quả phản hồi
        const response = await getGeminiResponse(userInput);

        // Gửi phản hồi từ Gemini cho người dùng mà không in thông báo ra CMD
        command.message.reply(response);

        // Thông báo đã trả kết quả cho người dùng trong CMD
        console.log(chalk.magenta(`Đã trả kết quả cho người dùng: "${response}"`));
    }
});

client.on('error', (e) => {
    // Thông báo lỗi đăng nhập trong CMD
    console.error(chalk.red("Lỗi đăng nhập"));
    console.error(e);
});
