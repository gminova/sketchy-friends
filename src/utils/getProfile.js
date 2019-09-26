// import { token } from "../../token";

const checkResponse = response => {
  if (response.status !== 200) {
    console.log(`(getProfile) Error with request: ${response.status}`);
    return;
  }
  return response.json();
};

const getProfile = async username => {
  const url = `https://api.github.com/users/${username}`;
  // const url = `https://api.github.com/users/${username}?access_token=${token}`;
    try {
      let response = await fetch(url);
      let json = await response.json();
      return json;
    } catch (error) {
      console.log(error);
    }
};

export default getProfile;
