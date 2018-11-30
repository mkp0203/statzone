import axios from "axios";

const BASEURL = "https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/";
const APIKEY = "?api_key=RGAPI-a5bf1f05-32d0-4daf-9a2d-52152fa7e2cb";

// Export an object with a "search" method that searches the Giphy API for the passed query
const API = {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};

export default API;

