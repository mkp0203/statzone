import React from "react";
import "./Logo.css";

// you can do css in the css file or do it specifically in here
const styles = {
    image: {
        height: 100,
        background: "#000",
        border: 0,
        paddingTop: 20
    }
}

const Logo = (props) => (

    <div class="dropdown">
        <img className="btn btn-secondary dropdown-toggle logo" href="#" role="button"
            src={props.image}
            style={styles.image}
            alt="League of Legends"
            id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        </img>

        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <a className="dropdown-item" href="#">Clash Royale</a>
            <a className="dropdown-item" href="#">Destiny 2</a>
            <a className="dropdown-item" href="#">Overwatch</a>
        </div>
    </div>
)

export default Logo;