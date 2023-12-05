import React from 'react';

const Greet = (props) => { // it is convention to name the parameter 'props'
    console.log(props); // props returns an object, using dot notation to get the value. props cannot be changed.
    return (
        <div>
            <h1>Hello {props.name}</h1>
            <p>Bloop props: {props.otherName}</p>
            <p>{props.children}</p> 
            {/* to render items inside component tag, key is 'children' in object */}
        </div>
    )
}

export default Greet;