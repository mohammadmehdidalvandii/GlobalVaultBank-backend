import { Req , Res } from "./types/express";
import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import dotenv from 'dotenv'
import connectToDB from "./config/db";
import EmployeeRoutes from './routes/EmployeeRoutes';
import AuthRoutes from './routes/AuthRoutes';

const app = express();

dotenv.config()

// paras data JSON
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Middleware
app.use(morgan('dev'));
app.use(helmet());
app.use(cors())


// routes 
app.use('/api/employees' , EmployeeRoutes)
app.use('/api/auth', AuthRoutes)

// connection to dataBase
const connectToDatabase = async () => {
  try {
    await connectToDB.authenticate();
    console.log("DB connected successfully");

    await connectToDB.sync({ alter: true });

    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });

  } catch (error) {
    if (error instanceof Error) console.log("DB connection failed", error.message);
    else console.log("DB connection failed", error);
  }
};

connectToDatabase()