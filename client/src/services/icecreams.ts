import axios from "axios";
const phraseUrl = "http://localhost:3003/api/words/";
const iceCreamUrl = " http://localhost:3003/api/icecreams"


type newFlavor = {
  name: string;
  isUserGenerated: boolean;
  userId: string;
  dateCreated: Date;
};


const getFive = () => {
  const request = axios.get(`${iceCreamUrl}/suggestions/5`)
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

const saveFlavor = async (iceCream: newFlavor) => {

  console.log(iceCream)
  await axios.post(iceCreamUrl, iceCream
  ).catch(function (error) {
    console.log(error.toJSON());
  }); 
}

export default { getFive, getAdjective, getNoun, saveFlavor };
