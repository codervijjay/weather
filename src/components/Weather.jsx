import React, { useState } from 'react'
import axios from 'axios';

export const Weather = () => {

  const [city, setCity] = useState('');
  const [temperture, setTemperture] = useState(null)
  const [error, setError] = useState('');

  const apiKey = `e3193e991f943e0f49540d279ae594df`;

  const fetchWeather = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
      console.log(response);
      setTemperture(response.data.main.temp);
      setError('')
    } catch (err) {
      setError('we could find error data please enter another city');
      setTemperture(null)
    }
  }

  return (
    <div className='parent '>
      <div className="box">
        <h1 className='app_heading'>WEATHER APP</h1>
        <input type="text" placeholder='Enter City Name' className='city_input' value={city} onChange={(e) => setCity(e.target.value)} />
        <button className='weather' onClick={fetchWeather}>Check </button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {temperture !== null && (
          <>
            <h2 id='cityName'>{city.toUpperCase()}</h2>
            <h2>{temperture}°C</h2>
          </>
        )}
        <h1>Upcoming Days Temperture</h1>
      </div>
    </div>
  )
}
