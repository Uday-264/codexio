"use client"
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import {useSession ,signIn,signOut} from 'next-auth/react'
import Link from 'next/link'
export function Header(){
    const session=useSession()
    return(
        <header>
            <div>
                
                {session?.data?.user?.username}
                {
                    session.data?(<Button onClick={()=>signOut()}>SignOut</Button>):
                    (<div className="flex gap-4">
                        <Link href="/signup">signup</Link>
                        <Link href="/signin">signIn</Link>
                    </div>)
                }                    
                <ModeToggle/>
            </div>
        </header>
    )
}