import {hash , compare} from 'bcryptjs';
import {sign , verify} from 'jsonwebtoken';


const securityCode = process.env.SRC_CODE || "sjajkabkjfbajkbfjkbajcbjkasbjkcbajkbcjkas"
if(!securityCode){
    throw new Error('Security code is not found');
}

// generate access token
const generateAccessToken = (data:object)=>{
    try{
        const token = sign({data}, securityCode ,{expiresIn:'15m'});
        return token
    } catch(error){
        console.log("Invalid generate token =>" , error)
    }
};
// generate refresh token
const generateRefreshToken = (data:object)=>{
    try{
        const token = sign({data}, securityCode ,{expiresIn:'7d'});
        return token
    } catch(error){
        console.log("Invalid generate token =>" , error)
    }
};

// verify Token
const verifyToken = (token:string)=>{
    try{
        const payload = verify(token, securityCode);
        return payload
    } catch(error){
        console.log("Invalid verify token =>" , error)
    }
};

// hashed password;
const hashedPassword = async (password:string):Promise<string>=>{
    const hashPassword = await hash(password , 10);
    return hashPassword
}

// compare password
const comparePassword = async (password:string , hashedPassword:string):Promise<boolean>=>{
    const validPassword = await compare(password , hashedPassword);
    return validPassword
}

export {
    generateAccessToken,
    generateRefreshToken,
    verifyToken,
    hashedPassword,
    comparePassword,
}