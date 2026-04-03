# 🎬 WatchList Frontend (React)

## 📌 Project Description

WatchList is a modern web application built with **React.js** that allows users to manage their movie lists efficiently.

The application interacts with a **Laravel API** secured using **Laravel Sanctum**, ensuring safe and authenticated access to user data.

---

## 🎯 Features

- 🎬 Add movies to a watchlist  
- ✅ Mark movies as watched  
- 📂 Organize movies into custom lists  
- 🔐 User authentication (Login / Register)  
- 🔄 Real-time interaction with the API  

---

## ⚙️ Tech Stack

- **React.js**  
- **React Router**  
- **Axios / Fetch API**  
- **Laravel (Backend API)**  
- **Laravel Sanctum (Authentication)**  

---

## 🚀 Installation

### 1. Clone the repository

```bash
git clone https://github.com/Oussamatiu/React-Movie-Tracker.git
cd React-Movie-Tracker
```

### 2. Install dependencies

```bash
npm install
```

### 3. Setup environment variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=http://localhost:8000/api
```

> Make sure your Laravel backend is running.

### 4. Run the application

```bash
npm run dev
```

Open your browser at:
```
http://localhost:5173
```

---

## 🔐 Authentication

This project uses **Laravel Sanctum** for authentication:

- User logs in and receives a token  
- Token is stored (localStorage or cookies)  
- Token is sent with every API request  

```js
headers: {
  Authorization: `Bearer ${token}`
}
```

---

## 📁 Project Structure

```
src/
├── api/
│   └── auth.jsx
│
├── auth/
│   ├── Login.jsx
│   └── Register.jsx
│
├── pages/
│   ├── Dashboard.jsx
│   ├── Home.jsx
│   └── LandingPage.jsx
│
├── routes/
│   ├── GuestRoute.jsx
│   └── ProtectedRoute.jsx
│
├── components/
│   ├── Button.jsx
│   ├── Input.jsx
│   ├── Label.jsx
│   ├── Header.jsx
│   ├── Footer.jsx
│
│   ├── layout/
│   │   ├── Layout.jsx
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│
│   └── landingPage/
│       ├── HeroSection.jsx
│       ├── FeaturesStrip.jsx
│       ├── CtaBanner.jsx
│       ├── FilmCard.jsx
│       └── WatchlistSection.jsx
│
├── App.js
├── App.css
├── index.js
├── index.css
├── App.test.js
├── setupTests.js
└── reportWebVitals.js

```

---

## 🎯 Purpose

This project demonstrates:

- Building a frontend application with React  
- Consuming a Laravel API  
- Implementing authentication with Sanctum  
- Structuring a scalable frontend project  

---

## 📌 Improvements (Optional)

- Add screenshots  
- Deploy on Vercel or Netlify  
- Add error handling & loading states  
- Use Context API or Redux for state management  