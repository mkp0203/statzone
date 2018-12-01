import React from "react";
import Logo from './Logo';
import WebTitle from './Website-Title';
import SearchBar from './Search-Bar';

const styles = {
    nav: {
        background: "#393f4d",
        height: 150
    }
}

const Nav = props => (
    <nav className="navbar" style={styles.nav}>
        <Logo
            image="images/league.png"
        ></Logo>
        <WebTitle></WebTitle>
        <SearchBar
            search={props.search}
            handleInputChange={props.handleInputChange}
            handleUserSearch={props.handleUserSearch}
        >
        </SearchBar>
    </nav>
)

export default Nav;