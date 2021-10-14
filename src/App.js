import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Verifymail from './components/Verifymail'
import GetStarted2 from './components/GetStarted2'
import Instantbuy from './components/Instantbuy'
import Instantsell from './components/Instantsell'
import Login from './components/Login'
import GetStarted from './components/GetStarted'
import GetStarted3 from './components/GetStarted3'
import Dashboard from './components/Dashboard'
import Bitcoin from './components/Bitcoin'
import Navbuy_sell from './components/Navbuy_sell'

// import './index.css'

function App() {
// implementing a state variable
//  const [data,setdata]= useState([])
  
//  // create a function
//  const getData = async () =>{
//     let response = await fetch('https://api.nomics.com/v1/currencies/ticker?key=dadc0ceba5cb8be96bf7d0938fe9fc01e963653d&ids=BTC,ETH,XRP&interval=1d,30d&convert=EUR&per-page=100&page=1')
//     let my_data = await response.json()
//      console.log(my_data);
//      setdata(my_data)

  
  
//   }
  


//   useEffect(()=>{
//   getData()

//   },[]
//   )




// const App = () => {
  return (
    <Router>
    <div>
      <Navbar/>
      <Switch>
      <Router exact path="/">
       <Home /> 
       {/* my_data={data} */}
       
      </Router> 
      <Router exact path="/Navbuy_sell">
       <Navbuy_sell /> 

      </Router>
      
      <Router exact path="/Verifymail">
        <Verifymail />
      </Router>
      <Router exact path="/GetStarted2">
       <GetStarted2 /> 

      </Router>
      <Router exact path="/GetStarted3">
       <GetStarted3 /> 

      </Router>
      <Router exact path="/Login">
       <Login />

      </Router>
      <Router exact path="/Dashboard">
       <Dashboard />

      </Router>
      

      </Switch>
      
    </div>
    </Router>
  )
}

export default App
