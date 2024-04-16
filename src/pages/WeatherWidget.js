import React, { useEffect, useState } from 'react'
import Navigation from '../components/Navigation/Navigation'
import TodayWeather from '../components/TodayWeather/TodayWeather'
import WeekWeather from '../components/WeekWeather/WeekWeather'
import { getWeatherInfo } from '../api/getWeatherInfo'
import style from './WeatherWidget.module.css'
import { format } from 'date-fns'

export default function WeatherWidget () {
  const [weatherInfo, setWeatherInfo] = useState()
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
      .then(data => setWeatherInfo(data))
      .catch(error => {
        console.log(error)
      })
  }, [city, currentDate, days])
  console.log(city)
  return (
    <div className={style['main-container']}>
      <nav className={style['nav-box']}>
        <select value={city} onChange={handleSelectChange}>
          <option value='Choose a city'>Choose a city</option>
          <option value='Kyiv'>Kyiv</option>
          <option value='Dnipro'>Dnipro</option>
          <option value='Lviv'>Lviv</option>
          <option value='Odesa'>Odesa</option>
          <option value='Kharkiv'>Kharkiv</option>
          <option value='Cherkasy'>Cherkasy</option>
          <option value='Eisenbach'>Eisenbach</option>
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
      {weatherInfo && (
        <main>
          <TodayWeather data={weatherInfo.current} />
          <WeekWeather data={weatherInfo.forecast.forecastday} />
        </main>
      )}
    </div>
  )
}
