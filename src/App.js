import "./App.css";
import { useState } from "react";
import Title from "./components/Title";
import Modal from "./components/Modal";

function App() {
  // const [name, setName] = useState("Mario");
  const [showModal, setShowModal] = useState(false);
  const [showEvents, setshowEvents] = useState(true);
  const [events, setEvents] = useState([
    { title: "mario", id: 1 },
    { title: "browser", id: 2 },
    { title: "race", id: 3 },
  ]);

  console.log(showEvents);
  console.log(showModal);
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

  const handleCLose = () => {
    setShowModal(false);
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

      {showModal && (
        <Modal handleCLose={handleCLose}>
          <h2>Term and Condition</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
            porro nulla tempore culpa unde exercitationem in, similique
            provident eum tempora ducimus enim minus iusto odit veniam aut
            maxime autem vitae!
          </p>
        </Modal>
      )}
      <button onClick={() => setShowModal(true)}>Show Modal</button>
    </div>
  );
}

export default App;
