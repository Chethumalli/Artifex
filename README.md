# 🎨 Artifex

> Managing digital art collections, artists, and museum events.
---

🔗 **Live Website:**  
[https://artifex-ajiet.vercel.app/](https://artifex-ajiet.vercel.app/)

---

## 🚀 Overview

Artifex is a powerful web platform designed for artists, curators, and collectors to create, manage, and showcase digital artworks.  
It provides tools for collaboration, secure transactions, analytics, and event management.

---

## ✨ Features

- 🎨 Artwork Management (Upload, Edit, Showcase)
- 👤 User Authentication & Role-based Access
- 🤝 Artist–Client Collaboration
- 🛒 Order & Commission System
- ⭐ Reviews & Ratings
- 📊 Analytics Dashboard
- 🏛️ Museum & Event Management
- 🔒 Secure API & JWT Authentication

---

## 🧱 Tech Stack

### Frontend
- React.js
- HTML5, CSS3, JavaScript

### Backend
- Node.js
- Express.js
---

## 📂 Project Structure

```
Artifex/
│── frontend/        # React frontend
│── backend/         # Express backend
│── models/          # Database schemas
│── routes/          # API routes
│── controllers/     # Business logic
│── config/          # DB and environment config
│── .env             # Environment variables
│── package.json
```

---

## ⚙️ Installation

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Chethumalli/Artifex.git
cd Artifex
```

### 2️⃣ Install Dependencies

```bash
npm install
cd frontend
npm install
cd ..
cd backend
npm install
```

---

## 🔑 Environment Variables

Create a `.env` file in the backend folder and add:

```env

```

---

## ▶️ Running the Project

### Run both frontend & backend
```bash
npm start
```

### Run backend only
```bash
npm run server
```

### Run frontend only
```bash
npm run dev
```

---

## 🔌 API Endpoints

### 📦 Orders
```
GET    /api/order/client
GET    /api/order/artist
POST   /api/order/new
PUT    /api/order/accept
PUT    /api/order/reject
PATCH  /api/order/submit
```
## 🛡️ Security

- JWT Authentication  
- Role-based Access Control  
- Input Validation  

---

## 🤝 Contributing

Contributions are welcome!

```bash
# Fork the repo
# Create a new branch
git checkout -b feature-name

# Commit changes
git commit -m "Added new feature"

# Push
git push origin feature-name
```

## 👨‍💻 Author

**Chethan Malli**

- GitHub: https://github.com/Chethumalli  
- LinkedIn: https://linkedin.com/in/chethumalli  

---

## ⭐ Support

If you like this project:

- ⭐ Star the repo  
- 🍴 Fork it  
- 🧠 Contribute  

---

## 💡 Future Improvements

- AI-based artwork recommendations  
- NFT integration  
- Real-time chat system  
- Payment gateway integration  

---

> Built with ❤️ for artists and creators
