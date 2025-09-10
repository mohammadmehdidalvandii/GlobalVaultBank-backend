import { error } from "console";
import { employeeService } from "../services/EmployeeService";
import {Req , Res} from '../types/express'
import {hashedPassword} from '../utils/auth'


export const employeeController = {
    async create(req:Req ,res:Res){
        try{
            const {employee_code , first_name , last_name , national_id , email , password ,phone , position ,department, hire_data  , status} = req.body;

            const existEmployee = await employeeService.getEmployeeByCodeEmployee(employee_code);
            if(!existEmployee) {
                 res.status(400).json({
                message:"Employee is already ",
                status:400,
            })
             }
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
    },
    async update(req:Req, res:Res){
        try{    
            const {id} = req.params;
            const updateData = req.body;

            if(!id) return res.status(400).json({
                message:"Employee ID is required",
                status:400,
            });

            const updateEmployee = await employeeService.updateEmployee(id , updateData);
            res.status(200).json({
                message:"Employee updated successfully",
                status:200,
                data:updateEmployee,
            })

        } catch(error){
            res.status(500).json({
                message:"Failed to update employee",
                status:500,
                error:error
            })
        }
    },
    async delete(req:Req, res:Res){
        try{
            const {id} = req.params;
            if(!id) return res.status(400).json({
                message:"Employee ID is required",
                status:400,
            });

            const deleteEmployee = await employeeService.deleteEmployee(id);
            res.status(200).json({
                message:"Employee deleted successfully",
                status:200,
                data:deleteEmployee
            })

        } catch(error){
            res.status(500).json({
                message:"Failed to delete employee",
                status:500,
                error:error
            })
        }
    },
    async getAllEmployees(req:Req,res:Res){
        try{
            const employees = await employeeService.getAllEmployees();
            res.status(200).json({
                message:"Get all employees",
                data:employees
            })
        } catch(error){
            return res.status(500).json({
                message:"Failed getAllEmployees",
                status:500,
                error:error,
            })
        }
    },
    async getEmployeeById(req:Req ,res:Res){
        try{
            const {id } = req.params;

            if(!id) return res.status(400).json({
                message:"Employee ID is required",
                status:400,
            });
            const employeeID = await employeeService.getEmployeeByID(id);
            res.status(200).json({
                message:'get employee by id',
                status:200,
                data:employeeID,
            })

        }catch(error){
            res.status(500).json({
                message:"Failed get employee_code",
                status:500,
                error:error,
            })
        }
    }
}