import React from "react";

const Team = props => {
  return (
    <div>
      {props.member.map(i => {
        return (
          <div key={i.id}>
            {" "}
            <h2>Member Name: {i.name}</h2>
            <h3>Role: {i.role}</h3>
            <h3>Email: {i.email}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Team;
