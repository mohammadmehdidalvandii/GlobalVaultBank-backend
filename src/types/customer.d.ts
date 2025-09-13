export interface ICustomer{
id:string
firstName:string,
lastName:string,
email:string,
phone:string,
nationalID:string,
dateOfBirth:Date,
street:string,
city:string,
postalCode:string,
country:string,
status:"active"|"suspended"|"closed",
lastActivity:Date
}

export type customerCreateProps = Omit<ICustomer,"id">