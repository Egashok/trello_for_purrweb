const Card = ({cardpop,setCardpop}) => {
    return ( 
        <div onClick={()=>setCardpop(true)} className="card">
            
           <div className="card__top">

           <h3 className="card__title">Помыть посуду</h3>
           </div>
        <img className="card__trash" src="trash.svg"></img>
        
        </div>
        
        
        
        );
}
 
export default Card;