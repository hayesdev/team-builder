import React, { useState } from "react";
import Form from "./components/Forms";
import Team from "./components/Team";
import "./App.css";

function App() {
  const [member, setMember] = useState([]);
  const addNewMember = m => {
    setMember([...member, m]);
  };
  return (
    <div className="App">
      <Form addNewMember={addNewMember} />
      <Team member={member} />
    </div>
  );
}

export default App;
