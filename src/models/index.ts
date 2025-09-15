import CustomerModel from "./Customer";
import AccountModel from "./Account";
import TransactionModel from './Transaction';

// Customer <-> Account
CustomerModel.hasMany(AccountModel, {foreignKey:'customerId', as: 'accounts'});
AccountModel.belongsTo(CustomerModel,{foreignKey:"customerId" , as: 'customer'});
// Account <-> Transaction
AccountModel.hasMany(TransactionModel , {foreignKey:'accountId' ,as:'transactions'});
TransactionModel.belongsTo(AccountModel , {foreignKey:'accountId',as:'account'});
// Customer <-> Transaction
CustomerModel.hasMany(TransactionModel ,{foreignKey:'customerId',as:'transactions'});
TransactionModel.belongsTo(CustomerModel, {foreignKey:'customerId', as:'customer'})

export {CustomerModel , AccountModel ,TransactionModel}