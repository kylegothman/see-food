import React from "react";
import './button.css';


export default function NavButton({name}) {
    return (
        <button className='button'>{ name }</button>
    )
}

