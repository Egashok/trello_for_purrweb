import { useState ,useEffect} from "react"

const Comments = ({card,com,setCard,remove}) => {

        const [body,setBody]=useState(com.body)
  
        const checkAccess=(e)=>{
                if(com.author!== localStorage.username){
                        document.querySelector('.comment___p').setAttribute('readonly','readonly')
                        
                }
        
        }
        useEffect(()=>{
      
        const comfind=(card.comments).find(cm=>cm.comid ===com.comid)
        comfind.body=body
        card.comments=(card.comments).filter(c=>c.comid !== com.comid)

         card.comments=([...card.comments,comfind])

        
        },[body])
      
   
    

        return (
       <div className="comment_i">
        <div className="comment__top">
        <h5 className="">{com.author}</h5>
        <img onClick={()=>remove(com)} className="card__trash" src="trash.svg"></img>
        </div>
        <textarea value={body} onChange={(event)=>setBody(event.target.value)}  onClick={(e)=>checkAccess(e)} className={'comment___p'}></textarea>
       </div>
        );


}
export default Comments;