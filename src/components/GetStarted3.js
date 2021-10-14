import React from 'react'
import '../styles/GetStarted3.css'
import {Link} from 'react-router-dom';
const GetStarted3 = () => {
    return (
        <div>
            <form to="" className="body1" method="POST">            
             
             
             {/* <label className="switch">
                 <input type="checkbox">
                 <span className="slider round"></span>
             </label> */}
             <div>
                   <h2 className="buy_sell">Buy/Sell Instantly</h2>
              </div>
              <button >Business<button>Individual</button></button>
              
              <input className="input3" type="text" name="uPassword" placeholder="Username"/>
              <input className="input3" type="text" name="uPassword" placeholder="Business Name"/>
              <input className="input3" type="text" name="uPassword" placeholder="Email"/>
              <input className="input3" type="text" name="uPassword" placeholder="Phone Number"/>
              <input className="input3" type="text" name="uPassword" placeholder="Referral Code (optional)"/>
             <h5>By clicking the Sign Up button below, you agree to TradExpress terms and service</h5>
             <button className="last_button">USD</button><input name="" className="last_input" label="10000"/>   
             <h6>Already have an account?<Link to='/Instantbuy' ><p className="click" >Click here</p></Link></h6>

            </form>
        </div>
    )
}

export default GetStarted3
