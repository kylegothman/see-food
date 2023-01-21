import React from "react";
import './button.css';


function NavButton({name}) {
    return (
        <button className='button'>{ name }</button>
    )
}

export default NavButton;
