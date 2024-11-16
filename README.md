# 💰 MERN Finance Dashboard App

A full-stack **Finance Dashboard Application** built using the **MERN stack** (MongoDB, Express, React, Node.js) with **TypeScript**. This project also includes **Machine Learning** for predictive analytics and uses **Material UI (MUI)** for the frontend design. The app provides visual insights into financial data, including revenue, expenses, and profit analysis.

## 📑 Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [License](#license)

## 🚀 Features

- **Finance Dashboard**: Visualizes financial metrics such as revenue, expenses, and profit.
- **Machine Learning Integration**: Uses ML models for forecasting financial trends.
- **Interactive UI**: Built with **React** and **Material UI** for a dynamic and responsive user experience.
- **TypeScript**: Provides type safety and better developer experience.
- **Full-Stack Application**: Combines **Node.js** and **Express** for backend API with a **React** frontend.
- **Data Persistence**: Stores financial data in **MongoDB**.

## 🖥️ Demo

_upcoming_

## 🛠️ Tech Stack

- **Frontend**: React, TypeScript, Material UI (MUI)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Machine Learning**: Python (Scikit-Learn, Pandas)
- **Deployment**: Vercel (Frontend), Render/Heroku (Backend)

## 📋 Prerequisites

- Node.js and npm installed
- MongoDB instance (local or cloud-based like MongoDB Atlas)
- Python environment (for machine learning scripts)
- [Vercel](https://vercel.com/) or [Render](https://render.com/) account for deployment (optional)

## 📦 Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/mern-finance-dashboard.git
   cd mern-finance-dashboard
   ```

2. **Install server dependencies**:

   ```bash
   cd server
   npm install
   ```

3. **Install client dependencies**:

   ```bash
   cd ../client
   npm install
   ```

4. **Set up Python environment for ML**:

   ```bash
   cd ml
   pip install -r requirements.txt
   ```

## 🔧 Configuration

1. **Backend**:
   - Create a `.env` file in the `server` directory and add your MongoDB URI:
     ```
     MONGODB_URI=your_mongo_uri
     PORT=5000
     ```
   - You may also include API keys or other environment variables as needed.

2. **Frontend**:
   - Create a `.env` file in the `client` directory and add your backend URL:
     ```
     REACT_APP_API_URL=http://localhost:5000
     ```

## ▶️ Usage

1. **Start the Backend Server**:

   ```bash
   cd server
   npm run dev
   ```

2. **Start the Frontend Development Server**:

   ```bash
   cd ../client
   npm start
   ```

3. **Run Machine Learning Scripts** (optional):

   ```bash
   cd ../ml
   python train_model.py
   ```

   - This step is only needed if you want to update the ML models or train new ones.

4. **Access the Application**:

   - The app will be running at [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
mern-finance-dashboard/
├── client/           # Frontend (React + TypeScript)
├── server/           # Backend (Node.js + Express)
├── ml/               # Machine Learning Scripts (Python)
└── README.md
```

## 🚀 Deployment

1. **Frontend Deployment** (Vercel):

   - Link your GitHub repo and deploy the frontend directly on Vercel.

2. **Backend Deployment** (Render/Heroku):

   - Configure your server environment variables.
   - Deploy using GitHub integration or manually with the CLI.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙌 Acknowledgements

- Tutorial by [EdRoh](https://www.youtube.com/watch?v=uoJ0Tv-BFcQ)
- OpenAI for predictive analytics model integration
- Material UI for modern UI components
