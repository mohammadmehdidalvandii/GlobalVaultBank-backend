import { DataTypes , Model } from "sequelize";
import connectToDB from "../config/db";
import { DailyReportCreationAttributes, IDailyReport } from "../types/dailyReport";

type dailyReportInstance = Model<IDailyReport , DailyReportCreationAttributes> & IDailyReport;

const dailyReport = connectToDB.define<dailyReportInstance , DailyReportCreationAttributes>('dailyReport',{
    id:{
        type:DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey:true,
    },
    reportDate:{
        type:DataTypes.DATEONLY,
        allowNull:false,
    },
    totalTransactions:{
        type:DataTypes.INTEGER,
        allowNull:false,
        defaultValue:0,
    },
    totalVolume:{
        type:DataTypes.DECIMAL(20,2),
        allowNull:false,
        defaultValue:0.0,
    },
    currencyBreakdown:{
        type:DataTypes.JSON,
        allowNull:true,
    },
    accountActivity:{
        type:DataTypes.JSON,
        allowNull:true,
    },
},{
    timestamps:true,
    underscored:true,
})