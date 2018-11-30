// For testing purposes 

const axios = require('axios');

const query = "ohgbaby"
const BASEURL = "https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/";
const APIKEY = "?api_key=RGAPI-a5bf1f05-32d0-4daf-9a2d-52152fa7e2cb";


function testAPI() {
  console.log("Testing API");
  axios.get(BASEURL + query + APIKEY)
  .then(res => {
      console.log(res.data)
  });
}

testAPI();
