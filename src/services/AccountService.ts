import {AccountModel , CustomerModel} from '../models/index'
import { accountCreateProps } from '../types/account';


export const accountService = {
    async createAccount(data:accountCreateProps){
        const {customerId,accountNumber,accountName,type,currency,currencySymbol,balance,interestRate,status} = data;

        const customer = await CustomerModel.findByPk(customerId);
        if(!customer){
            throw new Error('Customer not found');
        };

        const newAccount = await AccountModel.create({
            accountNumber,
            accountName: accountName || `${customer.firstName} ${customer.lastName}`,
            customerId: customerId ||customer.id,
            type,
            currency:currency || 'USD',
            currencySymbol: currencySymbol || "$",
            balance,
            interestRate,
            status: status || 'active',
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
    }
}