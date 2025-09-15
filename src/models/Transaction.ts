import { DataTypes, Model } from "sequelize";
import connectToDB from "../config/db";
import account from '../models/Account';
import customer from '../models/Customer';
import { ITransaction, TransactionCreationAttributes } from "../types/transaction";

type transactionInstance = Model<ITransaction ,  TransactionCreationAttributes> & ITransaction;

const transaction = connectToDB.define<transactionInstance ,TransactionCreationAttributes>('transaction',{
    id:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        primaryKey:true,
    },
    accountId:{
        type:DataTypes.UUID,
        allowNull: false,
        field:'account_id',
        references:{
            model: account,
            key:'id'
        }
    },
    customerId:{
        type:DataTypes.UUID,
        allowNull: false,
        field:'customer_id',
        references:{
            model:customer,
            key:'id',
        }
    },
    transactionType:{
        type:DataTypes.ENUM('credit','debit'),
    },
    amount:{
        type:DataTypes.DECIMAL(15,2)
    },
    currency:{
        type:DataTypes.STRING(20),
    },
    description:{
        type:DataTypes.TEXT,
    },
    referenceNumber:{
        type: DataTypes.STRING(50),
    },
    status:{
        type:DataTypes.ENUM('pending','completed','failed')
    }
},{
    timestamps:true,
    underscored:true,
});

export default transaction