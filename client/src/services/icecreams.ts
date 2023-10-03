import axios from "axios";
const iceCreamUrl = "http://localhost:3003/api/icecreams/suggestions/5";
const phraseUrl = "http://localhost:3003/api/words/";

const getFive = () => {
  const request = axios.get(iceCreamUrl);
  return request.then((response) => response.data);
};

const getAdjective = async () => {
  const request = axios.get(`${phraseUrl}/adjective`);
  return request.then((response) => response.data);
};

const getNoun = async () => {
  const request = axios.get(`${phraseUrl}/noun`);
  return request.then((response) => response.data);
};

export default { getFive, getAdjective, getNoun };
