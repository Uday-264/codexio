import { Badge } from "./ui/badge"

 export function splitTags(tags:string | undefined){
    if(!tags) return []
    return tags.split(',').map(tag=>tag.trim())
    
}

 function Tagslist({tags}:{tags:string[]}){
    
    return(
        <div className="flex gap-2 flex-wrap p-2">
            {tags.map((language,index)=>{
                return <Badge key={index} className='w-fit'>{language}</Badge>
            })}
            </div>
    )
}
export default Tagslist