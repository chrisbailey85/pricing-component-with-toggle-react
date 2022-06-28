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
      {/* <main className="main">
          <h1>Our Pricing</h1>
          <Toggle />
          <div className="cards">
          {data.map(data => {
            return <Card 
            key={data.id}
            title={data.title}
            priceMonthly={data.priceMonthly}
            priceAnnually={data.priceAnnually}
            storage={data.storage}
            users={data.users}
            amount={data.amount}
          />
          })}
          </div>
      </main>
      <Footer /> */}
    </>
  );
}

export default App;
