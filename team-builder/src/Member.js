import React from "react";

const Member = (props) => {
  return (
    <div className="note-list">
      {props.members.map((member) => (
        <div className="note" key={member.id}>
          <h2>{member.name}</h2>
          <p>Email: {member.email}</p>
          <p>Role: {member.role}</p>
          <button onClick={() => props.memberToUpdate(member)}>Edit</button>
        </div>
      ))}
    </div>
  );
};

export default Member;
