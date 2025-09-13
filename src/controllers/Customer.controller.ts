import { customerService } from "../services/CustomerService";
import {Req , Res} from '../types/express'

export const customerController = {
    async create(req:Req , res:Res){
        try{
            const { firstName,lastName,email,phone,nationalID,dateOfBirth,street,city,postalCode,country,status,lastActivity} = req.body;
            const existCustomer = await customerService.customerGetByEmail(email);
            if(existCustomer) return res.status(400).json({
                message:"Customer is already",
                status:400
            })
            const newCustomer = await customerService.createCustomer({
                firstName,
                lastName,
                email,
                phone,
                nationalID,
                dateOfBirth,
                street,
                city,
                postalCode,
                country,
                status,
                lastActivity
            });
            res.status(201).json({
                message:"Customer created successfully",
                status:201,
                data: newCustomer
            })
        } catch(error){
            return res.status(500).json({
                message:"Failed to create customer server"
            })
        }
    }
}
