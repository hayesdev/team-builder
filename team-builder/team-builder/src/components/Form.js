import React, { useState } from "react";

export function Forms() {
  const [member, setMember] = useState({
    name: "",
    email: "",
    role: ""
  });

  const handleInputChange = e => {
    setMember({ name: e.target.value });
    console.log(e.target.value);
  };

  const submitForm = e => {
    e.preventDefault();
  };

  return (
    <div>
      <form className="addMember">
        <input
          type="text"
          onChange={handleInputChange}
          name="name"
          placeholder="Name"
        />
        <input
          type="text"
          //   onChange={handleInputChange}
          name="role"
          placeholder="Role"
        />
        <input
          type="text"
          //   onChange={handleInputChange}
          name="email"
          placeholder="email"
        />

        <button type="submit">Submit</button>
      </form>
      <div className="member">Team Members </div>
    </div>
  );
}
