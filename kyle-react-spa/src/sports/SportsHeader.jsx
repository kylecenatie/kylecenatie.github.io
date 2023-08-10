import React from "react";


const SportsHeader = (props) => {
    return (
        <h2 style={{ "textAlign": "center", "margin": "20px" }}>
            <img src={props.logo}
            width="50"
            height="90"
            alt="logo" />
            &emsp;{props.title} </h2>
    );
}
export default SportsHeader;