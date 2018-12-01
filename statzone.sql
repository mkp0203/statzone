DROP DATABASE IF EXISTS statzone;
CREATE DATABASE statzone;

USE statzone;

CREATE TABLE players(
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  playerName VARCHAR(100),
  playerAliasTableId INTEGER(11),
  PRIMARY KEY (id)
)

CREATE TABLE aliases(
    id INTEGER(11) AUTO_INCREMENT NOT NULL,
    playerId INTEGER(11) NOT NULL,
    alias VARCHAR(100),
    lastUsed VARCHAR(100)
)

CREATE TABLE games(
    id INTEGER(3) NOT NULL,
    gameName VARCHAR(100),
    PRIMARY KEY (id)
)

CREATE TABLE stats(
    id INTEGER(11) AUTO_INCREMENT NOT NULL,
    playerName VARCHAR(100),
    playerId INTEGER(11) NOT NULL,
    gameName VARCHAR(100),
    gameId INTEGER(3) NOT NULL,
    PRIMARY KEY (id)
)

CREATE TABLE stats_LeagueOfLegends(
    id INTEGER(11) AUTO_INCREMENT ,
    playerName VARCHAR(100),
    playerId INTEGER(11) ,
    playerLevel INTEGER(3) ,
    playerRank VARCHAR(50) ,
    playerLP INTEGER(3),
    gameName VARCHAR(100),
    gameId INTEGER(3),
    win/loss FLOAT(3),
    mostPlayed VARCHAR(100),
    matchHistoryId INTEGER(11),

)

CREATE TABLE matchHistory_LeagueOfLegends(
    id INTEGER(11) AUTO_INCREMENT NOT NULL,
    matchDateAndTime VARCHAR(50) NOT NULL,
    matchWin BOOLEAN NOT NULL,
    matchDuration VARCHAR(50) NOT NULL,
    kills INTEGER(3) NOT NULL,
    deaths INTEGER(3) NOT NULL,
    assists INTEGER(3) NOT NULL
)

CREATE TABLE champions_LeagueOfLegends(

)



INSERT INTO stats_LeagueOfLegends (playerName, playerId, gameName, gameId)
VALUES ("name", "000", "Oh G Baby", "MQJ1VHEXwN4t6tvf2HJNaaxqABDUaq5HfljdL3oUPhxowR8");

