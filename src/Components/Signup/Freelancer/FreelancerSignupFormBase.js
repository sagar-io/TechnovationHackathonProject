import CSC from "./CSC"
import { useState } from 'react'
// import {formValidation} from './formValidation'

const FreelancerSignupFormBase = () => {
  const [isFirstPgDone, setIsFirstPgDone] = useState(false)
  const [frSignUpData, setFrSignUpData] = useState({
      name: '',
      email: '',
      password: '',
      phone: '',
      aadhar: '',
      img: '',
      age: '',
      bio: '',
      country: '',
      countryCode: '',
      state: '',
      stateCode: '',
      city: '',
      interests: [],
  })
  const {name, email, password, phone, aadhar, img, age, bio} = frSignUpData

  const isFirstPgInvalid = name == '' || email == "" || password == "" || password.length<8
  // const isSecondPgInvalid = aadhar.length != '12', 
  console.log(frSignUpData)
  return (
    <>
      <div className="toggle-signup">
        <div name='1' id="1" onClick={handleToggle} style={!isFirstPgDone?{background:'black',color:'white'}:{}}>1</div>
        <div name='2' id="2" onClick={handleToggle} style={isFirstPgDone?{background:'black',color:'white'}:{}}>2</div>
      </div>
      {(!isFirstPgDone) ?
        <div className="signup-form freelancer-signup-first-pg">
          <form>
            <label htmlFor="name">Name :</label>
            <input name="name" id="name" value={name} type='text' placeholder='enter your name' onChange={handleChange}/>

            <label htmlFor="email">Email :</label>
            <input name="email" id="email" value={email} type='email' placeholder='enter your email' onChange={handleChange}/>

            <label htmlFor="pass">Password :</label>
            <input name="password" id="pass" value={password} type='password' placeholder='enter a strong password' onChange={handleChange}/>

            <button disabled={isFirstPgInvalid} onClick={(e) => { e.preventDefault(); setIsFirstPgDone(true) }}>Next</button>
          </form>
        </div>
        :
        <div className='signup-form freelancer-signup-second-pg'>
          <form>
            <label htmlFor='phone'>Phone Number :</label>
            <input id='phone' name='phone' value={phone} onChange={handleChange} type='tel' placeholder='enter your phone number' />

            <label htmlFor='aadhar' aria-required>Aadhar Number :<span className="note">(Associated with above number)</span></label>
            <input id='aadhar' name='aadhar' type='number'  value={aadhar} onChange={handleChange} placeholder='enter your 12 digit aadhar number' />

            <label htmlFor="img">Upload a photo :</label>
            <input id="photo" name="img" type='file' value={img} onChange={handleChange}/>

            <label htmlFor='age' aria-required>Age :</label>
            <input id='age' name='age' type='number' max='100' min='14' value={age} onChange={handleChange} placeholder='You should above 14 years of age' />

            <CSC 
               frSignUpData={frSignUpData}
               setFrSignUpData={setFrSignUpData}
             />

            <div className="sepration"></div>

            <label htmlFor="bio">Bio : </label>
            <textarea id="bio" name="bio" placeholder="Introduce Yourself" value={bio} onChange={handleChange} maxLength='200' minLength="80" />

            <label htmlFor="interests">Interested In works :</label>
            <div className="interests-section">
              <div className="first-col">
                <div>
                  <input id="cleaning" name="cleaning" onChange={handleCheckbox} type='checkbox' />
                  <label htmlFor="cleaning">Home Cleaning </label>
                </div>
               
                <div>
                  <input id="baby-sitting" name="baby-sitting" onChange={handleCheckbox} type='checkbox' />
                  <label htmlFor="baby-sitting">Baby Sitting</label>
                </div>
                
                <div>
                  <input id="food" name="food" onChange={handleCheckbox} type='checkbox' />
                  <label htmlFor="food">Food</label>
                </div>
              </div>

              <div className="second-col">
                <div>
                  <input id="security" name="security" onChange={handleCheckbox} type="checkbox" />
                  <label htmlFor="security">Security</label>
                </div>
               
                <div>
                  <input id="caregiver" name="caregiver" onChange={handleCheckbox} type="checkbox" />
                  <label htmlFor="caregiver">Caregiver</label>
                </div>
                
                <div>
                   <input id="home-decor" name="home-decor" onChange={handleCheckbox} type="checkbox" />
                  <label htmlFor="home-decor">Home Decor</label>
                </div>
              </div>
            </div>
              <button onClick={handleFrSignupFormSubmit}>Submit</button>
          </form>
        </div>}
    </>
  )
  function handleChange(e) {
     setFrSignUpData(prevData => ({
          ...prevData,
         [e.target.name]: e.target.value
     }))
  }
  function handleToggle(e) {
    if (e.target.id == '1'){
      setIsFirstPgDone(false)
    } else{
      if(isFirstPgInvalid) return
      setIsFirstPgDone(true)
    }
  }
  function handleCheckbox(e) {
     if(e.target.checked){
         frSignUpData.interests.push(e.target.name)
     }else{
        let indexOfRemovedEl =  frSignUpData.interests.indexOf(e.target.name)
        frSignUpData.interests.splice(indexOfRemovedEl , 1)
     }
  }
  function handleFrSignupFormSubmit(e) {
    e.preventDefault()
    console.log("success")
  }
}
export default FreelancerSignupFormBase