import React, { useEffect, useState } from 'react'
import { format } from 'date-fns'
import { getWeatherInfo } from '../../api/getWeatherInfo'
import style from '../../pages/WeatherWidget.module.css'

export default function Navigation (props) {
  const [city, setCity] = useState('Kyiv')
  const [days, setDays] = useState(5)
  const currentDate = format(new Date(), 'yyyy-mm-dd')

  const handleSelectChange = event => {
    event.preventDefault()
    setCity(event.target.value)
  }
  const handleInputChange = event => {
    event.preventDefault()
    setDays(event.target.value)
  }

  useEffect(() => {
    getWeatherInfo(city, currentDate, days)
      .then(res => res.json())
      .then(data => props.setWeatherInfo(data))
      .catch(error => {
        console.log(error)
      })
  }, [city, currentDate, days])
  console.log(city)

  return (
      <nav className={style['nav-box']}>
        <select value={city} onChange={handleSelectChange}>
          <option value='Choose a city'>Choose a city</option>
          <option value='Kyiv'>Kyiv</option>
          <option value='Dnipro'>Dnipro</option>
          <option value='Lviv'>Lviv</option>
          <option value='Odesa'>Odesa</option>
          <option value='Kharkiv'>Kharkiv</option>
          <option value='Cherkasy'>Cherkasy</option>
          <option value='Eisenbach'>Vinnitsa</option>
        </select>
        <label>
          <input
            type='radio'
            name='interval'
            value={3}
            onChange={handleInputChange}
          ></input>
          3 days
        </label>
        <label>
          <input
            type='radio'
            name='interval'
            value={7}
            onChange={handleInputChange}
          ></input>
          7 days
        </label>
        
      </nav>
  )
}
