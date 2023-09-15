import { useState } from "react";
import Column from "./Column";
import CardCreator from "../UI/CardCreator";
import Card from "./Card";
import CardPopup from "../UI/CardPopup";

const Board = () => {

    const [cardpop,setCardpop]=useState(false)



    return ( 
        
        
        <div className='board'>
          
            {cardpop && <CardPopup/>}

            <h1 className="main__title">Trello for Purrweb</h1>
            <div className="columns">

            <Column card={<Card cardpop={cardpop} setCardpop={setCardpop}/>} title={"TODO"}/>
            <Column title={"In Progress"}/>
            <Column title={"Testing"}/>
            <Column title={"Done"}/>
            </div>

      </div>
       );
}
 
export default Board;