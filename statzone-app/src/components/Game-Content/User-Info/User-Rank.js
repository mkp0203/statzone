import React from 'react';

export const UserRank = (props) => (
    // pass props to dynamically change name; controlled in state
    <h1>
        Rank: {props.rank}
    </h1>
)