// import { token } from "../../token";
const token = '38fe6214dd60b5402b4642787523c2154506007c'

const checkResponse = response => {
  if (response.status !== 200) {
    console.log(`(getProfile) Error with request: ${response.status}`);
    return;
  }
  return response.json();
};

const getProfile = async username => {
  // const url = `https://api.github.com/users/${username}`;
  const url = `https://api.github.com/users/${username}?access_token=${token}`;
    try {
      let response = await fetch(url);
      let json = await response.json();
      return json;
    } catch (error) {
      console.log(error);
    }
};

export default getProfile;
