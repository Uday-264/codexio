import db from '@/db/index'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import {Room} from '@/db/schema'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {GithubIcon} from 'lucide-react'
import {getRooms} from '@/data-access/rooms'
import {splitTags,Tagslist} from '@/components/tags-list'

function RoomCard({room}:{room:Room}){
  return(
    <Card>
      <CardHeader>
        <CardTitle>{room.name}</CardTitle>
        <CardDescription>{room.description}</CardDescription>
      </CardHeader>
      <CardContent className='flex flex-col gap-4'>
          {room.githubRepo && <Link href={room.githubRepo} className='flex items-center gap-2' target="_blank" rel="noopener noreferrer">
            <GithubIcon/>
            Github project link
            </Link>}
            { room?.tags && <Tagslist tags={splitTags(room.tags)}/>}
      </CardContent>
      <CardFooter>
        
        <Button asChild>
          <Link href={`/rooms/${room.id}`}>Join Room</Link>
        </Button>
      </CardFooter>
    </Card>

  )
}
async function Page(){
  const rooms=await getRooms()
  // const tags=splitTags(room.tags)
  return(
  <div className="container flex flex-col mt-7 justify-center gap-9 ">
    <div className="flex justify-between items-center">
      <h1 className="text-4xl">Find Dev Rooms</h1>
      <Button>
        <Link href="/create-room">
          Create Room
        </Link>
      </Button>
      
    </div>
    
      <div className="grid grid-cols-3 gap-4">
     {rooms.map((room)=>(
        <RoomCard room={room} key={room.id}/>
     ))}
     </div>
    
  </div>
      )
}
export default Page


