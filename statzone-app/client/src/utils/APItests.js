// For testing purposes 

const axios = require('axios');

// need to add APIkeys
// 11/30/18 key = RGAPI-a5bf1f05-32d0-4daf-9a2d-52152fa7e2cb

function testAPI() {
  console.log("Testing API");
  axios.get(BASEURL + query + APIKEY)
  .then(res => {
      console.log(res.data)
  });
}

testAPI();
