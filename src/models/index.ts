import customer from "./Customer";
import account from "./Account";

customer.hasMany(account, {foreignKey:'customerId', as: 'account'});
account.belongsTo(customer,{foreignKey:"customerId" , as: 'customer'});

export {customer , account}