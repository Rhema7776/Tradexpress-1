import React from 'react'
import {Link} from 'react-router-dom';
import TradExpress from '../images/TradExpress- lconlogo.png'
import '../styles/navbar.css'

const Navbar = () => {
    return (
        <div className="landingpage">
         <div className="logo">
             <img src={TradExpress} alt=""></img>
          </div>
          <div className="buys">
              <Link to='/Navbuy_sell' ><p className="buys1" >Instant Buy/sell</p></Link>
              <Link to='/Dashboard'><p className="buys1">Learn</p></Link>
              <Link to='/Login'><button className="button1">Log In</button></Link>
              <Link to='/GetStarted'><button className="button2">Get Started</button></Link>
           </div>
           {/* <div className='navmobile'>
               <AiOutlineMenu/>   (Ai- icons)  (Menu- type of react icon---)
           </div>
            then in the query(smaller screen), use block
            in the query(smaller screen), use none */}
           
            
        </div>
    )
}

export default Navbar