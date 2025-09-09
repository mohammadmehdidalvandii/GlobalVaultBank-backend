import { employeeService } from "../services/EmployeeService";
import {Req , Res} from '../types/express'
import {hashedPassword} from '../utils/auth'


export const employeeController = {
    async create(req:Req ,res:Res){
        try{
            const {employee_code , first_name , last_name , national_id , email , password ,phone , position ,department, hire_data  , status} = req.body;

            // hashed password;
            const hashPassword = await hashedPassword(password);
            
            const employee = await  employeeService.createEmployee({
                employee_code,
                first_name,
                last_name,
                national_id,
                email,
                password:hashPassword,
                phone,
                position,
                department,
                hire_data: new Date(),
                status,
            });
            res.status(201).json({
                message:"Created Employee Successfully ",
                status:201,
                data:employee
            })

        } catch(error){
            res.status(400).json({
                message:"Failed to create employee",
                status:400,
                error:error
            })
        }
    }
}