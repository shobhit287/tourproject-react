import './Cards.css';
import { useState } from 'react';
function Cards(props){
   const [readmore,setmore]=useState(false);
   function readmoreHandler(){
      setmore(!readmore);
   }

   return(
    <div className='cards'>
     {props.details.map((item) => (
    <div className='card_info'>
    <img src={item.img_url} alt="img"></img> 
    <h5>{item.price}</h5>
    <h4>{item.city}</h4>
    <p>
      {item.details}
      <span onClick={readmoreHandler}>{readmore ? `Show less`:'Read More....'}</span>
    </p>
    <button onClick={()=>props.removeTour(item.id)}>Not Interested</button>
    </div>
     ))}
    </div>
   );

}
export default Cards;