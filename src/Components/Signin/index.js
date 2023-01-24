import React, {useState} from 'react'
import {SignupLink} from '../Signup'
// import ForgetPasswordLink from './'

const SigninPage = () => (
    <div className='sign-in-page-container'>
        <div className='sign-in-page-left'>
         <SigninForm />
          {/* <ForgetPasswordLink /> */}
        </div>
        <div className='sign-in-page-right'>   
          <SignupLink />
        </div>
    </div>
)

const SigninForm = () => {
    const [userDetail, setUserDetail] = useState({
        email: '',
        password: '',
        error: null
    })

const {email, password, error} = userDetail

function handleDetailsChange(e) {
    setUserDetail(prevDetail => ({...prevDetail, [e.target.name]: e.target.value}))
}
function handleSignin(e) {
    e.preventDefault()
    console.log("Logging in...")
}

const invalidSignIn = email === '' || password === ''

  return (
    <div className='signin-form-container'>
          <h2 className='m-heading'>Sign In</h2>
            <form className='sign-in-form'>
                <input 
                  type="email"
                  name="email"
                  placeholder='Email Address'
                  onChange={handleDetailsChange}
                  value={email} />

                <input type="password"
                  name="password"
                  placeholder='Password'
                  onChange={handleDetailsChange}
                  value={password} />

                  <button disabled={invalidSignIn} onClick={handleSignin}>Sign In</button>
                  {error && <p>{error.message}</p>}
            </form>
        </div>
    )
}

export default SigninPage