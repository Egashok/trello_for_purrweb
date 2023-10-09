import { useState,useEffect,useReducer } from "react";
import CardCreator from "../UI/CardCreator";
import Card from "./Card";

const Column = ({ title, cards ,setCards,pop,setPop}) => {

  const [creator, setCreator] = useState(false)

  const [tit, setTit] = useState(title)

  const [_, forceUpdate] = useReducer(x => x + 1, 0);


  useEffect(()=>{
    forceUpdate()
    cards.title=tit

  },[pop,cards,tit])

  function showCards(cards){
  
    if(cards){
      return cards.map((card,index)=>
      <Card setPop={setPop} pop={pop} cards={cards} setCards={setCards} card={card}></Card>
      )}
      else{
      return }
  }
  return (
    <div className='board__column'>
      <div className='column__title'>
        <input onChange={(event) => setTit(event.target.value)} value={tit} className='column__title-name' />


      </div>
      <div className='column__items'>
        {showCards(cards)}

      </div>
      <div className='case__creator'>
        {creator
          ? <CardCreator cards={cards} setCards={setCards} creator={creator} setCreator={setCreator} />
          : <button onClick={() => setCreator(true)} className='case__creator-name'>Добавить задачу +</button>
        }
      </div>
    </div>

  );
}

export default Column;