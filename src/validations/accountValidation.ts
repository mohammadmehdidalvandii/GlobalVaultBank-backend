import { body ,  validationResult } from "express-validator";
import { Req , Res , Next } from "../types/express";

export const  validationAccount = [
    body('customerId').notEmpty().withMessage('customer ID is required').isUUID().withMessage('customer id is UUID'),
    // body('accountNumber').notEmpty().withMessage('accountNumber is required').isLength({min:10}).withMessage('accountNumber must be 10 number'),
    body('type').isIn(['checking','savings','business','investment']).withMessage('account type is not valid'),
    body('balance').optional().isFloat({min:0}).withMessage('balance just number '),
    body('interestRate').optional().isFloat({min:0}).withMessage('interestRate just number'),
    (req:Req ,res:Res , next:Next)=>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({
                error:errors.array()
            })
        }
        next()
    }
]