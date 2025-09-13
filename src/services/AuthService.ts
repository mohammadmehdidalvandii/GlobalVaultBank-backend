import EmployeeModel from '../models/Employee';
import {comparePassword , generateAccessToken , generateRefreshToken , verifyToken} from '../utils/auth';


export const authService = {
    async login(employee_code:string , password:string){
        const employee = await EmployeeModel.findOne({where:{employee_code}});
        if(!employee) throw new Error('Employee not found');
        
        const isValidPassword = await comparePassword(password ,employee.password);
        if(!isValidPassword) throw new Error('Invalid Password');

        const accessToken = generateAccessToken({
            id:employee.id,
            employee_code:employee.employee_code,
            department:employee.department,  
            position:employee.position
        });
        const refreshToken = generateRefreshToken({
            id:employee.id,
        });

        return {employee , accessToken , refreshToken}
    },
    async refreshToken(refreshToken:string){
        try{
            const payload:any = verifyToken(refreshToken);
            const newAccessToken = generateAccessToken({
                id:payload.id,
            });
            return newAccessToken;
        } catch(error){
            throw new Error(`Invalid refreshToken => ${error}`, );
        }
    }
}