import React from 'react';

export const UserName = (props) => (
    // pass props to dynamically change name; controlled in state
    <h1>
        Username: {props.summonerName}
    </h1>
)