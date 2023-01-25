import React, {useState} from 'react'
import {City, Country, State} from "country-state-city"
import Select from 'react-select'

const CSC = () => {
  const [cscData, setcscData] = useState({
    country: '',
    countryCode: '',
    state: '',
    stateCode: '',
    city: ''
  })
  const updatedCountries = Country.getAllCountries().map(country => ({
        label: country.name,
        values: country.isoCode,
    }))
    const filteredStates = State.getAllStates().filter(state=>(
        state.countryCode == cscData.countryCode
     ))
    const updatedStates = filteredStates.map(state=>({
       label: state.name,
       values: state.isoCode,
    }))
  const filteredCities = City.getAllCities().filter(city=>(
     city.stateCode == cscData.stateCode
  ))
  const updatedCities = filteredCities.map(city=>({
     label: city.name,
  }))

  return (
    <>
        <label>Country</label>
        <Select 
          name='country'
          placeholder='Choose your Country'
          value={cscData.country}
          options={updatedCountries}
          onChange={(e, name) => handleChange(e, name)}
        />

        <label>State</label>
        <Select 
          name='state'
          placeholder='Choose your State'
          value={cscData.state}
          options={updatedStates}
          onChange={(e, name) => handleChange(e, name)}
        />
        
        <label>City</label>
        <Select 
          name='city'
          placeholder='Choose your city'
          value={cscData.city}
          options={updatedCities}
          onChange={(e, name) => handleChange(e, name)}
        />
    </>
  )


  function handleChange(e, name) {
     setcscData(prevData => ({...prevData, [name.name]: e.label}))
     if(name.name!='city')
      setcscData(prevData => ({...prevData, [name.name+"Code"]: e.values}))
  }
}

export default CSC