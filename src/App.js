import "./App.css";
import { useState } from "react";
import Title from "./components/Title";
import Modal from "./components/Modal";
import EventList from "./components/EventList";
import NewEventForm from "./components/NewEventForm";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showEvents, setshowEvents] = useState(true);
  const [events, setEvents] = useState([]);

  const addEvent = (event) => {
    setEvents((prevEvents) => {
      return [...prevEvents, event];
    });
    setShowModal(false);
  };

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((events) => {
        return id !== events.id;
      });
    });
  };

  const subtitle = "All the latest events in Marioland";

  return (
    <div className="App">
      <Title title="Events in Your Area" subtitle={subtitle} />

      {showEvents && (
        <div>
          <button onClick={() => setshowEvents(false)}>Hide events</button>
        </div>
      )}
      {!showEvents && (
        <div>
          <button onClick={() => setshowEvents(true)}>Show events</button>
        </div>
      )}

      {showEvents && <EventList events={events} handleClick={handleClick} />}

      {showModal && (
        <Modal isSaleModal={true}>
          <NewEventForm addEvent={addEvent} />
        </Modal>
      )}
      <br />
      <div>
        <button onClick={() => setShowModal(true)}>Add new Event</button>
      </div>
    </div>
  );
}

export default App;
