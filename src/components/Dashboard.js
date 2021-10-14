import React, {useState} from 'react'
import '../styles/Dashboard.css'
import menu from '../images/Menu icon.png'
import bell from '../images/Grey bell.png'
import TradExpress from '../images/TradExpress- lconlogo.png'
import dashboard from '../images/Dashboard.png'
import Wallet from '../images/wallet.png'
import ExchangeRate from '../images/Exchange Rate.png'
import Learn from '../images/Learn.png'
import Blog from '../images/Blog.png'
import Profile from '../images/Profile.png'
import Settings from '../images/Settings.png'
import Logout from '../images/Logout.png'
import income from '../images/income.png'
import bankbuilding from '../images/bankbuilding.png'
import Bitcoin from './Bitcoin'
import bitcoin from '../images/bitcoin.png'
import usdt from '../images/layer1.png'
import etherium from '../images/etherium.png'
import litecoin from '../images/litecoin.png'
import tick from '../images/tick.png'
import question from '../images/tick.jpg'
import Dashboardbuy_sell from './Dashboardbuy_sell'

const Dashboard = () => {
    return (
        <div className="Dashboard">
            <nav>
             <div className="flexnav"> 
                  <div>
                     <img  className="h2" src={TradExpress} alt="" />
                     <img  className="menu" src={menu} alt="" />
                  </div>

                  <div><img  className="bell" src={bell} alt="" /></div>
             </div>
                
                
            </nav>
            <div className="mother3">
            <div className="mother3a">
               <div><img className="dash" src={dashboard} alt="" />Dashboard</div>
               <div><img className="wallet" src={Wallet} alt="" />Wallet</div>
               <div><img className="ExchangeRate" src={ExchangeRate} alt="" />Exchange Rate</div>
               <div><img className="Learn" src={Learn} alt="" />Learn</div>
               <div><img className="Blog" src={Blog} alt="" />Blog</div>
               <div><img className="Profile" src={Profile} alt="" />Profile</div>
               <div><img className="Settings" src={Settings} alt="" />Settings</div>
               <div><img className="Logout" src={Logout} alt="" />Logout</div>

               <button className="contact">Contact Support</button>
            </div>
            <div className="mother">
                 <div className="mother1">
                     <div>
                         <div>Wallet Balance</div>
                         <div><p className="num1"> 121,546.32 NGN</p></div>
                     </div>
                      <div className="mother1a">
                          <div className="mother1b">
                             <div><img className="img1" src={income} alt="" /></div>
                             <div className="NGN">NGN Deposit</div>
                          </div>
                           
                          <div className="mother1b">
                             <div><img className="img1" src={bankbuilding} alt="" /></div>
                             <div className="NGN">NGN Withdrawal</div>
                          </div>                          
                      </div>                     
                  </div>
                 <div className="mother1c">
                       <div><b>Create Wallet Balance</b></div>
                       <div className="BTC">
                            <div className="btc">
                                <div>
                                   <div><b>Bitcoin</b></div>
                                   <div>1.625BTC</div>
                                </div>
                                <div><img className="litecoin" src={bitcoin} alt="" /></div>

                            </div>
                            <div className="usdt2">
                                <div >
                                    <div><b>USDT</b></div>
                                    <div>$2,257.57</div>
                                </div>
                                <div><img className="usdt1" src={usdt} alt="" /></div>
                            </div>
                            <div className="eth">
                                <div>
                                   <div><b>Etherium</b></div>
                                   <div>$10,257.57</div>
                                </div>
                                <div><img className="litecoin1" src={etherium} alt="" /></div>

                            </div>
                            <div className="lit">
                                <div>
                                   <div><b>Etherium</b></div>
                                   <div>$10,257.57</div>
                                </div>
                                <div><img className="litecoin" src={litecoin} alt="" /></div>

                            </div>
                       </div>
                        
                 </div>
                  <Bitcoin className="side"/>
                  <div className="mother4">
                       <div className="mother4a">
                            <h3>Complete your Profile 2/4</h3>
                            <div className="last_flex1">
                             {/* <button className="tick">&#10003;</button>   */}
                             <img src={tick} className="tick1" alt="" />
                             <div>
                                 <p className="confirm">Confirm your Email</p>
                                 <p className="confirm">Add your email to secure your account</p>
                             </div>
                            </div>
                            <div className="last_flex1">
                             {/* <button></button> */}
                             <img src={tick} className="tick1" alt="" />
                             <div>
                                 <p className="confirm">Add your phone number</p>
                                 <p className="confirm">Add your phone number for 2FA</p>
                             </div>
                            </div>
                            <div className="last_flex1">
                             {/* <button></button> */}
                             <img src={question} className="tick1a" alt="" />
                             <div>
                                 <p className="confirm">Add BVN</p>
                                 <p className="confirm">Link BVN to your account</p>
                             </div>
                            </div>
                            <div className="last_flex1">
                             {/* <button></button> */}
                             <img src={question} className="tick1a" alt="" />
                             <div>
                                 <p className="confirm">Add Bank Account</p>
                                 <p className="confirm">Add a primary account for payment</p>
                             </div>
                            </div>

                       </div>
                       
                        <Dashboardbuy_sell />
                       {/* <div className="mother4a">
                            
                            <div></div> 
                            <div></div>


                       </div> */}
                 </div>
                 <div className="mother4b">
                        
                       <div className="portfolio">
                         <h3>Portfolios</h3>
                        
                         <ul>
                             <li className="li_design"><p id="li1">10 Pending Transactions</p></li>
                             <li className="li_design1"><p id="li1">285 Completed Transactions</p></li>
                             <li className="li_design"><p id="li1">5 Declined Transactions</p></li>
                          </ul>
                          {/* <img className="circle" src={circle} alt="" >300 Transactions</img> */}
                                
                        </div>
                        <div className="Recent">

                            <p>No Transactions yet</p>
                        </div>


                        













                 </div>






            </div>










            </div>
            
            
            
        </div>
    )
}

export default Dashboard
