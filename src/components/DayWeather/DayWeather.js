import React from 'react'
import { getDate, getDay, getMonth, format } from 'date-fns'
import style from './DayWeather.module.css'
import CONSTANTS from "../../api/constants";
const { DAYS_OF_WEEK,MONTHS } = CONSTANTS;

export default function DayWeather (props) {
  const { date, tempMax, tempMin, icon } = props
  return (
    <article className={style['day-container']}>
      <p>{(DAYS_OF_WEEK[getDay(date)]).slice(0,3)}</p>
      <p>
        {getDate(date)} {MONTHS[getMonth(new Date())]}
      </p>
      <img src={icon} />
      <section className={style['temp-box']}>
        <div>
          <p>min</p>
          <span>
            {Math.round(tempMin) > 0
              ? `+${Math.round(tempMin)}`
              : Math.round(tempMin)}&#176;
          </span>
        </div>
        <div>
          <p>max</p>
          <span>
            {Math.round(tempMax) > 0
              ? `+${Math.round(tempMax)}`
              : Math.round(tempMax)}&#176;
          </span>
        </div>
      </section>
    </article>
  )
}
