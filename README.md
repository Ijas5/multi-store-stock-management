# Multi-Store Stock Management System

A full-stack MERN application for managing product stock across multiple stores.

## Features

### Authentication
- User Registration
- User Login
- JWT Authentication
- Password Hashing (bcrypt)
- Role-Based Authorization (Admin & Shopper)

### Admin
- Create Products
- Create Stores
- Adjust Stock
- Transfer Stock
- View Stock
- Low Stock Filter

### Shopper
- View Products
- View Stock
- Read-only Access

---

# Tech Stack

## Frontend

- React
- React Router
- Axios
- Bootstrap
- Vite

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt

---

# Project Structure

```
multi-store-stock
│
├── backend
│   ├── src
│   │   ├── config
│   │   ├── controllers
│   │   ├── middleware
│   │   ├── models
│   │   ├── routes
│   │   └── app.js
│   │
│   ├── server.js
│   └── package.json
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   └── App.jsx
│   │
│   └── package.json
│
└── README.md
```

---

# Installation

## Clone Repository

```bash
git clone https://github.com/Ijas5/multi-store-stock-management.git

cd multi-store-stock
```

---

# Backend Setup

```bash
cd backend

npm install
```

Create a `.env` file:

```
PORT=5000

MONGO_URI=mongodb://localhost:27017/multistore

JWT_SECRET=your_secret_key
```

Start Backend

```bash
npm run dev
```

---

# Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

---

# Default URLs

Frontend

```
http://localhost:5173
```

Backend

```
http://localhost:5000
```

---

# User Roles

## Admin

- Create Products
- Create Stores
- Adjust Stock
- Transfer Stock
- View Stock

## Shopper

- View Stock
- Read-only Dashboard

---

# API Endpoints

## Authentication

```
POST /api/auth/register

POST /api/auth/login
```

## Products

```
GET /api/products

POST /api/products
```

## Stores

```
GET /api/stores

POST /api/stores
```

## Stock

```
GET /api/stock

POST /api/stock/adjust

POST /api/stock/transfer
```

---

# Environment Variables

```
PORT

MONGO_URI

JWT_SECRET
```

---

# Assumptions

- SKU is unique.
- Stock is maintained per product per store.
- Only Admin users can update stock.
- Shopper users have read-only access.

---

# Future Improvements

- MongoDB Replica Set Transactions
- Dashboard Charts
- Pagination
- Search
- Better Validation
- Automated Tests

---

# Author

Muhammed Ijas

Full Stack Developer