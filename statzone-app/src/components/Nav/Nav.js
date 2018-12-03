import React from "react";
import Logo from './Logo';
import WebTitle from './Website-Title';
import SearchBar from './Search-Bar';

const styles = {
    nav: {
        background: "#000",
        height: 100
    }
}

const Nav = () => (
    <nav className="navbar" style={styles.nav}>
        <Logo
            image="images/league.png"
        ></Logo>
        <WebTitle></WebTitle>
        <SearchBar>
        </SearchBar>
    </nav>
)

export default Nav;