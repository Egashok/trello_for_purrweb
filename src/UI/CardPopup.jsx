const CardPopup = ({cardpop,setCardpop}) => {
    return (
    
        <div className="cardpopup">

        <div className="card__content">

        <div className="cardpopup__top">
                <h3 className="cardpopup__title">Задачка ало</h3>
                <textarea className="cardpopup__txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam voluptatem sunt, accusantium harum non eius neque quod perspiciatis vitae debitis esse voluptatibus unde laborum libero quidem perferendis natus necessitatibus iure?</textarea>
            
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