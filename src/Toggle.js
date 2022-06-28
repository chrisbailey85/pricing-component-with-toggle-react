import { useContext } from "react";
import { togglePricing } from './App'
const Toggle = () => {
    const  {pricing, setPricing}  = useContext(togglePricing)
    function changePricing() {
        setPricing(!pricing)
        console.log(pricing)
    }
    return ( 
        <div className="toggle">
            <p>Annually</p>
            <button className="toggle__btn" type="button" aria-pressed={pricing} onClick={changePricing}><span className="sr-only">Toggle pricing</span></button>
            <p>Monthly</p>
        </div>
     );
}
 
export default Toggle;
