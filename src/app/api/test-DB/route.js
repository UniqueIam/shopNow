import React from 'react'
import user from "@/models/user.model";
import { connectDB } from '@/lib/dbConfig';

export async function GET(){
    try {
        await connectDB();
        return new Response(JSON.stringify({message:'Database connection successful!'}))
    } catch (error) {
        console.log('Error in connecting to database');
        return new Response(JSON.stringify(
            {message:'Database connection failed',error}
        ))
    }
}

