import './styles/css/main.css'
import {Routes, Route} from 'react-router-dom'
import Landing from './Components/Landing'
import Signin from './Components/Signin'

const App = () => {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Landing />}/>
        <Route path='/signin' element={<Signin />} />
      </Routes>
    </div>
  )
}

export default App