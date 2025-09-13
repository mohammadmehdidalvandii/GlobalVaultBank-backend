import CustomerModel from "../models/Customer";
import { customerCreateProps } from "../types/customer";

export const customerService = {
    async  createCustomer(data:customerCreateProps){
        try{
            const customer = await CustomerModel.create(data as any);
            return customer
        } catch(error:any){
            console.log("Error creating customer:",error);
             throw new Error('Failed to create customer');
        }
    },
    async customerGetByEmail(email:string){
        const customer = await CustomerModel.findOne({where:{email}});
        return customer
    },
    async customerGetAll(){
        const customers = await CustomerModel.findAll()
        return customers
    }
}