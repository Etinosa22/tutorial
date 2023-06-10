// import React from 'react'
import styles from './EventList.module.css'

function Eventlist({ events, handleClick }) {
  return (
    <div>
      {events.map((event, index) => (
        <div className={styles.card} key={event.id}>
          <h2>{index} - {event.title}</h2>
          <button onClick={() => handleClick(event.id)}>delete event</button>
        </div>
      ))}
    </div>
  )
}

export default Eventlist
