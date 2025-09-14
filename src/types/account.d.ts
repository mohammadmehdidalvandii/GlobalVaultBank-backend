import { UUID } from "crypto";

export interface IAccount {
    id:string,
    customerId:UUID,
    accountNumber:string,
    accountName:string,
    type:string,
    currency:string,
    currencySymbol:string,
    balance:string,
    interestRate:string,
    status:string,
}

export type accountCreateProps = Omit<IAccount , 'id'>;