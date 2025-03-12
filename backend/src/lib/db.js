import mongoose from "mongoose";

export const ConnectDB=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Database Connected Successfully')
    } catch (error) {
        console.log("Database is not connected",error)
    }
}