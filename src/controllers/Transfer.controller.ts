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
    }
}