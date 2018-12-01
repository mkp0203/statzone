import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import { Container, Col, Row } from './components/Grid';
// import { UserIcon, UserName, UserRank, RankIcon } from './components/Game-Content/User-Info';
import Footer from './components/Footer';
// import API from './utils/LeagueAPI';
import { UserName, UserRank } from './components/Game-Content/User-Info';
import axios from "axios";


// TEMPORARY STYLING HERE FOR VISUAL SEPARATION
const styles = {
  userInfo: {
    height: "200px",
    backgroundColor: "#393f4d",
    color: "#feda6a",
    marginBottom: "40px",
    marginTop: "40px",
    opacity: 0.8,
    textAlign: "center"
  },
  matchHistory: {
    height: "600px",
    backgroundColor: "#393f4d",
    color: "#feda6a",
    marginBottom: 40,
    opacity: 0.8
  },
  footer: {
    textAlign: "center",
    width: "50%",
    fontSize: 12
  }
}
// -----------------------------------------------------------------------------------------------------------

class App extends Component {
  
  state = {
    search: "",
    results: []
  };

  handleUserSearch = event => {
    event.preventDefault();
    this.searchAPI(this.state.search);
  }

  searchAPI = query => {
    axios.get("https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/ohgbaby?api_key=RGAPI-a5bf1f05-32d0-4daf-9a2d-52152fa7e2cb")
      .then(res => this.setState({ results: res.data }))
      .catch(err => console.log(err))
      console.log(query)
  }

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  
  render() {
    return (
      <div>
        <Nav
          search={this.state.search}
          handleInputChange={this.handleInputChange}
          handleUserSearch={this.handleUserSearch}
        />
        <Container>
          <Row style={styles.userInfo}>
            <Col size="md-3">
              {/* User Specific Info Goes Here */}
              <div style={styles.userInfo}>
              <h4>User Icon Goes Here</h4>
              </div>
            </Col>
            <Col size="md-3">
              {/* User Specific Info Goes Here */}
              <div style={styles.userInfo}>
              <UserName
                summonerName={this.state.results.name}
              />
              <UserRank
                solo={this.state.results.id}
              />
              </div>
            </Col>
            <Col size="md-3">
              {/* User Specific Info Goes Here */}
              <div style={styles.userInfo}>
              <h4>Rank Icon Goes Here</h4>
              </div>
            </Col>
          </Row>
          <Row>
            <Col size="md-12">
              {/* Match History Goes here */}
              <div style={styles.matchHistory}>
              <h1>MATCH HISTORY</h1>
              </div>
            </Col>
          </Row>
        </Container>
        <Footer>
          <p style={styles.footer}>Stat Zone isn’t endorsed by Riot Games and doesn’t reflect the views or opinions of Riot Games or anyone officially involved in producing or managing League of Legends. League of Legends and Riot Games are trademarks or registered trademarks of Riot Games, Inc. League of Legends © Riot Games, Inc.</p>
        </Footer>
      </div>
    );
  }
}

export default App;
