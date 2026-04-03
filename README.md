🎬 WatchList Frontend (React)
📌 Project Description

WatchList is a modern web application built with React.js that allows users to manage their movie lists efficiently.

The application interacts with a Laravel API secured using Laravel Sanctum, ensuring safe and authenticated access to user data.

🎯 Features
🎬 Add movies to a watchlist
✅ Mark movies as watched
📂 Organize movies into custom lists
🔐 User authentication (Login / Register)
🔄 Real-time interaction with the API
⚙️ Tech Stack
React.js
React Router
Axios / Fetch API
Laravel (Backend API)
Laravel Sanctum (Authentication)
🚀 Installation
1. Clone the repository
git clone https://github.com/your-username/watchlist-frontend.git
cd watchlist-frontend
2. Install dependencies
npm install
3. Setup environment variables

Create a .env file in the root directory:

VITE_API_URL=http://localhost:8000/api

Make sure your Laravel backend is running.

4. Run the application
npm run dev

Open your browser at:

http://localhost:5173
🔐 Authentication

This project uses Laravel Sanctum for authentication:

User logs in and receives a token
Token is stored (localStorage or cookies)
Token is sent with every API request
headers: {
  Authorization: `Bearer ${token}`
}
📁 Project Structure
src/
├── components/
├── pages/
├── services/
├── context/
├── App.jsx
└── main.jsx
🎯 Purpose

This project demonstrates:

Building a frontend application with React
Consuming a Laravel API
Implementing authentication with Sanctum
Structuring a scalable frontend project