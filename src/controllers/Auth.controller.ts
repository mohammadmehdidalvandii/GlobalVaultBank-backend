import { JwtPayload } from 'jsonwebtoken';
import {authService} from '../services/AuthService';
import {Req, Res} from '../types/express'


export const authController = {
    async login(req:Req , res:Res){
        try{
            const {employee_code , password} = req.body;
            const {accessToken , refreshToken , employee} = await authService.login(employee_code ,password);

            res.cookie('refreshToken' , refreshToken,{
                httpOnly:true,
                sameSite:"strict",
                path:"/api/auth/refresh-token",
                maxAge:7 * 24 * 60 * 60 * 1000,
            });

            res.status(200).json({
                message:"login successfully",
                status:200,
                data:{accessToken , employee}
            })

        } catch(error:any){
            res.status(500).json({
                message:"Failed login Employee",
                status:500,
                error:error.message
            })
        }
    },
    async refreshToken(req:Req , res:Res){
        try{
            const token = req.cookies.refreshToken;
            if(!token) return res.status(401).json({
                message:"No refresh token"
            });
            const accessToken = await authService.refreshToken(token);
            res.status(200).json({
                message:"updated Refresh token successfully",
                data:accessToken,
            })
        } catch(error:any){ 
            res.status(500).json({
                message:"Failed RefreshToken",
                status:500,
                error:error.message,
            })
        }
    },
    async getProfile(req:Req,res:Res){
        try{
             const user: any  = req.user
            const employee = await authService.getProfile(user.id);
            res.status(200).json({
                message:"Get profile successfully",
                status:200,
                data:employee
            })
        } catch(error:any){
            res.status(500).json({
                message:"Failed get profile",
                status:500,
                error:error.message
            })
        }
    },
    async logout(req:Req , res:Res){
        res.clearCookie('refreshToken',{path:"/api/auth/refresh-token"});
        res.json({
            message:"logged out successfully"
        })
    }
}