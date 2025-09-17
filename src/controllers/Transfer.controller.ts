import { transferService } from "../services/TransferService";
import { Req , Res } from "../types/express";

export const transferController = {
    async create(req:Req, res:Res){
        try{
            const data = req.body;
            const transfer = await transferService.createTransfer(data);
            return res.status(201).json({
                message:"created transfer successfully ",
                status:201,
                data:transfer,
            })
        } catch(error:any){
            res.status(500).json({
                message:"Failed create transfer server error",
                status:500,
                error:error.message
            })
        }
    },
    async getTransfer(req:Req , res:Res){
        try{
            const transfers = await transferService.getAllTransfer();
            res.status(200).json({
                message:"get transfer successfully",
                status:200,
                data:transfers
            })
        }catch(error:any){
            res.status(500).json({
                message:"Failed get transfers server error",
                status:500,
                error:error.message,
            })
        }
    },
    async getTransferId(req:Req ,res:Res){
        try{
            const {id} = req.params;
            if(!id) return res.status(400).json({message:"ID is required "});
            const transfer = await transferService.getTransferById(id);
            res.status(200).json({
                message:"get transfer by id successfully",
                status:200,
                data:transfer,
            })
        }catch(error:any){
            res.status(500).json({
                message:"Failed get transfer id server error",
                status:500,
                error:error.message,
            })
        }
    }
}