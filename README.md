# 🌟 Messenger Bot with Google Gemini AI 🌟

Welcome to the **Messenger Bot** integrated with **Google Gemini AI**! This bot uses `fca-utils` to interact with Facebook Messenger and leverages **Google Generative AI** for intelligent and dynamic responses. It’s fast, simple, and effortlessly handles user messages.

## 🚀 Features

- **Real-time AI Responses**: Generates intelligent replies in real-time using the Google Gemini AI.
- **Prefix-less Input**: No need for command prefixes; the bot processes inputs directly.
- **Color-Coded Logs**: Uses `chalk` to display colorful, easy-to-read logs.

## 🛠️ Installation and Setup

### Prerequisites

- [Node.js](https://nodejs.org/) installed.
- A **Google Gemini API Key**.
- **Facebook AppState** for bot control over Messenger.

### 1. Clone the Repository

```bash
git clone https://github.com/letho1608/messenger-bot-gemini.git
cd messenger-bot-gemini
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory and configure it like this:

```bash
GEMINI_API_KEY=your_google_gemini_api_key
APPSTATE=your_facebook_appstate
PORT=3000
```

### 4. Run the Bot

Start the bot with:

```bash
npm start
```

## 🧩 How to Get the **Google Gemini API Key**

1. Visit the [Google AI Studio](https://aistudio.google.com/app/apikey?hl=vi).
2. Create a new project and navigate to **API & Services**.
3. Enable the **Generative AI API (Gemini)**.
4. Generate an API key and add it to your `.env` file.

## 🔐 How to Get the **Facebook AppState**

To log into Messenger without exposing your credentials, you'll need the **Facebook AppState**:

1. Install the [Facebook AppState Edge Extension](https://microsoftedge.microsoft.com/addons/detail/c3c-ufc-utility/ghipjppkbhlomcadpjldhhcoolhpgngm)  
   or the [Facebook AppState Chrome Extension](https://chromewebstore.google.com/detail/c3c-ufc-utility/ekgmbjnloldgikngiachemodebfpkgdp).
2. Log into Facebook and use the extension to extract your **AppState**.
3. Copy the generated Base64 and add it to your `.env` file as `APPSTATE`.

## 📝 Key Libraries and Technologies

- **Node.js**: Platform for building the bot.
- **fca-utils**: Handles Facebook Messenger interactions.
- **GoogleGenerativeAI**: Integrates Google Gemini for AI-generated responses.
- **dotenv**: Manages environment variables.
- **chalk**: Adds colorful logging for better readability.

## 🛡️ Error Handling

Robust error handling ensures that issues, whether from API calls or Facebook Messenger, are properly logged and displayed.

## 📜 License

This project is licensed under the MIT License.
