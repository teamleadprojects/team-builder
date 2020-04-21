import React, { useState, useEffect } from "react";

const Form = ({
  memberToEdit,
  setIsEditing,
  isEditing,
  addNewMember,
  members,
  setMembers,
}) => {
  const [member, setMember] = useState({});

  useEffect(() => {
    setMember(memberToEdit);
  }, [memberToEdit]);

  const initialMemberState = {
    name: "",
    email: "",
    role: "",
  };

  const handleChanges = (event) => {
    setMember({
      ...member,
      [event.target.name]: event.target.value,
    });
    console.log(event.target.name);
  };

  const submitForm = (event) => {
    event.preventDefault();
    if (isEditing) {
      editMember(member);
      setMember(initialMemberState);
      setIsEditing(false);
    } else {
      addNewMember(member);
    }
  };
  // the member we are currently editing.
  function editMember(memberInfo) {
    // filter or map and find the member you are editing from members
    // member = ...member
    // edit the member
    // put it back into the members array.
    const { id } = memberInfo;
    const memberIndex = members.findIndex((x) => x.id === id);
    const clonedMembers = [...members];
    clonedMembers[memberIndex] = memberInfo;

    setMembers(clonedMembers);
    //setMembers();

    console.log("member to edit", member);
  }

  return (
    <div>
      <form onSubmit={submitForm}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Name"
          onChange={handleChanges}
          value={member.name}
        />
        <label>Email</label>
        <input
          id="email"
          name="email"
          type="text"
          placeholder="Email"
          onChange={handleChanges}
          value={member.email}
        />
        <label>Role</label>
        <input
          id="role"
          name="role"
          type="text"
          placeholder="Role"
          onChange={handleChanges}
          value={member.role}
        />
        <button type="submit">
          {!isEditing ? "Add new member" : "Edit member"}
        </button>
      </form>
    </div>
  );
};
export default Form;
