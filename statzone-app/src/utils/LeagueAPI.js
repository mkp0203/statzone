import axios from "axios";

const BASEURL = "https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/";

// Export an object with a "search" method that searches the Giphy API for the passed query
const API = {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};

export default API;

