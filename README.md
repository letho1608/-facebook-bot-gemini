Here’s an updated version of the README with the "Project Structure" and "Code Explanation" sections removed:

---

# 🌟 Messenger Bot with Google Gemini AI 🌟

This is a **Messenger Bot** integrated with **Google Gemini AI**, built using `fca-utils` for Facebook Messenger interactions and the **Google Generative AI** API for generating intelligent responses. It's simple, fast, and handles user messages effortlessly.

## 🚀 Features
- **Real-time AI Responses**: Integrates with Google Gemini AI to generate dynamic replies based on user messages.
- **No Command Prefixes**: Processes user inputs directly without requiring any command prefixes.
- **Colorful Logs**: Uses `chalk` to display logs with different colors, making them easier to read.

## 🛠️ Installation and Setup

### Prerequisites

- [Node.js](https://nodejs.org/) installed.
- **Google Gemini API Key** (We'll guide you on how to get it!).
- **Facebook AppState** (Login credentials to control your bot on Messenger).

### 1. Clone the Repository

```bash
git clone https://github.com/letho1608/messenger-bot-gemini.git
cd messenger-bot-gemini
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root directory and configure it like this:

```bash
GEMINI_API_KEY=your_google_gemini_api_key
APPSTATE=your_facebook_appstate
PORT=your_preferred_port_number
```

### 4. Running the Bot

Simply run the bot with the following command:

```bash
npm start
```

## 🧩 How to Get the **Google Gemini API Key**?

1. Visit the [Google Cloud Console](https://console.cloud.google.com/).
2. Create a new project and navigate to the **API & Services** section.
3. Enable the **Generative AI API (Gemini)**.
4. Create credentials and copy the **API key**.
5. Paste the API key into your `.env` file as shown above.

## 🔐 How to Get the **Facebook AppState**?

You'll need the **Facebook AppState** to log in to Messenger without exposing your credentials.

1. Download the [Facebook AppState Chrome Extension](https://chrome.google.com/webstore/detail/fbstate/abcde12345) (or a similar extension).
2. Log in to Facebook, then use the extension to extract your **AppState**.
3. Copy the JSON string generated and store it in your `.env` file as `APPSTATE`.

## 📝 Key Libraries and Technologies

- **Node.js**: JavaScript runtime for building the bot.
- **fca-utils**: For handling Facebook Messenger interactions.
- **GoogleGenerativeAI**: For communicating with the Google Gemini API to generate responses.
- **dotenv**: Manages environment variables.
- **chalk**: Adds color to logs for better visibility.

## 🛡️ Error Handling

The bot has robust error handling to ensure that any issues, whether from API calls or Facebook Messenger, are properly logged and displayed.

## 📜 License

This project is licensed under the MIT License.

---

This version excludes the "Project Structure" and "Code Explanation" sections as requested while retaining all the essential setup and usage information.
