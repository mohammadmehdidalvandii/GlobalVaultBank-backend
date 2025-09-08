import connectToDB from "./config/db";

async function  toDB() {
    try{
        await connectToDB.authenticate();
        console.log("DB connected successfully");
    }catch (error){
        console.log("DB connection failed ", error)
    }
}

toDB()