import  {verifyToken} from '../utils/auth';
import {Req,Res,Next} from '../types/express'

export function authenticateToken (req:Req,res:Res,next:Next){
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    console.log("token ", token);

    if(!token) return res.status(401).json({
        message:"No token provided",
        status:401,
    });
    try{
        const decoded = verifyToken(token);
        console.log("decoded" , decoded?.data);
        (req as any).user = decoded?.data
        next()
    } catch(error){
        return res.status(403).json({
            message:"Invalid or expired token",
            status:403,
        })
    }
}