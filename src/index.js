import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import { connectDB } from "./db/index.js";
import dotenv from "dotenv";


dotenv.config({
    path:"./env"
});


connectDB()
.then(()=>{
    app.on("error",(error)=>{
        console.log("ERROR: ",error);
    })

    app.listen(process.env.PORT || 8000,()=>{
        console.log("Server is running...")
    })
})
.catch((error)=>{
    console.log("MONGODB db connection failed.")
})

