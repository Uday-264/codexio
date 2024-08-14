import {getRoom} from '@/data-access/rooms'
import { GithubIcon } from 'lucide-react';
import Link from 'next/link';
import { Tagslist,splitTags } from '@/components/tags-list';


export async function RoomPage(props:{
    params:{
        roomId:string
    }
}){
    const roomId=props.params.roomId;
    const room=await getRoom(roomId)
    if(!room){
        return <div>no room found with this room id</div>
    }
    const languages=room.tags && splitTags(room?.tags) 
    return(
        <div className="grid grid-cols-4 mt-7 min-h-screen  ">
            <div className="col-span-3  p-4 pr-2">
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-12">
                Video player
                </div>
            </div>
            <div className="col-span-1  p-4 pl-2 ">
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-5 flex flex-col  gap-4">
                <h2 className='text-2xl  leading-none tracking-tight text-center'>{room?.name}</h2>
                <p className="text-sm text-muted-foreground">{room?.description}</p>
                {room.githubRepo && <Link href={room.githubRepo} className='flex items-center gap-2' target="_blank" rel="noopener noreferrer">
            <GithubIcon/>
            Github project link
            </Link>}
            <Tagslist tags={languages}/>
                </div>
            </div>
        </div>
    )
}
export default RoomPage