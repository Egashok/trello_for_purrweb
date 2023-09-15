const CardCreator = ({creator,setCreator}) => {
    return (
        <div className="Creator">
            
            <textarea type="text" className="creator__desc"/>
            <div className="creator__btns">

            <button onClick={()=>setCreator(false)} className="creator__btn">Отменить</button>
            <button className="creator__btn">Создать карточку</button>
            </div>

        </div>
        
        
        );
}
 
export default CardCreator;