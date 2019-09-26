import React, { useState, useEffect } from "react";
import "./style.css"
import getProfile from "../../utils/getProfile.js"
let username = 'gminova';

const Display = props => {
  const [picture, setPicture] = useState('https://s23527.pcdn.co/wp-content/uploads/2019/02/moon-1-768x533.jpg.optimal.jpg')
  username = (props.profile)

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
