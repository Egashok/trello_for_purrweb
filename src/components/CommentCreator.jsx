import React, { useState } from 'react';

const CommentCreator = ({comCreator,setComCreator,body,title,creator}) => {

    const [value,setValue]=useState()

    
    const createComment=function(e){
        e.preventDefault()
        const newComment={
            comid:Number(localStorage.maxcomid),
            author:localStorage.username,
            body:value
    
        }
        localStorage.maxcomid++
        
      creator(newComment)
      
        
        setValue('')

    }
   

    return (
        
    <div comment__creator>


            <textarea value={value}  onChange={e=>setValue(e.target.value)} type="text" className="comment_desc"/>
            
            <button onClick={()=>setComCreator(false)}  className="comment__btn">Отменить</button>
            <button onClick={createComment} className="comment__btn">Добавить комментарии</button>
           
        </div>
        
        );
}
 
export default CommentCreator;