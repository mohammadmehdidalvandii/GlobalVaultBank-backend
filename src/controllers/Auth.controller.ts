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
                path:"/auth/refresh-token",
                maxAge:7 * 24 * 60 * 60 * 1000,
            });

            res.status(200).json({
                message:"login successfully",
                status:200,
                data:{accessToken , employee}
            })

        } catch(error){
            res.status(500).json({
                message:"Failed login Employee",
                status:500,
                error:error
            })
        }
    }
}