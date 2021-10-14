import React from 'react'
import '../styles/login.css'
const Login = () => {
    return (
        <div className="Login">
         
         <form  className="form" method="POST" >
              <h1>Welcome Back!</h1>
              <div className="input">
                 <input className="input1" type="text" name="username" placeholder="username"/>
                 <input className="input2" type="text" name="uPassword" placeholder="Password"/>
              </div>
              
               <div className="forgot">
                   <div><input type="radio" name="Remember" id="rem" value="password"/> Remember password</div>
                   
                    <div><a href="" className="forgot2">Forgot password?</a></div>
                 
                </div>
                <button className="loginbutton">Login</button>

                <div className="forgot3">
                   <div> New user?</div>
                   {/* <br></br> <br></br> */}
                    <div><a href="" className="forgot2">Click here</a></div>
                 
                </div>
                
              
             
         </form>
        </div>
        
    )
}

export default Login
