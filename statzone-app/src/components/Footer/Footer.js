import React from "react";

const styles = {
    footerStyle: {
        background: "#393f4d",
        height: "100px",
        width: "100%",
        color: "#feda6a",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        padding: 35
    }
}

const Footer = ({ children }) => (
    <div className="footer" style={styles.footerStyle}>
        {children}
    </div>
)

export default Footer;