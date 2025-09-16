import { Optional } from "sequelize";

export interface ITransfer{
id:string,
fromAccountId:string,
toAccountId:string,
fromCustomerId:string,
toCustomerId:string,
amount:number,
currency:string,
transferType:"internal"|"external"|"wire",
status:"pending"|"processing"|"completed"|"failed"|"cancelled",
referenceNumber:string,
description:string,
feeAmount:number
exchangeRate:number
finalAmount:number
scheduledDate:data,
completedAt:data,
}

export interface TransferCreationAttributes extends Optional<ITransfer, "id">{}
