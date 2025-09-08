import {Sequelize}  from 'sequelize';

const connectToDB = new Sequelize("globalbank","root","",{
    host:'localhost',
    dialect:'mysql'
})

export default connectToDB