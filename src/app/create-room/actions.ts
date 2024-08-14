"use server"
import db from '@/db/index'
import {Room,room} from '@/db/schema'
import { getSession } from '@/lib/auth'
import {revalidatePath} from 'next/cache'
export async function createRoomAction(roomData:Omit<Room,"userId"|"id">){
    const session=await getSession()
    if(!session){
      throw new Error("user must be login to create this room")
    }
 
  await db.insert(room).values({...roomData,userId:session?.user.id})
  revalidatePath('/')
}