import React from 'react';

export const RankIcon = (props) => (
    // pass props to dynamically change name; controlled in state
    <img src={props.rankIcon} alt={props.userRank} />
)