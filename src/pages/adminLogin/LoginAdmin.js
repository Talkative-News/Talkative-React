import React from 'react'
import './LoginAdmin.css'
import NavBar from '../../components/navBar/NavBar'
import Footer from '../../components/footer/Footer'
function LoginAdmin(){
    return (
        <div className='container'>
            <NavBar/>
            <div className='login-box'>
                <div className='login-form'>
                    <div className='login-title'>
                        <label htmlFor="login-h1">
                            Sign In
                        </label>
                    </div>
                    <form>
                        <div className='usernameInput'>
    
                                <input type="text" name="username" id="username" placeholder='Email' />
                            
                        </div>
                        <div className='passwordInput'>
                                <input type="password" name="password" id="password" placeholder='Password'/>
                            
                        </div>
                        <div className='login-btn'>
                            <button type="submit">Sign In</button>
                        </div>
                    </form>
                </div>
            </div>
           
        </div>
        
      )
}


export default LoginAdmin