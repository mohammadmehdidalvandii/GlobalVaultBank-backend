import {Sequelize}  from 'sequelize';

const connectToDB = new Sequelize("mary","root","ERln7VWKKU3CjU01",{
    host:'services.irn2.chabokan.net',
    port:58643,
    dialect:'mysql'
})
// const connectToDB = new Sequelize("globalbank","root","",{
//     host:'localhost',
//     dialect:'mysql'
// })

export default connectToDB