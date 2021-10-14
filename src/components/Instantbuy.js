import React from 'react'
import '../styles/Instantbuy.css'
const Instantbuy = () => {
    return (
        <div className="Instantbuy">
         

            <form to="" className="body1" method="POST">            
             
             
             {/* <label className="switch">
                 <input type="checkbox">
                 <span className="slider round"></span>
             </label> */}
             <div>
                   <h2 className="buy_sell">Buy/Sell Instantly</h2>
              </div>
              {/* <button>Buy<button>Sell</button></button> */}
              <div className="btnflex">
                  <span className="btn btn-1">
                     <input type="checkbox" name="" id="switch"></input>
                     <label for="switch"></label>
                 </span>
             </div>
             <div>
                 <h2>Coin to buy</h2>
                 <select className="input1">
                     <option>Bitcoin (BTC)</option>
                     <option>A</option>
                     <option>F</option>
                     <option>O</option>
                 </select>
             </div>
             <div>
                 <h2> Currency</h2>
                 <select className="input1">
                     <option>Naira (NGN)</option>
                     <option>A</option>
                     <option>F</option>
                     <option>O</option>
                 </select>   
             </div>
               
             <h2>Quantity</h2>
             <button className="last_button">USD</button><input name="" className="last_input" label="10000"/>   


            </form>
        </div>
    )
}

export default Instantbuy
