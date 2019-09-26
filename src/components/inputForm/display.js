import React, { useState, useEffect } from "react";
import getProfile from "../../utils/getProfile.js"


const Display = props => {
  const [picture, setPicture] = useState('https://s23527.pcdn.co/wp-content/uploads/2019/02/moon-1-768x533.jpg.optimal.jpg')


  useEffect(() => {
    getProfile(props.profile)
      .then(data => setPicture(data))
  }, [props.profile]);

  if (!picture.avatar_url) {
    return <h3>Loading...</h3>;
  }

  return (
    <div>
      <img src={picture.avatar_url} width="500" alt="some image" />
    </div>
  );
};


export default Display;
