import React, { useState } from 'react'
import Navigation from '../components/Navigation/Navigation'
import TodayWeather from '../components/TodayWeather/TodayWeather'
import WeekWeather from '../components/WeekWeather/WeekWeather'
import style from './WeatherWidget.module.css'

export default function WeatherWidget () {
  const [weatherInfo, setWeatherInfo] = useState()

  return (
    <div className={style['main-container']}>
      <Navigation setWeatherInfo={setWeatherInfo} />
      {weatherInfo && (
        <main>
          <TodayWeather data={weatherInfo.current} />
          <WeekWeather data={weatherInfo.forecast.forecastday} />
        </main>
      )}
    </div>
  )
}
