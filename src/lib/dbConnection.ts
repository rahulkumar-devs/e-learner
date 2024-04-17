
import mongoose from "mongoose";

type ConnectioObject = {
    isConnected?:number,

}

const connection : ConnectioObject ={}

async function dbConnection ():Promise<void>{
    if(connection.isConnected){
        console.log("Already connected to database")
    }

    try {
        await mongoose.connect("")
        
    } catch (error) {
        
    }
}