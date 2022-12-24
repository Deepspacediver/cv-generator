import React, { Component, useState } from "react";

const Input = ({ placeHolder, name, id, type = "text" }) => {
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(placeHolder);

  const toggleEditing = () => {
    setEditing(!editing);
  };

  const handleValueChange = (e) => {
    setValue(e.target.value);
  };

  return !editing && value ? (
    <p onClick={toggleEditing}>{value}</p>
  ) : (
    <input
      type={type}
      id={id}
      name={name}
      placeholder={placeHolder}
      value={value}
      onChange={handleValueChange}
      autoFocus
      onBlur={toggleEditing}
    />
  );
};

export default Input;
