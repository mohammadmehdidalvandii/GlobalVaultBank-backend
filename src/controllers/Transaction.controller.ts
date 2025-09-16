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
    },
    async transactionGetAll(req:Req , res:Res){
        try{
            const data = req.body
            const transaction = await transactionService.getTransactions(data);
            res.status(200).json({
                message:"Get all and filter transactions",
                status:200,
                data:transaction,
            })
        } catch(error:any){
            res.status(500).json({
                message:"Failed get Transaction server",
                status:500,
                error:error.message
            })
        }
    },
    async transactionGetId(req:Req ,res:Res){
        try{
            const {id} = req.params
            const transaction = await transactionService.getTransactionById(id);
            res.status(200).json({
                message:"Get Transaction by ID successfully",
                status:200,
                data:transaction,
            })
        } catch(error:any){
            res.status(500).json({
                message:"Failed get Transaction server",
                status:500,
                error:error.message,
            })
        }
    }
}