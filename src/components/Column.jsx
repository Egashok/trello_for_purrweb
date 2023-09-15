import { useState } from "react";
import CardCreator from "../UI/CardCreator";

const Column = ({title,card}) => {

  const [creator,setCreator]=useState(false)


    return (
        <div className='board__column'>
          <div className='column__title'>
            <h1 className='column__title-name'>{title}
            </h1>
            <button className='column__title-btn'></button>
          </div>
          <div className='column__items'>
            {card}
           

          </div>
          <div className='case__creator'>
            {creator
            ? <CardCreator creator={creator} setCreator={setCreator}/>
            : <button onClick={()=>setCreator(true)} className='case__creator-name'>Добавить задачу +</button>
            }
          </div>
        </div>
        
        );
}
 
export default Column;