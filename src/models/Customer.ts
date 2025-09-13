import { DataTypes, Model } from 'sequelize';
import connectToDB from '../config/db';
import { ICustomer } from '../types/customer';

type customerInstance = Model<ICustomer> & ICustomer;

const customer = connectToDB.define<customerInstance>('customer',{
    id:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        primaryKey:true,
    },
    firstName:{
        type:DataTypes.STRING(100),
        allowNull:false,
    },
    lastName:{
        type:DataTypes.STRING(100),
        allowNull:false,
    },
    email:{
        type: DataTypes.STRING(255),
        allowNull:false,
        unique:true,
        validate:{isEmail:true},
    },
    phone: DataTypes.STRING(20),
    nationalID:{
        type: DataTypes.STRING(50),
        allowNull:false,
        unique:true,
    },
    dateOfBirth:DataTypes.DATEONLY,
    street: DataTypes.STRING(255),
    city: DataTypes.STRING(100),
    postalCode: DataTypes.STRING(50),
    country:DataTypes.STRING(100),
    status:{
        type:DataTypes.ENUM("active","suspended","closed"),
        defaultValue:'active',
    },
    lastActivity:{
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
},{
   timestamps:true,
   underscored:true 
});

export default customer