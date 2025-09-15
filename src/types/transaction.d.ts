export interface ITransaction {
    id:string,
    accountId:string,
    customerId:string,
    transactionType:'credit'|'debit';
    amount:number,
    currency:string,
    description:string,
    referenceNumber:string,
    status:"pending"|"completed"|"failed";
};