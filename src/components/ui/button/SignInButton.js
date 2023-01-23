import React, { useState } from "react";
import './button.css';

const SignInButton = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    return (
        <div>
            {isLoggedIn ? <button className='button'>Logout</button> : <button className='button'>Login</button>}
        </div>
        );
}

export default SignInButton;

