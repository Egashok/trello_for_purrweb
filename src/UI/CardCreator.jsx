    import React, { useEffect, useState } from 'react';

const CardCreator = ({creator,setCreator,cards,setCards}) => {


    const [cardInfo,setCardInfo]=useState({id:'',title:'',body:' ',comments:'',author:''});



    const createCard=()=>{

        cardInfo.id=Date.now();
        cardInfo.author=localStorage.username
        setCards([...cards,cardInfo])
        setCardInfo({id:'',title:'',body:' ',comments:'',author:''})

    
      }

    return (
        <div className="Creator">
            
            <textarea value={cardInfo.title} onChange={e=>setCardInfo({id:'',title:e.target.value,body:'',comments:'',author:''})} type="text" className="creator__desc"/>
            <div className="creator__btns">

            <button onClick={()=>setCreator(false)} className="creator__btn">Отменить</button>
            <button onClick={createCard} className="creator__btn">Создать карточку</button>
            </div>

        </div>
        
        
        );
}
 
export default CardCreator;