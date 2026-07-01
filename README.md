# GlobalVaultBank — Backend

The backend API for **GlobalVaultBank**, a bank dashboard application. Built with **Express**, **TypeScript**, and **MySQL**.

## 🚀 Tech Stack

- **Node.js** + **Express 5** — Web server & REST API framework
- **TypeScript** — Static typing
- **MySQL** (via `mysql2`) — Relational database
- **Sequelize** — ORM for database modeling & queries
- **JWT (jsonwebtoken)** — Authentication & authorization
- **bcryptjs** — Password hashing
- **cookie-parser** — Cookie handling
- **cors** — Cross-Origin Resource Sharing
- **helmet** — Security headers
- **express-rate-limit** — Rate limiting / brute-force protection
- **express-validator** — Request input validation
- **morgan** — HTTP request logging
- **node-cron** — Scheduled background jobs
- **dotenv** — Environment variable management
- **uuid** — Unique ID generation

## 📦 Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm (comes with Node.js)
- A running **MySQL** server

## 🔧 Installation & Usage

1. **Clone the repository**
   ```bash
   git clone https://github.com/mohammadmehdidalvandii/GlobalVaultBank-backend.git
   cd GlobalVaultBank-backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory with your database credentials and other required settings, for example:
   ```env
   PORT=5000
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=yourpassword
   DB_NAME=globalvaultbank
   JWT_SECRET=your_jwt_secret
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```
   This uses `nodemon` + `ts-node` to watch and auto-restart on file changes.

5. **Test the database connection**
   ```bash
   npm run testDB
   ```

6. **Build for production**
   ```bash
   npm run build
   ```

7. **Run the production build**
   ```bash
   npm start
   ```

## 📁 Project Structure

```
GlobalVaultBank-backend/
├── src/
│   └── server.ts       # Application entry point
├── .gitignore
├── package.json         # Dependencies & scripts
└── tsconfig.json        # TypeScript configuration
```

## 🔐 Security Features

- Password hashing with **bcryptjs**
- **JWT**-based authentication
- HTTP security headers via **helmet**
- Rate limiting to prevent abuse (**express-rate-limit**)
- Input validation with **express-validator**

## 📄 License

ISC
