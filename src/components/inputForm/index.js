import React, { useState, useEffect } from "react";

const InputForm = (props) => {
  const [name, setName] = useState("gminova")


  return (
    <form className="input-form">
      <h1>Input form</h1>
      <label className="input-form__label" htmlFor="input-form__input">Enter any Github handle</label>
      <input
        type="text"
        className="input-form__input"
        value={props.name}
        onChange={e => setName(e.target.value)}
      />
      <h3>Current name: {name}</h3>
    </form>

  );
};

export default InputForm;
