import axios from "axios";
const iceCreamUrl = "http://localhost:3003/api/icecreams/suggestions/5";
const phraseUrl = "http://localhost:3003/api/words/";

const getFive = () => {
  const request = axios.get(iceCreamUrl)
  .then((response) => response.data)
  .catch(function (error) {
    console.log(error.toJSON());
  });
  return request
};

const getAdjective = async () => {
  const request = axios.get(`${phraseUrl}/adjective`)
  .then((response) => response.data)
  .catch(function (error) {
    console.log(error.toJSON());
  });
  return request
};

const getNoun = async () => {
  const request = axios.get(`${phraseUrl}/noun`)
  .then((response) => response.data)
  .catch(function (error) {
    console.log(error.toJSON());
  });
  return request
};

export default { getFive, getAdjective, getNoun };
