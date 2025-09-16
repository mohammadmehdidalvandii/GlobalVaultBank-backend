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
        } catch(error:any){
            return res.status(500).json({
                message:"Failed to create customer server",
                status:500,
                error:error.message,
            })
        }
    },
    async customersGetAll(req:Req, res:Res){
        try{
            const customers = await customerService.customerGetAll();
            res.status(200).json({
                message:"get all customers successfully",
                status:200,
                data:customers
            })
        } catch(error:any){
            return res.status(500).json({
                message:"Failed to get all customers server",
                status:500,
                error:error.message,
            })
        }
    },
    async customerUpdate(req:Req, res:Res){
        try{
            const {id} = req.params;
            const updateData = req.body;
            if(!id) return res.status(400).json({
                message:"Customer ID is required",
                status:400,
            });

            const updateCustomer = await customerService.customerUpdate(id , updateData);
            res.status(200).json({
                message:"Customer Updated successfully ",
                status:200,
                data:updateCustomer,
            })

        }catch(error:any){
            res.status(500).json({
                message:"Failed to update customer server",
                status:500,
                error:error.message,
            })
        }
    },
    async customerByID(req:Req , res:Res){
        try{
            const {id} = req.params;
            if(!id) return res.status(400).json({
                message:"Customer ID is required",
                status:400,
            }); 

            const customer = await customerService.customerGetById(id);
            res.status(200).json({
                message:"get customer by id successfully",
                status:200,
                data:customer
            })

        } catch(error:any){
            res.status(500).json({
                message:"Failed get customer ID server",
                status:500,
                error:error.message,
            })
        }
    },
    async customerDelete(req:Req , res:Res){
        try{
            const {id} = req.params;
            if(!id) return res.status(400).json({
                message:"Customer ID is required",
                status:400,
            }); 

            const deleteCustomer = await customerService.customerDelete(id);
            res.status(200).json({
                message:"customer delete successfully",
                status:200,
                data: deleteCustomer,
            })
            
        }catch(error:any){
            res.status(500).json({
                message:"Failed to delete customer server",
                status:500,
                error:error.message,
            })
        }
    }
}
