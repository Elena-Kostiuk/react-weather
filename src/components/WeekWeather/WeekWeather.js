import React from 'react'
import DayWeather from '../DayWeather/DayWeather'
import style from './WeekWeather.module.css'

export default function WeekWeather(props) {
  console.log(props.data)
  const days = props.data.slice(1)
  return (
    <section className={style['week-container']}>{
      days.map((oneDay, index) => <DayWeather date={oneDay.date} tempMax={oneDay.day.maxtemp_c} tempMin={oneDay.day.mintemp_c} icon={oneDay.day.condition.icon}key={index} />)}</section>
  )
}
