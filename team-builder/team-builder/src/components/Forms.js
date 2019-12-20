import React, { useState } from "react";

const Form = ({ addNewMember }) => {
  const [newMember, setNewMember] = useState({
    name: "",
    email: "",
    role: ""
  });

  const handleChange = e => {
    setNewMember({ ...newMember, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  const submitForm = e => {
    e.preventDefault();
    const newPerson = { ...newMember, id: Date.now() };

    addNewMember(newPerson);
    console.log(newPerson);
  };

  return (
    <div>
      <form className="addMember" onSubmit={submitForm}>
        <input
          type="text"
          onChange={handleChange}
          name="name"
          placeholder="Name"
          value={newMember.name}
        />
        <input
          type="text"
          onChange={handleChange}
          name="role"
          placeholder="Role"
          value={newMember.role}
        />
        <input
          type="text"
          onChange={handleChange}
          name="email"
          placeholder="email"
          value={newMember.email}
        />

        <button type="submit">Submit</button>
      </form>
      <div className="member">Team Members </div>
    </div>
  );
};

export default Form;
