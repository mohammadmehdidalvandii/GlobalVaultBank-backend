import { body , validationResult } from "express-validator";
import { Req , Res } from "../types/express";

export const validationTransfer = [
    body("fromAccountId").notEmpty().withMessage("from account id is required").isUUID().withMessage('form account id UUID'),
    body("toAccountId").notEmpty().withMessage('to account id is required').isUUID().withMessage('to account id UUID'),
    body("fromCustomerId").notEmpty().withMessage('from customer id is required').isUUID().withMessage('from customer id UUID'),
    body("toCustomerId").notEmpty().withMessage('to customer id is required ').isUUID().withMessage('to customer id UUID'),
    body("amount").notEmpty().withMessage('amount is required').isNumeric().withMessage('amount must be a number'),
    body("currency").isLength({min:3}).withMessage('currency must be 3 characters'),
    body("transferType").isIn(['internal', 'external' , 'wire']).withMessage('transferType is not valid'),
    body("description").optional(),
    body("feeAmount").notEmpty().withMessage('feeAmount is required'),
    body("exchangeRate").notEmpty().withMessage('exchangeRate is required'),
]