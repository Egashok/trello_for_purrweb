import { useState,useEffect } from "react";
import Column from "./Column";
import CardCreator from "../UI/CardCreator";
import Card from "./Card";
import CardPopup from "../UI/CardPopup";



const Board = () => {
    

    localStorage.maxcomid=5;

    const [cards,setCards]=useState();

    const [sel,setSel]=useState({id:'',title:'',body:' ',author:''})
    
    const [pop,setPop]=useState(false)
     

    useEffect(()=>{
     
        cardSel()
        

    },[pop])





    const [cards1, setCards1] = useState([
        {author:'sa',title:'sasasaasasassa' ,id:13,body:'asdsaadsasdadasdsadasd',comments:[
        
        {comid:21,author:'1qwewqe',body:"asdsadadsdsa"}
        ]}
    ])
    const [cards2, setCards2] = useState([
   
    ])
    const [cards3, setCards3] = useState([
    ])
    const [cards4, setCards4] = useState([
    ])




     const cardSel=()=>{

        cards1.forEach(element => {
           if(element.id==localStorage.cid){
            setSel(element)
            setCards(cards1)

            return
           }
        });
        cards2.forEach(element => {
            if(element.id==localStorage.cid){
             setSel(element)
             setCards(cards2)
             return
            }
         });
         cards3.forEach(element => {
            if(element.id==localStorage.cid){
             setSel(element)
             setCards(cards3)
             return
            }
         });
         cards4.forEach(element => {
            if(element.id==localStorage.cid){
             setSel(element)
            setCards(cards4)
             return
            }
         });
           
       
      
       }

    

    
    return (


        <div  className='board'>
                
            {pop && <CardPopup setPop={setPop} pop={pop} cards={cards} setCards={setCards} card={sel} setCard={setSel}/>}

            <h1 className="main__title">Trello</h1>
            <div className="columns">

                <Column setPop={setPop} pop={pop} cards={cards1} setCards={setCards1} title={"TODO"} />
                <Column setPop={setPop} pop={pop} cards={cards2} setCards={setCards2}title={"In Progress"} />
                <Column setPop={setPop} pop={pop} cards={cards3} setCards={setCards3}title={"Testing"} />
                <Column setPop={setPop} pop={pop} cards={cards4} setCards={setCards4}title={"Done"} />
            </div>

        </div>
    );
}

export default Board;