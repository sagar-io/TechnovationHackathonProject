import React from 'react'
import {useNavigate} from 'react-router-dom'

const ClientSignup = () => {
  return (
    <div>Client Signup</div> 
  )
}

export const ClientSignupLink = () => {
    const navigateTo = useNavigate()
    function handleSignupRouting() {
        navigateTo('/client-signup')
    }
    return (
        <div className='signup-link-container'>
            <h2 className='m-heading'>Welcome Sir!</h2>
            <p>Want a perfect freelancer for your help, find talent now.</p>
            <button className='btn-y' onClick={handleSignupRouting}>Sign up</button>
        </div>
    )
}


export default ClientSignup