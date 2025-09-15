import { Optional } from "sequelize";
import { TransactionModel , AccountModel ,CustomerModel } from "../models";
import { ITransaction, transactionCreateProps } from "../types/transaction";
import { v4 as uuidv4 } from "uuid";


export const transactionService = {
    async createTransaction(data:transactionCreateProps){
        const {accountId , customerId , transactionType ,amount ,currency ,description} = data;
        // exist account and customer
        const account = await AccountModel.findByPk(accountId);
        if(!account) throw new Error('Account not found');
        console.log("account=>" ,account)
        const customer = await CustomerModel.findByPk(customerId);
        if(!customer) throw new Error('Customer not found');

        // created transaction  mode pending
        const newTransaction = await TransactionModel.create({
            accountId:accountId || account.id,
            customerId:customerId || customer.id,
            transactionType,
            amount,
            currency,
            description,
            referenceNumber: uuidv4(),
            status: "pending",
        });
        return newTransaction
    }
}