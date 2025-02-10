# Book Review API

## 📌 Overview
The **Book Review API** is a RESTful API built using **Node.js, Express, and JWT Authentication**. It allows users to:
- 📚 View book details by ISBN, author, or title.
- 📝 Register, log in, and submit book reviews.
- 🔐 Authenticate using JWT for secure operations.
- 🌐 Use async/await and Promises for efficient API calls.

## 🛠️ Tech Stack
- **Backend**: Node.js, Express.js
- **Authentication**: JWT (JSON Web Token)
- **Database**: In-memory JSON object (for simplicity)
- **Middleware**: express-session, dotenv, axios

## 🚀 Getting Started

### 1️⃣ **Clone the Repository**
```sh
git clone https://github.com/MihirGosai/expressBookReviews.git
cd expressBookReviews
```

### 2️⃣ **Install Dependencies**
```sh
npm install
```

### 3️⃣ **Create a `.env` File**
```env
JWT_SECRET=your_secret_key
```

### 4️⃣ **Start the Server**
```sh
npm start
```

The API will run at **http://localhost:5000/**.

---

## 🔍 API Endpoints

### **📖 Public Routes (No Authentication Required)**
| HTTP Method | Endpoint | Description |
|------------|----------|-------------|
| `GET` | `/` | Get all books |
| `GET` | `/isbn/:isbn` | Get book by ISBN |
| `GET` | `/author/:author` | Get books by Author |
| `GET` | `/title/:title` | Get books by Title |
| `GET` | `/review/:isbn` | Get book reviews |
| `POST` | `/register` | Register a new user |

### **🔐 Protected Routes (JWT Authentication Required)**
| HTTP Method | Endpoint | Description |
|------------|----------|-------------|
| `POST` | `/customer/login` | Login and get JWT token |
| `PUT` | `/customer/auth/review/:isbn` | Add/Update a book review |
| `DELETE` | `/customer/auth/review/:isbn` | Delete a book review |

---

## 🔑 Authentication
- Users must **log in** to obtain a JWT token.
- Add `Authorization: Bearer <token>` in headers for protected routes.

### **Example Login Request (Postman)**
```json
{
  "username": "mihirgiri",
  "password": "mypassword"
}
```

### **Example Response**
```json
{
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1..."
}
```

---

## 🔄 Async/Await & Promises Implementation
The following endpoints use **async/await or Promises**:
| HTTP Method | Endpoint | Technique Used |
|------------|----------|----------------|
| `GET` | `/async/books` | Async/Await |
| `GET` | `/async/isbn/:isbn` | Promises |
| `GET` | `/async/author/:author` | Promises |
| `GET` | `/async/title/:title` | Promises |

---

## ✅ Testing with Postman
1. **Run the server**: `npm start`
2. **Open Postman**
3. **Test each endpoint** using the URLs above.
4. **For protected routes**, include the **JWT token** in the `Authorization` header.

---

## 🤝 Contributing
Feel free to **fork** this repo, submit **pull requests**, or **suggest improvements**!

---

## 📜 License
This project is licensed under the **MIT License**.

---

Happy Coding! 🚀
