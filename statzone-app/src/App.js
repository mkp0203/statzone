import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import { Container, Col, Row } from './components/Grid';
// import { UserIcon, UserName, UserRank, RankIcon } from './components/Game-Content/User-Info';
import Footer from './components/Footer';

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
  render() {
    return (
      <div>
        <Nav/>
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
              <h4>Username</h4>
              <h4>Solo</h4>
              <h4>Flex</h4>
              <h4>Win/Loss Ratio</h4>
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
