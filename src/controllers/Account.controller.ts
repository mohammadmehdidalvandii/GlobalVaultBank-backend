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
        } catch(error:any){
            res.status(500).json({
                message:"Failed create account server",
                status:500,
                error:error.message
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
        }catch(error:any){
            res.status(500).json({
                message:"Failed get all accounts server",
                status:500,
                error:error.message
            })
        }
    },
    async accountGetById(req:Req , res:Res){
        try{
            const {id} = req.params;
            if(!id) return res.status(400).json({
                message:"ID is required",
                status:400,
            });
            const account = await accountService.getAccountByID(id);
            res.status(200).json({
                message:"get account by ID successfully",
                status:200,
                data:account
            })
        }catch(error:any){
            res.status(500).json({
                message:"Failed get account by ID  server",
                status:500,
                error:error.message
            })
        }
    },
    async delete(req:Req , res:Res){
        try{
            const {id} = req.params;
            if(!id) return res.status(400).json({
                message:"ID is required",
                status:400,
            });
            const deleteAccount = await accountService.deleteAccount(id);
            res.status(200).json({
                message:"delete account successfully",
                status:200,
                data:deleteAccount,
            })
        } catch(error:any){
            res.status(500).json({
                message:"Failed delete account server",
                status:500,
                error:error.message
            })
        }
    },
    async update(req:Req , res:Res){
        try{
            const {id} = req.params;
            const data = req.body;
            if(!id) return res.status(400).json({
                message:"ID is required",
                status:400,
            });
            const updateAccount = await accountService.updateAccount(id ,data)
            res.status(200).json({
                message:"updated account successfully",
                status:200,
                data:updateAccount,
            })
        } catch(error:any){
            res.status(500).json({
                message:"Failed account update server",
                status:500,
                error:error.message
            })
        }
    }
}