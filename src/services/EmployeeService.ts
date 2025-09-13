import EmployeeModel from "../models/Employee";
import { IEmployee , employeeCreateProps } from "../types/employee";


export const employeeService = {
    async  createEmployee(data:employeeCreateProps){
        const newEmployee = await EmployeeModel.create(data as any)
        return newEmployee
    },

    async getAllEmployees(){
        const employees = await EmployeeModel.findAll();
        return employees
    },

    async getEmployeeByID(id:string){
        const employeeID = await EmployeeModel.findByPk(id);
        return employeeID;
    },

    async getEmployeeByCodeEmployee(employee_code:string){
        const employeeCode = await EmployeeModel.findOne({where:{employee_code}});
        return employeeCode
    },

    async updateEmployee(id:string , data:Partial<IEmployee>){
        const employeeUpdate = await EmployeeModel.update(data , {where:{id}})
        return employeeUpdate
    },

    async deleteEmployee(id:string){
        const employeeDelete =  await EmployeeModel.destroy({where:{id}});
        return employeeDelete
    }
}




