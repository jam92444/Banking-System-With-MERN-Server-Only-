

# 🏦 Banking System Backend (MERN – Server Only)

A backend banking system API built using **Node.js, Express.js, and MongoDB**.
This project provides RESTful APIs for managing users, accounts, and transactions in a banking system.

This repository contains **server-side logic only** and can be integrated with any frontend (React, Angular, mobile app, etc.).

---

## 🚀 Features

* ✅ User Registration & Login
* 🔐 JWT Authentication
* 🔑 Password Hashing (bcrypt)
* 💰 Deposit Money
* 💸 Withdraw Money
* 🔁 Transfer Funds
* 📜 Transaction History
* 🛡️ Input Validation & Error Handling
* 🌐 RESTful API Structure

---

## 🛠️ Tech Stack

* **Node.js**
* **Express.js**
* **MongoDB**
* **Mongoose**
* **JWT (JSON Web Token)**
* **bcryptjs**
* **dotenv**

---

## 📁 Project Structure

```
server/
│── controllers/
│── models/
│── routes/
│── middleware/
│── config/
│── app.js / server.js
│── package.json
```

---

## ⚙️ Installation

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/jam92444/Banking-System-With-MERN-Server-Only-.git
cd Banking-System-With-MERN-Server-Only-
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Create Environment File

Create a `.env` file in the root directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## ▶️ Run the Server

For development:

```bash
npm run dev
```

For production:

```bash
npm start
```

Server will run on:

```
http://localhost:5000
```

---

## 📌 Sample API Endpoints

### 🔐 Authentication

```
POST   /api/auth/register
POST   /api/auth/login
```

### 👤 Users

```
GET    /api/users
GET    /api/users/:id
```

### 💰 Transactions

```
POST   /api/transactions/deposit
POST   /api/transactions/withdraw
POST   /api/transactions/transfer
GET    /api/transactions/history
```

---

## 🧪 Testing

You can test the APIs using:

* Postman
* Thunder Client (VS Code Extension)
* Insomnia

---

## 📈 Future Improvements

* Role-based access control
* Admin dashboard
* Frontend integration (React)
* Unit & Integration testing (Jest)
* Deployment (Render / Railway / AWS)

---

## 👨‍💻 Author

Developed as a backend practice project to strengthen MERN stack skills and understand real-world banking system logic.
