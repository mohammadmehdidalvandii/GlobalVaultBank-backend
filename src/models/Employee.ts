import { DataTypes, STRING } from "sequelize";
import connectToDB from "../config/db";

const employee = connectToDB.define('employee',{
    id:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        primaryKey:true,
    },
    employee_code:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
    },
    first_name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    last_name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    national_id:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
        validate:{isEmail:true},
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    phone:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    position:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    department:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    hire_data:{
        type:DataTypes.DATE,
        allowNull:false,
    },
    status:{
        type:DataTypes.ENUM('active', 'inactive','suspended'),
        defaultValue:'active',
    },
    created_at:{
        type: DataTypes.DATE,
        defaultValue:DataTypes.NOW,
    },
    updated_at:{
        type:DataTypes.DATE,
        defaultValue:DataTypes.NOW,
    },
},{
    tableName:'employee',
    timestamps:true,
    createdAt:'created_at',
    updatedAt:'updated_at'
})

export default employee