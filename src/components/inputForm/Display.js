import React, { useState, useEffect } from "react";
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
    <div className="display--image-container">
      <p className="display--p">You are drawing:  </p>
      <h3 className="display--h3">{username}</h3>
      <img src={picture.avatar_url} className="display--image" alt="some image" />
    </div>
  );
};


export default Display;
