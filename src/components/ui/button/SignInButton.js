import React, { useState } from "react";
import './button.css';

const SignInButton = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const login = () => setIsLoggedIn(true);
    const logout = () => setIsLoggedIn(false);

    return (
        <div>
            {isLoggedIn ? <button className='button' handleClick={logout}>Logout</button> : <button className='button' handleClick={login}>Login</button>}
        </div>
        );
}

export default SignInButton;

