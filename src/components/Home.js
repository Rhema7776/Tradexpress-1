import React from 'react'
import '../styles/Home.css'
import AppStore from '../images/App store - main.png'
import Googleplay from '../images/google play- small.png'
import Replaced from '../images/Group 52.png'
import Replaced2 from '../images/Group 28.png'
import AppStore1 from '../images/Appleblack1.png'
import Googleplay1 from '../images/google play icon download.png'
import messagepurple from '../images/message purple.png'
import quote from '../images/quotation-white.png'
import combinedicons from '../images/combined icons.png'
import {Link} from 'react-router-dom';
import Bitcoin from './Bitcoin';
const Home = (props) => {
   console.log(props)
    return (
      //  <Fetcher my_data={props.my_data}/>
       <div className="home1">
          <div className="home">
              <div>
                  <h2 id="buy">Buy, sell and manage your Crypto on TradExpress.</h2>
              </div>
             <div id="buy2">
                 <p>Easily Trade Cryptocurrencies like BTC,USDT,ETH,LTC & XRP with NGN.</p>
              </div>
         
              <div>
                <Link to='/GetStarted3'><button className="Home_button">GetStarted</button></Link>
              </div>
              <div className="Appbuttons">
                 <img className="AppStore" src={AppStore} alt=""></img>
                 <img className="Googleplay" src={Googleplay} alt=""></img>
              </div>
          </div>
           <Bitcoin />
          <div className="section2">
               <div>
                   <h1>Why do people get involved with Cryptocurrencies?</h1>
              </div>

              <div className="div_flex">
                <div className="div_flex1">
                    <img className="div_flex2a" src={Replaced} alt="" ></img>
                   <h2>Easy Mode of Payment</h2>
                   <p>People can now easily send and receive money from anywhere in the world to purchase goods and pay for services.</p>
                </div>
                <div className="div_flex2">
                   <img className="div_flex2a" src={Replaced} alt="" ></img>
                   <h2>Financial Freedom</h2>
                   <p>Just like the internet no single entity controls the Crypto network which provides users transparency and privacy, which puts you in absolute control of your money.</p>
                </div>
              <div className="div_flex3">
                  <img className="div_flex3a" src={Replaced} alt="" ></img>
                  <h2>Investment</h2>
                  <p>The constant demand as made Cryptocurrecies a Digital Gold used for alternative store of wealth on long term investments.</p>
                </div>
             </div>

             <button className="Learnmore">Learn more</button>
           
             <h1>Buy and Sell your Cryptocurrecy in 3 simple steps</h1>
            </div>
          <div className="a_flex">
             <div className="a_flex1">
                 <div className="a_flex2">
                      <div className="fire">
                         <button className="div_flex1a">1</button>
                         <h2>Create a free Account</h2>
                         <p>Signup for your free TradExpress on web, iOS and Android devices or follow our easy process to set up your profile</p>                     
                      </div>
                         
                     <img className="img_2" src={Replaced} alt="" ></img>
                 </div>
                 
                </div> 
              
                <div className="a_flex1">
                  
                   <div className="a_flex2">
                     <img className="img_2" src={Replaced2} alt="" ></img>
                      
                      <div className="fire">
                         <button className="div_flex1a">2</button>
                         <h2>Deposit</h2>
                         <p>Choose your preferred deposit option like bank transfer, credit/debit card or send digital asset directly to your wallet for easy funding/withdrawal.</p>   
                     </div>
                 </div>
               </div>  
               <div className="a_flex1">
                  <div className="a_flex2">
                       <div className="fire">
                          <button className="div_flex1a">3</button>
                          <h2>Buy/ Sell Crypto</h2>
                           <p>Buy BTC, USDT, ETH, LTC, XRP, DOGE and securely store it in your wallet or send it easily to friends and family.</p>
                      </div>
                      
                 
                      <img className="img_2" src={Replaced} alt="" ></img>
                  </div>
              </div>  
          </div>
          
           <div className="ready">
               <p>Ready to trade Buy/Sell cryptocurrencies in just 10 minutes?</p>
               <h1>Create your account for free and start trading today!</h1>
               
               <div>
                 <button className="Home_button">GetStarted</button>
              </div>
              <div className="Appbuttons">
                  <button className="AppStore_a"><img className="AppStore1" src={AppStore1} alt=""></img><div className="Appbutton">Download on the<br></br><b>AppStore</b></div></button>
                  <button className="AppStore_b"><img className="Googleplay1" src={Googleplay1} alt=""></img><div className="Appbutton">Get on <br></br><b>Googleplay</b></div></button>                
              </div>
           </div>
           <div className="customer">
             <h1>Customer's Review</h1>
             
              <div className="purpleflex">
                <div className="messagepurple">
                   <div>  
                      <img className="quote1" src={quote} alt="" /><p>Trading on TradExpress mobile & web platforms has been a smooth experience for me quite easy to navigate.</p>
                   </div>
                   <div>

                   </div>
                </div>

                <div>
                   <div className="messagepurple">
                      <img className="quote" src={quote} alt="" /><p>They have the best rate compared to other platforms with fast payout.</p>
                   </div>
                   <div>


                   </div>
                </div>

                <div>
                   <div className="messagepurple">
                      <img className="quote" src={quote} alt="" /><p>Easy to fund and withdraw coins or cash on their platform, I will definitely trade with them again.</p>
                   </div>
                   <div>


                   </div>


                  </div>
             </div>
           </div>

            <div className="futa1">

              <div>
                  <h3>Products</h3>
                  <p>Bitcoin</p>
                  <p>Alt</p>
                  <p>Fiat </p>
                  <p>Refill</p>
                  <p>P2P</p>    
              </div>
               <div>
                  <h3>Learn</h3>
                  <p>Blog</p>
                  <p>Help Center</p>
               
               </div>

               <div>
                  <h3>Contact</h3>
                  <p>hello@tradeexpress.com</p>
                  <p>support@tradeexpress.com</p>
                  <img className="social_icons" src={combinedicons} alt />
               </div>
               <div>
                 <h3>Company</h3>
                  <p>About Us</p>
                  <p>Careers</p>
                  <p>Rates</p>
                  <p>Mobile</p>
               </div>
               <div>
                  <h3>Legal</h3>
                  <p>Privacy Policy</p>
                  <p>Anti-Money Laundering</p>
                  <p>Terms and Conditions</p>
               </div>



            </div>
          
           





           
             
            
          
         
         </div>
        
    )
}

export default Home
