import { TransferModel , AccountModel ,CustomerModel } from "../models";
import { transferCreateProps } from "../types/transfer";
import { v4 as uuidv4 } from "uuid";


export const transferService = {
    async createTransfer(data:transferCreateProps){
        
        const {fromAccountId , toAccountId ,fromCustomerId ,toCustomerId ,amount ,currency , transferType ,description ,feeAmount ,exchangeRate , scheduledDate} = data;

        // Validation Account and Customer
        const fromAccount = await AccountModel.findByPk(fromAccountId);
        if(!fromAccount) throw new Error('From account not found');
        const toAccount = await AccountModel.findByPk(toAccountId);
        if(!toAccount) throw new Error('To account not found');
        const fromCustomer = await CustomerModel.findByPk(fromCustomerId);
        if(!fromCustomer) throw new Error('From customer not found');
        const toCustomer = await CustomerModel.findByPk(toCustomerId);
        if(!toCustomer) throw  new Error('To customer not found');

        // Final Amount
        const finalAmount = (Number(amount) - Number(feeAmount) * Number(exchangeRate || 1));

        const newTransfer = await TransferModel.create({
            fromAccountId,
            toAccountId,
            fromCustomerId,
            toCustomerId,
            amount,
            currency,
            transferType,
            status:"pending",
            referenceNumber:uuidv4(),
            description,
            feeAmount,
            exchangeRate,
            finalAmount,
            scheduledDate,
        });
        return newTransfer
    }
}