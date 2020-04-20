import React, { useState, useEffect } from "react";

const Form = (props) => {
  const [member, setMember] = useState({
    name: "",
    email: "",
    role: "",
  });
  const setIsEditing = props.setIsEditing;
  const isEditing = props.isEditing;
  const form = props.form;
  const setForm = props.setForm;
  const memberToEdit = props.memberToEdit;

  useEffect(() => {
    setMember({
      name: memberToEdit.name,
      email: memberToEdit.email,
      role: memberToEdit.role,
    });
  }, [memberToEdit]);

  const handleChanges = (event) => {
    setMember({
      ...member,
      [event.target.name]: event.target.value,
    });
    console.log(event.target.name);
  };
  const submitForm = (event) => {
    event.preventDefault();
    props.addNewMember(member);
    setMember({ name: "", email: "", role: "" });
  };

  function editMember() {
    // filter or map and find the member you are editing from members
    // member = ...member
    // edit the member
    // put it back into the members array.
    setIsEditing(true);
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
