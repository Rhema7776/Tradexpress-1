import React from 'react'
import'../styles/Bitcoin.css'

const Bitcoin = () => {
    return (
        <div>
            <div className="Bitcoin">
             <div className="bitcoin1" >
                 <div>
                    <div><h3>BTC/NGN</h3></div>
                    <div><b>20,560.101.59NGN</b></div>                   
                 </div>
                <div className="bitcoin1a">-3.21%</div>
             </div>
             <div className="bitcoin1">
                <div >
                   <div><h3>USDT/NGN</h3></div>
                   <div><b>453.44NGN</b></div>
                </div>
                
                <div className="bitcoin1a">+10.20%</div>
             </div>
             <div className="bitcoin1">
                <div>
                   <div><h3>ETH/NGN</h3></div>
                   <div><b>818,490.32NGN</b></div>
                </div>
                
                <div className="bitcoin1a">+253%</div>
             </div>
             <div className="bitcoin1">
                 <div >
                   <div><h3>LTC/NGN</h3></div>
                   <div><b>81,002.32NGN</b></div>
                 </div>
                
                <div className="bitcoin1a">-254%</div>

             </div>
              <div className="bitcoin1">
                 <div>
                   <div><h3>XRP/NGN</h3></div>
                   <div><b>226.56NGN</b></div>
                 </div>
                 
                <div className="bitcoin1a">-254%</div>
              </div>



            </div>
        </div>
    )
}

export default Bitcoin
