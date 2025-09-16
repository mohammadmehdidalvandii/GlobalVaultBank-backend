import { body , validationResult } from "express-validator";
import { Req , Res ,Next } from "../types/express";

export const validationTransaction = [
    body("accountId").notEmpty().withMessage('account id is required').isUUID().withMessage('account id is UUID '),
    body("customerId").notEmpty().withMessage('customer id is required').isUUID().withMessage('customer id is UUID'),
    body("transactionType").isIn(['debit','credit']).withMessage('transaction type not valid'),
    body("amount").notEmpty().withMessage('amount is required').isNumeric().withMessage('amount must be a number'),
    body("currency").isLength({min:3}).withMessage('currency must be 3 characters'),
    body("description").optional(),
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