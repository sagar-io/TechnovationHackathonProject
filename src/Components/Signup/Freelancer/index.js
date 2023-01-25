import React from 'react'
import {useNavigate} from 'react-router-dom'
import FreelancerSignupFormBase from './FreelancerSignupFormBase'

const FreelancerSignup = () => {
  return (
    <div>
     <FreelancerSignupFormBase />
    </div> 
  )
}

export const FreelancerSignupLink = () => {
    const navigateTo = useNavigate()
    function handleSignupRouting() {
        navigateTo('/freelancer-signup')
    }
    return (
        <div className='signup-link-container'>
            <h2 className='m-heading'>Welcome Friend!</h2>
            <p>Want a perfect job, start joueney with us.</p>
            <button className='btn-y' onClick={handleSignupRouting}>Sign up</button>
        </div>
    )
}

export default FreelancerSignup