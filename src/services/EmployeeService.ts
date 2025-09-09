import EmployeeModel from "../models/Employee";
import { IEmployee , employeeCreateProps } from "../types/employee";

export const employeeService = {
    async  createEmployee(data:employeeCreateProps) {
        const newEmployee = await EmployeeModel.create(data)
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

    async updateEmployee(id:string , data:Partial<IEmployee>){
        const employeeUpdate = await EmployeeModel.update(data , {where:{id}})
        return employeeUpdate
    },

    async deleteEmployee(id:string){
        const employeeDelete =  await EmployeeModel.destroy({where:{id}});
        return employeeDelete
    }
}




