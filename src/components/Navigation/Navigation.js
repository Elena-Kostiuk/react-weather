import { click } from '@testing-library/user-event/dist/click'
import React from 'react'

export default function Navigation (props) {
  return (
    <div>
      <select
        onChange={event => {
          props.city(event.target.value)
        }}
      >
        <option value='Kyiv'>Kyiv</option>
        <option value='Dnipro'>Dnipro</option>
        <option value='Lviv'>Lviv</option>
        <option value='Odesa'>Odesa</option>
        <option value='Zaporizhzhia'>Zaporizhzhia</option>
        <option value='Cherkasy'>Cherkasy</option>
        <option value='Eisenbach'>Eisenbach</option>
        Eisenbach
      </select>
    </div>
  )
}
