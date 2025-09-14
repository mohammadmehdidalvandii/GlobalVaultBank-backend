import CustomerModel from "./Customer";
import AccountModel from "./Account";

CustomerModel.hasMany(AccountModel, {foreignKey:'customerId', as: 'accounts'});
AccountModel.belongsTo(CustomerModel,{foreignKey:"customerId" , as: 'customer'});

export {CustomerModel , AccountModel}