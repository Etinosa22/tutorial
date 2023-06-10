import './App.css';
import { useState } from 'react'
import Title from './components/Title';
import Modal from './components/Modal';
import Eventlist from './components/Eventlist';
import NewEventForm from './components/NewEventForm';

function App() {
  const[showModal, setShowModal] = useState(false)
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([])

  const addEvent = (event) => {
    setEvents((prevEvents) => {
      return [...prevEvents, event]
    })
    setShowModal(false)
  }

  const handleClick = (id) => {
    setEvents(prevEvents => {
      return prevEvents.filter(event => {
        return id !== event.id
      })
    })
    console.log(id)
  }


  const sub = "All the latest events in Nosaland"

  return (
    <div className="App">
      
      <Title title="Events in Your Area" subtitle={sub}/> 
      {showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>hide events</button>  
        </div>
        )}
      {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>show events</button>
        </div>
        )} 
      {showEvents && <Eventlist events ={events} handleClick={handleClick
      } />}
     
      {showModal && <Modal isSalesModal={true}>
        <NewEventForm addEvent={addEvent}/>
      </Modal>}

      <div>
        <button onClick={() => setShowModal(true)}>Add New Event</button>
      </div>
    </div>
  );
}

export default App;
