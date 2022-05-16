import React from 'react';
import { useState } from "react";

function Character({name, details}) {

    const [showMore, setShowMore] = useState(false)

    return (
    <div>
        <h2>{name}</h2>
        {showMore &&
        <>
            <h3>{details}</h3>
        </>
        }
        <button onClick={ ()=> {setShowMore(!showMore)} }>{showMore ? "Show less" : "show more"}</button>
    </div>
    )
}

export default Character