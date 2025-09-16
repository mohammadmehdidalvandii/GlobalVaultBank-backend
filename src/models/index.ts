import CustomerModel from "./Customer";
import AccountModel from "./Account";
import TransactionModel from './Transaction';
import TransferModel from './Transfer'

// Customer <-> Account
CustomerModel.hasMany(AccountModel, {foreignKey:'customerId', as: 'accounts'});
AccountModel.belongsTo(CustomerModel,{foreignKey:"customerId" , as: 'customer'});
// Account <-> Transaction
AccountModel.hasMany(TransactionModel , {foreignKey:'accountId' ,as:'transactions'});
TransactionModel.belongsTo(AccountModel , {foreignKey:'accountId',as:'account'});
// Customer <-> Transaction
CustomerModel.hasMany(TransactionModel ,{foreignKey:'customerId',as:'transactions'});
TransactionModel.belongsTo(CustomerModel, {foreignKey:'customerId', as:'customer'})
// Account <-> Transfer 
AccountModel.hasMany(TransferModel, {foreignKey:"fromAccountId",as:"outTransfer"});
AccountModel.hasMany(TransferModel, {foreignKey:"toAccountId",as:"incomeTransfer"});
TransferModel.belongsTo(AccountModel, {foreignKey:"fromAccountId",as:"fromAccount"});
TransferModel.belongsTo(AccountModel, {foreignKey:"toAccountId",as:'toAccount'});
// Customer <-> Transfer
CustomerModel.hasMany(TransferModel, {foreignKey:"fromCustomerId" ,as:'sentTransfer'});
CustomerModel.hasMany(TransferModel, {foreignKey:"toCustomerId", as:'receivedTransfer'});
TransferModel.belongsTo(CustomerModel, {foreignKey:"fromCustomerId" , as:"fromCustomer"});
TransferModel.belongsTo(CustomerModel, {foreignKey:"toCustomerId" , as:"toCustomer"});

export {CustomerModel , AccountModel ,TransactionModel , TransferModel}