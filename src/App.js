import './styles/css/main.css'
import {Routes, Route} from 'react-router-dom'
import Landing from './Components/Landing'
import {FreelancerSignin, ClientSignin} from './Components/Signin'
import FreelancerSignup from './Components/Signup/Freelancer'
import ClientSignup from './Components/Signup/Client'

const App = () => {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Landing />}/>
        <Route path='/freelancer-signin' element={<FreelancerSignin />} />
        <Route path='/client-signin' element={<ClientSignin />} />
        <Route path='/freelancer-signup' element={<FreelancerSignup/>} />
        <Route path='/client-signup' element={<ClientSignup/>} />
      </Routes>
    </div>
  )
}

export default App