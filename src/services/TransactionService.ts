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
    },
    async getTransactions(filter: any = {}){
        const {accountId , customerId , status ,transactionType} = filter;

        const where:any = {};
        if(accountId) where.accountId = accountId;
        if(customerId) where.customerId = customerId;
        if(status) where.status = status;
        if(transactionType) where.transactionType = transactionType;

        const transactions = await TransactionModel.findAll({where , include:[
            {model:AccountModel , as:"account"},
            {model:CustomerModel , as:'customer'},
        ]});
        return transactions
    },
    async getTransactionById(id:string){
        const transaction = await TransactionModel.findByPk(id,{
            include:[
                {model:AccountModel , as:'account'},
                {model: CustomerModel, as:'customer'},
            ]
        })
        return transaction
    },
    async approveTransaction(id:string){
        const transaction = await TransactionModel.findByPk(id);
        if(!transaction) throw new Error('Transaction not found');
        
        // checking status transaction
        if(transaction.status !== 'pending'){
            throw new Error('Transaction already processed');
        }
        // find transaction what account
        const account = await AccountModel.findByPk(transaction.accountId);
        if(!account) throw new Error('Account not found');
        // change balance account 
        if(transaction.transactionType === 'debit'){
        account.balance = Number(account.balance) - Number(transaction.amount );
        } else if(transaction.transactionType === 'credit'){
            account.balance = Number(account.balance) + Number(transaction.amount);
        }

        await account.save();
        transaction.status = 'completed';
        await transaction.save();

        return transaction
    },
    async rejectTransaction(id:string){
        const transaction = await TransactionModel.findByPk(id);
        if(!transaction) throw new Error('Transaction not found');
        
        if(transaction.status !== 'pending'){
            throw new Error("Transaction already processed");
        }
        transaction.status = "failed";
        await transaction.save();
        return transaction
    }
}