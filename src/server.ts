import { req , res } from "./types/express";
import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import dotenv from 'dotenv'
const app = express();

dotenv.config()

// paras data JSON
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Middleware
app.use(morgan('dev'));
app.use(helmet());
app.use(cors())


app.get('/' , (req:req, res:res)=>{
    res.status(200).json({message:"server is running"})
})


const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
}).on('error',(error:NodeJS.ErrnoException)=>{
    console.log("error starting server",error)
})