import React from 'react'
import TradExpress from '../images/TradExpress- lconlogo.png'
import '../styles/Verifyemail.css'
import mailing from '../images/mailing'
// import Nav from './Navbar'
const Verifymail = () => {
    return (
        <div className="Getstarted">
            <div className="Getstarted1">

                <p className="p1">You're Almost In!</p>
              <h1>Welcome Iretiayo</h1>
              <img src={mailing} alt="" />
              <p>An activation link has been sent to Ireti4tech@gmail.com Please click on the link to verify your email and activate your TradExpress account.</p>
              <button className="button_continue">Continue</button>


            </div>
            
        </div>
    )
}

export default Verifymail
