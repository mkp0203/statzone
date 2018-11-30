// For testing purposes 

const axios = require('axios');

// need to add APIkeys

function testAPI() {
  console.log("Testing API");
  axios.get(BASEURL + query + APIKEY)
  .then(res => {
      console.log(res.data)
  });
}

testAPI();
