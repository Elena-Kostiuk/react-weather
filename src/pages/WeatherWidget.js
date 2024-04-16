import React, { useState } from 'react'
import Navigation from '../components/Navigation/Navigation'
import TodayWeather from '../components/TodayWeather/TodayWeather'
import WeekWeather from '../components/WeekWeather/WeekWeather'
import style from './WeatherWidget.module.css'

export default function WeatherWidget () {
  const [weatherInfo, setWeatherInfo] = useState()
  const [background, setBackground] = useState({})

  const b = {
    backgroundImage:'url("images/background/realistic-spring-background_52683-34520.avif")'
  }

  return (
    <div className={style['main-container']} style={background}>
      <Navigation setWeatherInfo={setWeatherInfo} setBackground={setBackground}/>
      {weatherInfo && (
        <main>
          <TodayWeather data={weatherInfo.current} />
          <WeekWeather data={weatherInfo.forecast.forecastday} />
        </main>
      )}
    </div>
  )
}
