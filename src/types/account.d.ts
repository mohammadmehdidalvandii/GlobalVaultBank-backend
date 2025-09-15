import { Optional } from "sequelize";

export interface IAccount {
    id:string,
    customerId:string,
    accountNumber:string,
    accountName:string,
    type:string,
    currency:string,
    currencySymbol:string,
    balance:string,
    interestRate:string,
    status:string,
}

export interface AccountCreationAttributes extends Optional<IAccount , 'id'>{}

export type accountCreateProps = Omit<IAccount , 'id'>;