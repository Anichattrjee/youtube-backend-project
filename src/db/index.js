import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
//connecting database here
 export const connectDB= async ()=>{
    try{
        const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        // console.log(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`Connected to Video database: DB HOST: ${connectionInstance.connection.host}`);
    }
    catch(error)
    {
        console.log("MONGODB connection error! ",error);
    }
};

