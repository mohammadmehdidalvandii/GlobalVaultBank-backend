import { body , validationResult } from "express-validator";
import { Req , Res , Next } from "../types/express"; 

export const validationCustomer = [
    body("firstName").notEmpty().withMessage('FirstName is required'),
    body("lastName").notEmpty().withMessage('LastName is required'),
    body("email").notEmpty().withMessage('Email is required').isEmail().withMessage('Invalid email format'),
    body("phone").notEmpty().withMessage('Phone is required'),
    body("nationalID").notEmpty().withMessage('NationalID is required').isLength({min:10 }).withMessage("Notional ID must be 10 characters"),
    body("street").notEmpty().withMessage('Street is required'),
    body("city").notEmpty().withMessage('City is required'),
    body("postalCode").notEmpty().withMessage('postalCode is required'),
    body("country").notEmpty().withMessage('Country is required'),
    body("status").notEmpty().withMessage('Status is required').isIn(['active','suspended','closed']).withMessage('Invalid status value'),
    (req:Req, res:Res ,  next:Next)=>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({
                error:errors.array()
            })
        }
        next()
    }
]