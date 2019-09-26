import React, { useState, useEffect } from "react";
// import {setProfile} from "./display";


const InputForm = props => {

  return (
    <form className="input-form">
      <h1 display="none">Input form</h1>
      <label className="input-form__label" htmlFor="input-form__input">Enter any Github handle</label>
      <input
        type="text"
        className="input-form__input"
        value={props.profile}
        onChange={event => props.setProfile(event.target.value)}
      />
    </form>

  );
};


export default InputForm;
