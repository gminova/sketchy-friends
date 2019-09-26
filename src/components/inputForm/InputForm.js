import React from "react";
// import {setProfile} from "./display";

const InputForm = props => {
  return (
    <div>
      <form className="input-form">
        <h1 display="none">Input form</h1>
        <label className="input-form__label" htmlFor="input-form__input">
          Enter any Github handle:
          <input
            type="text"
            name="input-form__input"
            id="input-form__input"
            className="input-form__input"
            value={props.profile}
            onChange={event => props.setProfile(event.target.value)}
          />
        </label>
      </form>
    </div>
  );
};

export default InputForm;
