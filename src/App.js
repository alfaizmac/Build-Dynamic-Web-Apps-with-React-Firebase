import "./App.css";
import { useState } from "react";
import Title from "./components/Title";
import Modal from "./components/Modal";

function App() {
  // const [name, setName] = useState("Mario");
  const [showEvents, setshowEvents] = useState(true);
  const [events, setEvents] = useState([
    { title: "mario", id: 1 },
    { title: "browser", id: 2 },
    { title: "race", id: 3 },
  ]);

  console.log(showEvents);

  const handleClick = (id) => {
    // //this update the new name.
    // setName("Luigi");
    // console.log(name);

    //this delete on of the event
    // setEvents(
    //   events.filter((events) => {
    //     return id !== events.id;
    //   })
    // );
    // another algo
    setEvents((prevEvents) => {
      return prevEvents.filter((events) => {
        return id !== events.id;
      });
    });
    console.log(id);
  };

  const subtitle = "All the latest events in Marioland";

  return (
    <div className="App">
      <Title title="Events in Your Area" subtitle={subtitle} />

      {/* <h1>My name is {name}</h1>
      <button onClick={handleClick}>Change name</button> */}
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

      {showEvents &&
        events.map((events, index) => (
          <div key={events.id}>
            <h2>
              {index} - {events.title}
            </h2>
            <button onClick={() => handleClick(events.id)}>delete event</button>
          </div>
        ))}

      <Modal />
    </div>
  );
}

export default App;
