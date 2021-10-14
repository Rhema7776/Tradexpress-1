import React from 'react'
import '../styles/Instantsell.css'
const Instantsell = () => {
    return (
        <div className="Instantsell">
         

          <form to="" className="body1" method="POST">
               <div>
                   <h2 className="buy_sell">Buy/Sell Instantly</h2>
              </div>
              <div className="btnflex">
                  <span className="btn btn-1">
                     <input type="checkbox" name="" id="switch"></input>
                     <label for="switch"></label>
                 </span>
             </div>
             <h2>Coin to sell</h2>
             <select className="input1">
                 <option>Bitcoin (BTC)</option>
                 <option>A</option>
                 <option>F</option>
                 <option>O</option>
             </select>
              <h2> Currency</h2>
              <select className="input1">
                 <option>Naira (NGN)</option>
                 <option>A</option>
                 <option>F</option>
                 <option>O</option>
             </select>    

               <h2>Quantity</h2>
             <button className="last_button">USD</button><input name="" className="last_input" label="10000"/>             
         </form>
        </div>
    )
}

export default Instantsell
