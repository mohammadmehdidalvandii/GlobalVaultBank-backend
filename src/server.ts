import { Req , Res } from "./types/express";
import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import dotenv from 'dotenv'
import connectToDB from "./config/db";
const app = express();

dotenv.config()

// paras data JSON
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Middleware
app.use(morgan('dev'));
app.use(helmet());
app.use(cors())







app.get('/' , (req:Req, res:Res)=>{
    res.status(200).json({message:'Server is running  send'})
})




// connection to dataBase
 const connectToDatabase = async ()=>{
    try{
        await connectToDB.authenticate();
        console.log("DB connected successfully");

        const port = process.env.PORT || 3000;
        app.listen(port,()=>{
            console.log(`Server is running on port ${port}`);
        }).on('error',(error:NodeJS.ErrnoException)=>{
            console.log("error starting server",error)
        })
    }catch (error:unknown){
        console.log("DB connection failed ", error)
    }
}

connectToDatabase()