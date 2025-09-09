import {body , validationResult} from 'express-validator';
import { Req , Res , Next } from '../types/express';

export const validationEmployees = [
    body('employee_code')
    .notEmpty().withMessage('Employee code is required'),
    body('first_name')
    .notEmpty().withMessage('First name is required'),
    body('last_name')
    .notEmpty().withMessage('Last name is required'),
    body('national_id')
    .notEmpty().withMessage('National ID is required')
    .isLength({min:10 , max:10}).withMessage('national ID must be 10 characters'),
    body('email')
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Invalid email format'),
    body('password')
    .notEmpty().withMessage('Password is required')
    .isLength({min:8}).withMessage('Password must be at least 8 characters long'),
    body('phone')
    .notEmpty().withMessage('Phone is required'),
    body('position')
    .notEmpty().withMessage('Position is required'),
    body('department')
    .notEmpty().withMessage('Department is required'),
    body('hire_data')
    .notEmpty().withMessage('Hire date is required'),
    body('status')
    .isIn(['active', 'inactive', 'suspended']).withMessage('Invalid status value'),
    (req:Req , res:Res , next:Next)=>{
        const error = validationResult(req);
        if(!error.isEmpty()){
            return res.status(400).json({error:error.array()})
        }
        next()
    }
]