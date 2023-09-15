const CardPopup = ({cardpop,setCardpop}) => {

    
    return (
    
        <div  className="cardpopup" onClick={()=>setCardpop(false)}>

        <div className="card__content" onClick={( e)=>e.stopPropagation()} >

        <div className="cardpopup__top">
                <h3 className="cardpopup__title">Помыть посуду</h3>
                <textarea  placeholder="Описание задачи" className="cardpopup__txt"></textarea>
            
            </div>

            <div className="cardpopup__bottom">
                <h4 className="comment__title">Коментарии</h4>
                <div className="comments__list">
                    <div className="cooment__item">
                        <h5 className="comment__author">Игорь</h5>
                        <p className="comment__body">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi totam repellat voluptatibus cupiditate quasi officiis quos minima dolores officia? Tempore perferendis labore beatae libero ullam assumenda inventore officia consequatur incidunt?</p>
                    </div>
                </div>
            </div>
        </div>


        </div>

        
            
    
        );
}
 
export default CardPopup;