import { useEffect, useState,useReducer } from "react";
import Comments from "../components/Comments";
import CommentCreator from "../components/CommentCreator";
import Textarea from "./Textarea";
import Card from "../components/Card";

const CardPopup = ({cards,setCards,card,setPop,setCard,pop}) => {

    const [_, forceUpdate] = useReducer(z => z + 1, 0);



    const [comCreator,setComCreator]=useState(false);
    const [body,setBody]=useState(card.body)
    const [title,setTitle]=useState(card.title)
    const [col,setCol]=useState(cards.title)
    useEffect(()=>{
     
       setTitle(card.title)
        setBody(card.body)
        
        setCol(cards.title)
        forceUpdate()
       
    },[card])   


   

    const closeModal=()=>{   
        card.title=title
        card.body=body
        setPop(false)
    }

    const create=(newCom)=>{
        card.comments=([...card.comments,newCom])
        setCard(card)
        forceUpdate()
    
      }
      const remove=(com)=>{
        card.comments=(card.comments).filter(c=>c.comid !== com.comid)
        
        setCard(card)
        forceUpdate()
    
    }
    


      useEffect(()=>{
        window.addEventListener('keydown',(event) => {
            const keyName = event.key;
            if (keyName === "Escape" && pop) {
                closeModal()
              }
        }
            )
    })

    return (
    
        <div 
             className="cardpopup" >
        <div className="">{col}</div>
        <div className="card__content" onClick={( e)=>e.stopPropagation()} >
        <button onClick={closeModal} className="popup_close">X</button>
        <div className="cardpopup__top">
            <p className="cardpop__title">Создатель:{card.author}</p>
            <Textarea setValue={setTitle} value={title} className={"cardpopup__title"}/>
            <Textarea setValue={setBody} value={body} className={"cardpopup__txt"}/>
            
            </div>

            <div className="cardpopup__bottom">
                <h4 className="comment__title">Коментарии</h4>
                <div className="comments__list">
                
                   {comCreator 
                    ? <CommentCreator creator={create} body={body} title={title} setComCreator={setComCreator} />
                    : <button className="" onClick={()=>setComCreator(true)}>Добавить комменарии</button>
                   }
                    <div className="cooment__items">
                        {
                        card.comments && (card.comments).map((com)=>
       
                        <Comments remove={remove} card={card} setCard={setCard} com={com}/>
                            )}
                    </div>
                </div>
            </div>
        </div>  


        </div>

        
            
    
        );
}
 
export default CardPopup;