import React from 'react';

export const UserName = (props) => (
    // pass props to dynamically change name; controlled in state
    <h4>
        Username: {props.summonerName}
    </h4>
)