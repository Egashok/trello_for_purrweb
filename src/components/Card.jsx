import { useEffect, useState,useReducer } from "react";
import CardPopup from "../UI/CardPopup";

const Card = ({card,cards,setCards,pop,setPop}) => {


    
    function selectCard(){
        
        
        localStorage.setItem("cid",card.id)
        
        setPop(true);
        
    }
   function removeCard(){
    setCards(cards.filter(c=>c.id !== card.id))
}

    

    
    
    return ( 
        
<div className="card_wrapper">
   

        <div onClick={selectCard } className="card">
            
           <div className="card__top">

           <h3 className="card__title">{card.title}</h3>

           <p className="card__num">{Object.keys(card.comments).length} </p>
           </div>
        
        </div>
            <img onClick={removeCard} className="card__trash" src="trash.svg"></img>
       
       
        
</div>
        
        
        );
}
 
export default Card;