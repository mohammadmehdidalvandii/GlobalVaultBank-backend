import { accountService } from "../services/AccountService";
import { Req  , Res} from "../types/express";
import { accountCreateProps } from '../types/account';

export const accountController = {
    async create(req:Req , res:Res){
        try{
            const data = req.body;
            const account = await accountService.createAccount(data);
            res.status(201).json({
                message:"create account successfully",
                status:201,
                data: account
            })
        } catch(error){
            res.status(500).json({
                message:"Failed create account server",
                status:500,
                error:error
            })
        }
    },
    async accountGetAll(req:Req,res:Res){
        try{
            const accounts = await accountService.getAllAccounts();
            res.status(200).json({
                message:"get all accounts successfully",
                status:200,
                data:accounts
            })
        }catch(error){
            res.status(500).json({
                message:"Failed get all accounts server",
                status:500,
                error:error
            })
        }
    }
}