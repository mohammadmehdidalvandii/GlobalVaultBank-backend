import connectToDB from "../config/db";
import { TransferModel , AccountModel ,CustomerModel } from "../models";
import { transferCreateProps } from "../types/transfer";
import { v4 as uuidv4 } from "uuid";


export const transferService = {
    async createTransfer(data:transferCreateProps){
        
        const {fromAccountId , toAccountId ,fromCustomerId ,toCustomerId ,amount ,currency , transferType ,description ,feeAmount ,exchangeRate , scheduledDate} = data;

        return await connectToDB.transaction(async (t)=>{
            // Validation Account and Customer
            const fromAccount = await AccountModel.findByPk(fromAccountId ,{transaction:t});
            if(!fromAccount) throw new Error('From account not found');
            const toAccount = await AccountModel.findByPk(toAccountId ,{transaction:t});
            if(!toAccount) throw new Error('To account not found');
            const fromCustomer = await CustomerModel.findByPk(fromCustomerId ,{transaction:t});
            if(!fromCustomer) throw new Error('From customer not found');
            const toCustomer = await CustomerModel.findByPk(toCustomerId ,{transaction:t});
            if(!toCustomer) throw  new Error('To customer not found');
    
            // Final Amount
            const finalAmount = (Number(amount) - Number(feeAmount) * Number(exchangeRate || 1));

            if(Number(fromAccount.balance) < Number(amount)){
                throw new Error('Insufficient balance in source account')
            }
            
            // change balance accounts
            fromAccount.balance = (Number(fromAccount.balance) - Number(amount));
            toAccount.balance = (Number(toAccount.balance)+ finalAmount);

            await fromAccount.save({transaction:t});
            await toAccount.save({transaction:t})

            const newTransfer = await TransferModel.create({
                fromAccountId,
                toAccountId,
                fromCustomerId,
                toCustomerId,
                amount,
                currency,
                transferType,
                status:"completed",
                referenceNumber:uuidv4(),
                description,
                feeAmount,
                exchangeRate,
                finalAmount,
                scheduledDate,
            },{
            transaction:t
            });
            return newTransfer
        })
    },
    async getAllTransfer(){
const transfers = await TransferModel.findAll({
  include: [
    { model: AccountModel, as: "fromAccount" },
    { model: AccountModel, as: "toAccount" },
    { model: CustomerModel, as: "fromCustomer" },
    { model: CustomerModel, as: "toCustomer" },
  ],
});
        return transfers
    }
}