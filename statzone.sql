DROP DATABASE IF EXISTS statzone;
CREATE DATABASE statzone;

USE statzone;

CREATE TABLE players(
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  playerName VARCHAR(100),
  PRIMARY KEY (id)
);

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
    id INTEGER(11) AUTO_INCREMENT NOT NULL,
    playerName VARCHAR(100),
    playerId INTEGER(11) NOT NULL,
    gameName VARCHAR(100),
    gameId INTEGER(3) NOT NULL,
    win/loss FLOAT(3) NOT NULL,
    mostPlayed VARCHAR(100),
    matchHistoryId INTEGER(11) NOT NULL,

)

CREATE TABLE matchHistory_LeagueOfLegends(
    id INTEGER(11) AUTO_INCREMENT NOT NULL,
    matchDateAndTime VARCHAR(50) NOT NULL,
    matchWin BOOLEAN NOT NULL,
    matchDuration VARCHAR(50) NOT NULL,
    kills INTEGER(3) NOT NULL,

)

CREATE TABLE champions_LeagueOfLegends(

)

