import {AccountModel , CustomerModel} from '../models/index'
import { accountCreateProps } from '../types/account';
import { v4 as uuidv4 } from "uuid";

export const accountService = {
    async createAccount(data:accountCreateProps){
        const {customerId,accountNumber,accountName,type,currency,currencySymbol,balance,interestRate,status, dailyWithdrawalLimit ,dailyTransactionLimit ,cardStatus ,isClosed} = data;

        const customer = await CustomerModel.findByPk(customerId);
        if(!customer){
            throw new Error('Customer not found');
        };

        const createAccountNumber = "AC-"+ uuidv4().slice(0,12);


        const newAccount = await AccountModel.create({
            accountNumber: createAccountNumber,
            accountName: accountName || `${customer.firstName} ${customer.lastName}`,
            customerId: customerId ||customer.id,
            type,
            currency:currency || 'USD',
            currencySymbol: currencySymbol || "$",
            balance,
            interestRate,
            status: status || 'active',
            dailyWithdrawalLimit,
            dailyTransactionLimit,
            cardStatus,
            isClosed,
        });

        return newAccount
    },
    async getAllAccounts(){
        const accounts = await AccountModel.findAll({include:[{
            model:CustomerModel,
            as:'customer'
        }]});
        return accounts
    },
    async getAccountByID(id:string){
        const account = await AccountModel.findByPk(id,{include:[{
            model:CustomerModel,
            as:'customer'
        }]});
        return account
    },
    async deleteAccount(id:string){
        const accountDelete = await AccountModel.destroy({where:{id}});
        return accountDelete
    },
    async updateAccount(id:string ,data:Partial<accountCreateProps>){
        const account = await AccountModel.findByPk(id);
        if(!account) throw new Error("Account not found")
        await account.update(data);
        return account
    },
}