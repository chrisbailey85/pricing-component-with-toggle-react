import { useContext } from "react";
import { togglePricing } from './App'
const Card = (props) => {
    const {pricing}  = useContext(togglePricing)
    return ( 
        <div className="card">
            <h2 className="card__title">{props.data.title}</h2>
            <p className="price"><span>$</span>{pricing ? props.data.priceMonthly : props.data.priceAnnually}</p>
            <ul className="list">
                <li className="list__item">
                    {props.data.storage} GB Storage
                </li>
                <li className="list__item">
                    {props.data.users} Users Allowed
                </li>
                <li className="list__item">
                    Send up to {props.data.amount}
                </li>
            </ul>
            <a href="#" className="card__link">Learn more</a>
        </div> 
    );
}
 
export default Card;