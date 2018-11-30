import React from "react";
import "./Logo.css";

// you can do css in the css file or do it specifically in here
// const styles = {
//     image: {
        
//     }
// }

const Logo = (props) => (
    // eventually we will need to pass the props back down to this component but for now we can manage everything here
    <img
        className="logo"
        //alternatively we can do style={styles.images}
        src={props.image}
        alt="League of Legends"
    />
)

export default Logo;