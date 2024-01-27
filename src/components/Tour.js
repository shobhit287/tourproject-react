//import {useState} from 'react';
import'./Tour.css';
import './Cards';
import Cards from './Cards';
function Tour(props){
    return(
        <div className="body">
        <div className='plan_tour'><h2>Plan With Love</h2></div>
        <Cards details={props.details} removeTour={props.removeTour}></Cards>
        </div>
    );
}
export default Tour;