import { createContext, useState } from "react";
import Card from "./Card";
import Toggle from "./Toggle";


export const togglePricing = createContext();

const ToggleContext = () => {
    const [pricing, setPricing] = useState(false);

    return (
        <>
            <togglePricing.Provider value={{pricing, setPricing}}>
                <Toggle />
                <Card />
            </togglePricing.Provider>
        </>
         )
}
 
export default ToggleContext;