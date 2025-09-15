import { Optional } from "sequelize";

export interface ITransaction {
    id:string,
    accountId:string,
    customerId:string,
    transactionType:string;
    amount:number,
    currency:string,
    description:string,
    referenceNumber:string,
    status:"pending"|"completed"|"failed";
};

export interface TransactionCreationAttributes extends Optional<ITransaction,'id'>{}

export type transactionCreateProps = Omit<ITransaction, 'id'>