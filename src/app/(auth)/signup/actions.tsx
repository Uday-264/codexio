"use server"
import db from '@/db/index'
import { users } from '@/db/schema'
import {UserSchema} from '@/db/schema'
export async function createUser(data:any){
    try {
        console.log(data)
        const res=await db.insert(users).values(data)
        console.log(res)
        return res
    } catch (error) {
        console.log(error)
        throw new Error("Error creating user")
    }
    
}
