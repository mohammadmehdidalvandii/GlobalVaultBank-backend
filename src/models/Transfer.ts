import { DataTypes, Model  } from "sequelize";
import connectToDB from "../config/db";
import account from "./Account";
import customer from "./Customer";
import { ITransfer, TransferCreationAttributes } from "../types/transfer";

type transactionInstance = Model<ITransfer , TransferCreationAttributes> & ITransfer

const transfer =  connectToDB.define<transactionInstance , TransferCreationAttributes>('transfer',{
    id:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        primaryKey:true,
    },
    fromAccountId:{
        type:DataTypes.UUID,
        allowNull:false,
        field:"from_account_id",
        references:{
            model:account,
            key:'id'
        },
    },
    toAccountId:{
        type:DataTypes.UUID,
        allowNull:false,
        field:"to_account_id",
        references:{
            model:account,
            key:"id"
        }
    },
    fromCustomerId:{
        type:DataTypes.UUID,
        allowNull:false,
        field:'from_customer_id',
        references:{
            model:customer,
            key:'id'
        },
    },
    toCustomerId:{
        type:DataTypes.UUID,
        allowNull:false,
        field:'from_customer_id',
        references:{
            model:customer,
            key:'id'
        }
    },
    amount:{
        type:DataTypes.DECIMAL(15,2),
        allowNull:false,
    },
    currency:{
        type:DataTypes.STRING(3),
        allowNull:false,
    },
    transferType:{
        type:DataTypes.ENUM('internal','external','wire'),
        allowNull:false,
    },
    status:{
        type:DataTypes.ENUM("pending","processing","completed","failed","cancelled"),
        defaultValue:"pending",
    },
    referenceNumber:{
        type:DataTypes.STRING(50),
        unique:true,
    },
    description:{
        type:DataTypes.TEXT,
    },
    feeAmount:{
        type:DataTypes.DECIMAL(10,2),
        defaultValue:0.0,
    },
    exchangeRate:{
        type:DataTypes.DECIMAL(10,6),
        defaultValue:1.0,
    },
    finalAmount:{
        type:DataTypes.DECIMAL(15,2),
        allowNull:true,
    },
    scheduledDate:{
        type:DataTypes.DATE,
        allowNull:true,
    },
    completedAt:{
        type:DataTypes.DATE,
        allowNull:true,
    },
},{
    timestamps:true,
    underscored:true,
});

export default transfer