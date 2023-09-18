import { useState } from "react";
import CardCreator from "../UI/CardCreator";

const Column = ({ title, card }) => {

  const [creator, setCreator] = useState(false)

  const [tit, setTit] = useState(title)

  return (
    <div className='board__column'>
      <div className='column__title'>
        <input onChange={(event) => setTit(event.target.tit)} value={tit} className='column__title-name' />


      </div>
      <div className='column__items'>
        {card}


      </div>
      <div className='case__creator'>
        {creator
          ? <CardCreator creator={creator} setCreator={setCreator} />
          : <button onClick={() => setCreator(true)} className='case__creator-name'>Добавить задачу +</button>
        }
      </div>
    </div>

  );
}

export default Column;