import { Optional } from "sequelize";
import { Json } from "sequelize/types/utils";

export interface IDailyReport{
id:string
reportDate:date,
totalTransactions:number
totalVolume:number
currencyBreakdown:Json
accountActivity:Json
}

export interface DailyReportCreationAttributes extends Optional<IDailyReport , "id">{}