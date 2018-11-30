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
    marginTop: "40px"
  },
  matchHistory: {
    height: "600px",
    backgroundColor: "#393f4d",
    color: "#feda6a",
    marginBottom: 40
  },
  footer: {
    textAlign: "center'"
  }
}
// -----------------------------------------------------------------------------------------------------------

class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <Container>
          <Row>
            <Col size="md-12">
              {/* User Specific Info Goes Here */}
              <div style={styles.userInfo}>
              <h1>User Information Will Go Here</h1>
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
          <h2 style={styles.footer}>Footer Content Goes Here</h2>
        </Footer>
      </div>
    );
  }
}

export default App;
