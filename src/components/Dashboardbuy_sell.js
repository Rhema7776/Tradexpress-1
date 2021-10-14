import React, {useState} from 'react'
import '../styles/Dashboardbuy_sell.css'
import bitcoin from '../images/bitcoin.png'
import usdt from '../images/layer1.png'
import etherium from '../images/etherium.png'
import ltc from '../images/litecoin.png'
const Dashboeardbuy_sell = () => {
    const [state, setState] = useState('Buy')
    
    const switchbuttonToBuy = () => {
        setState('Buy')
        console.log(state)
    }
    const switchbuttonToSell = () =>{

        setState('Sell')
        console.log(state)
    }
    if (state === 'Buy'){
        return (
            <div className= "mother_crypto">
                <div className="getbuttondiv">
                    <button className="getbutton" onClick={switchbuttonToBuy}>Buy</button>
                    <span className="getbutton3"><button className="getbutton2" onClick={switchbuttonToSell}>Sell</button></span>             
                </div>
                <h3>Select Coin</h3>
                <div >
                    <div className="flex_bitcoin">
                    <div className="bitcoin">
                      <div>
                         <div><b>Bitcoin</b></div>
                         <div>1.625BTC</div>
                     </div>
                          <div><img className="litecoin" src={bitcoin} alt="" />
                      </div>
                    </div>
                    <div className="usdt">
                      <div>
                         <div><b>USDT</b></div>
                         <div>$2,257.57</div>
                     </div>
                          <div><img className="litecoin" src={usdt} alt="" />
                      </div>
                    </div>
                    <div className="etherium">
                      <div className='font'>
                         <div><b>Ethereum</b></div>
                         <div>$10,257.57</div>
                     </div>
                          <div><img className="litecoin" src={etherium} alt="" />
                      </div>
                    </div>
                    <div className="ltc">
                      <div>
                         <div><b>LTC</b></div>
                         <div>1.625BTC</div>
                     </div>
                          <div><img className="litecoin" src={ltc} alt="" />
                      </div>
                    </div>










                    </div>
                    
                    
                </div>
            </div>
            
        )
    }else if (state === 'Sell'){
        return (
            <div className= "mother_crypto">
                <div className="getbuttondiv">
                    <button className="getbutton" onClick={switchbuttonToBuy}>Buy</button>
                    <span className="getbutton3"><button className="getbutton2" onClick={switchbuttonToSell}>Sell</button></span>             
                </div>
                <h3>Select Coin</h3>
                <div>
                    <div className="bitcoin">
                      <div>
                         <div><b>Bitcoin</b></div>
                         <div>1.625BTC</div>
                     </div>
                          <div><img className="litecoin" src={bitcoin} alt="" />
                      </div>
                    </div>
                    <div className="usdt">
                      <div>
                         <div><b>USDT</b></div>
                         <div>$2,257.57</div>
                     </div>
                          <div><img className="litecoin" src={usdt} alt="" />
                      </div>
                    </div>
                    <div className="etherium">
                      <div>
                         <div><b>Ethereum</b></div>
                         <div>$10,257.57</div>
                     </div>
                          <div><img className="litecoin" src={etherium} alt="" />
                      </div>
                    </div>
                    <div className="ltc">
                      <div>
                         <div><b>LTC</b></div>
                         <div>1.625BTC</div>
                     </div>
                          <div><img className="litecoin" src={ltc} alt="" />
                      </div>
                    </div>
                    
                </div>
            </div>
            
        )



    }    
}

export default Dashboeardbuy_sell
