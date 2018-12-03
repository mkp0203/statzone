import axios from "axios";

// update daily
// current for 11/30/18
const APIKEY = "RGAPI-be94f1ae-f305-4f4d-81f6-533e1fa79034";

// format: https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/<summonername>?api_key=KEY
const BASEURL_SUMMONER_V3 = "https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/";
  {
  /*
  returns
  {
    "id":63672321,
    "accountId":215947628,
    "name":"Oh G Baby",
    "profileIconId":2074,
    "revisionDate":1542684580000,
    "summonerLevel":62
  }
  */
  }

// format: https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/ohgbaby?api_key=KEY
const BASEURL_SUMMONER_V4 = "https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/";
  {
  /*
  returns
    {
      "id":"MQJ1VHEXwN4t6tvf2HJNaaxqABDUaq5HfljdL3oUPhxowR8",
      "accountId":"2f1ozXpOv62ian7HkfokaoTguR6DfatYsu_fr5yiw5pS7kw",
      "puuid":"OjjJ9iV9tPzE3emQv2drUvbRcyFP3Ojtm3vwEyegKvjRjmZ7_QuqX-neG5iIOIkOYI2AwWcGCo_JJQ",
      "name":"Oh G Baby",
      "profileIconId":2074,
      "revisionDate":1543644231000,
      "summonerLevel":62
    }
  */
  }

// format: https://na1.api.riotgames.com/lol/league/v4/positions/by-summoner/{summonerid}?api_key=<key>
const BASEURL_LEAGUE = "https://na1.api.riotgames.com/lol/league/v4/positions/by-summoner/";
  {  
  /*
    returns
      [
        {
          "queueType": "RANKED_SOLO_5x5",
          "summonerName": "Oh G Baby",
          "hotStreak": false,
          "wins": 31,
          "veteran": false,
          "losses": 45,
          "rank": "III",
          "leagueName": "Lux's Lords",
          "inactive": false,
          "freshBlood": false,
          "leagueId": "05387ba0-1061-11e8-8a89-c81f66dbb56c",
          "tier": "SILVER",
          "summonerId": "MQJ1VHEXwN4t6tvf2HJNaaxqABDUaq5HfljdL3oUPhxowR8",
          "leaguePoints": 34
        },
        {
          "queueType": "RANKED_FLEX_SR",
          "summonerName": "Oh G Baby",
          "hotStreak": false,
          "wins": 18,
          "veteran": false,
          "losses": 15,
          "rank": "I",
          "leagueName": "Draven's Executioners",
          "inactive": false,
          "freshBlood": false,
          "leagueId": "8db1c270-476b-11e8-b378-c81f66dbb56c",
          "tier": "SILVER",
          "summonerId": "MQJ1VHEXwN4t6tvf2HJNaaxqABDUaq5HfljdL3oUPhxowR8",
          "leaguePoints": 78
        }
      ]
    */
  }


    
// Export an object with a "search" method that searches the Giphy API for the passed query
const LEAGUE_API = {
  search: function(query) {
    // will be https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/ohgbaby?api_key=RGAPI-a5bf1f05-32d0-4daf-9a2d-52152fa7e2cb
    return axios.get(BASEURL_SUMMONER_V3 + query + "?api_key=" + APIKEY);
  }
};

export default LEAGUE_API;

