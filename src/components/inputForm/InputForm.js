import React, { useState } from "react";

const InputForm = props => {
  const [userInput, setUserInput] = useState('');

  const handleSubmit = event => {
    console.log(userInput);
    event.preventDefault();
    props.setProfile(userInput);
  }

  return (
    <div>
      <form className="input-form">
        <h1 display="none">Sketchy Friends</h1>
        <label className="input-form__label" htmlFor="input-form__input">
          Enter any Github handle and try to draw your friends:
          <input
            type="text"
            name="input-form__input"
            id="input-form__input"
            className="input-form__input"
            placeholder="fac-17"
            value={userInput}
            onChange={event => setUserInput(event.target.value)}
          />
        </label>
        <input
          type="submit"
          value="Find"
          onClick={handleSubmit}
          className="input-form__submit"
        />
      </form>
    </div>
  );
};

export default InputForm;
