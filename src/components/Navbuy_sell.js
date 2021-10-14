import React, {useState} from 'react'
import Instantbuy from './Instantbuy'
import Instantsell from './Instantsell'
const Navbuy_sell = () => {
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
            <div>
                <div className="getbuttondiv">
                    <button className="getbutton" onClick={switchbuttonToBuy}>Buy</button>
                    <span className="getbutton3"><button className="getbutton2" onClick={switchbuttonToSell}>Sell</button></span>             
                </div>
                <Instantbuy />
            </div>
            
        )
          


    }else if (state === 'Sell'){
        return (
            <div>
                <div className="getbuttondiv">
                    <button className="getbutton" onClick={switchbuttonToBuy}>Buy</button>
                    <span className="getbutton3"><button className="getbutton2" onClick={switchbuttonToSell}>Sell</button></span>             
                </div>
                <Instantsell />
            </div>
            
        )



    }
     
}

export default Navbuy_sell
