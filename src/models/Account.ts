import { DataTypes } from "sequelize";
import connectToDB from "../config/db";
import customer from "./Customer";

const account = connectToDB.define('account',{
    id:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        primaryKey: true,
    },
    customerId:{
        type:DataTypes.UUID,
        allowNull:false,
        field:'customer_id',
        references:{
            model:customer,
            key:'id'
        }
    },
    accountNumber:{
        type:DataTypes.STRING(20),
        allowNull: false,
        unique: true
    },
    accountName:{
        type:DataTypes.STRING(255),
        allowNull:false,
    },
    type:{
        type: DataTypes.ENUM('checking','savings','business','investment'),
        allowNull: false,
    },
    currency:{
        type:DataTypes.STRING(3),
        defaultValue:'USD'
    },
    currencySymbol:{
        type: DataTypes.STRING(5),
        defaultValue:'$',
    },
    balance:{
        type: DataTypes.DECIMAL(15,2),
        defaultValue:0.00,
    },
    interestRate:{
        type: DataTypes.DECIMAL(5,2),
        defaultValue:0.00
    },
    status:{
        type:DataTypes.ENUM('active','frozen','closed'),
        defaultValue:'active'
    },
},{
    timestamps:true,
    underscored:true
});


export default account