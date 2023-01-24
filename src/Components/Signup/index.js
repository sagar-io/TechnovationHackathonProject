import React from 'react'
import {useNavigate} from 'react-router-dom'

const Signup = () => {
  return (
    <div>Signup</div> 
  )
}

export const SignupLink = () => {
    const navigateTo = useNavigate()
    function handleSignupRouting() {
        navigateTo('./signup')
    }
    return (
        <div className='signup-link-container'>
            <h2 className='m-heading'>Welcome Friend!</h2>
            <p>Enter your details and start journey with us</p>
            <button onClick={handleSignupRouting}>Sign up</button>
        </div>
    )
}


export default Signup