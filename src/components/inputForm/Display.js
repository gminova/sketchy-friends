import React, { useState, useEffect } from "react";
import "./style.css"
import getProfile from "../../utils/getProfile.js"


const Display = props => {
  const [picture, setPicture] = useState(null)
  let username = (props.profile)

  useEffect(() => {
    getProfile(username).then(data => setPicture(data))
  }, [username]);

  if (!picture) {
    return <h3>Loading...</h3>;
  }

  return (
    <div>
      <img src={picture.avatar_url} className="input-form__image" alt="some image" />
    </div>
  );
};


export default Display;
