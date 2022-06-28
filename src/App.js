import './index.css';
import Toggle from './Toggle';
import data from "./data";
import Card from './Card';
import Footer from './Footer';
import { createContext, useState } from 'react';
export const togglePricing = createContext();

function App() {
  const [pricing, setPricing] = useState(false)

  return (
    <>
        <main className="main">
            <h1 className='heading'>Our Pricing</h1>
            <togglePricing.Provider value={{pricing, setPricing}}>
              <Toggle />
              <div className="cards">
              {data.map(data => {
                return <Card 
                key={data.id}
                data={data}
              />
              })}
              </div>
             </togglePricing.Provider>
        </main>
        <Footer />
    </>
  );
}

export default App;
