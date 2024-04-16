import React from 'react'
import { getDate, getDay, getMonth, format } from 'date-fns'
import style from './TodayWeather.module.css'
import CONSTANTS from "../../api/constants";
const { DAYS_OF_WEEK,MONTHS } = CONSTANTS;

export default function TodayWeather (props) {
  console.log(props.data)
  return (
    <section className={style['today-container']}>
      <div>
        <p>{DAYS_OF_WEEK[getDay(new Date())]}</p>
        <p>
          {getDate(new Date())} {MONTHS[getMonth(new Date())]}
        </p>
      </div>
      <img src={props.data.condition.icon} />
      <span>
        {Math.round(props.data.temp_c) > 0
          ? `+${Math.round(props.data.temp_c)}`
          : Math.round(props.data.temp_c)}
        &#8451;
      </span>
    </section>
  )
}
