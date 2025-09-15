import { Req , Res } from "../types/express";
import { transactionService } from "../services/TransactionService";

export const transactionController = {
    async create(req:Req , res:Res){
        try{
            console.log("red=>" , req.body)
            const data = req.body;
            console.log("data =>" ,data)
            const transaction = await transactionService.createTransaction(data);
            res.status(201).json({
                message:"Transaction created successfully",
                status:201,
                data:transaction
            })
        } catch(error:any){
            res.status(500).json({
                message:'Failed created Transaction server',
                status:500,
                error:error.message
            })
        }
    }
}