import mongoose from "mongoose";

export async function connectDB() {
    try {
        mongoose.connect(process.env.MONGODB_URL)
        const connection = mongoose.connection

        connection.on('connected',()=>{
            console.log('MongoDB Connected');
            
        })

        connection.on('error',()=>{
            console.log('MongoDB connection failed');
            process.exit();
        })
    } catch (error) {
        console.log('Something went wrong while connecting with database');
        console.log(error);
    }
}