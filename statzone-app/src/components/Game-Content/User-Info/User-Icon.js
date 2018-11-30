import React from 'react';

export const UserIcon = (props) => (
    // here we will use the props to dynamically change the user icon based on the user
    // assuming that this is an image, we may need to change this to a div
    <img src={props.userIcon} alt={src.iconName}/>
)