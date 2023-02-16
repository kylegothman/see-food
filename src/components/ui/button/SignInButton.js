import React, { useState } from "react";
import './button.css';

const SignInButton = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const login = () => setIsLoggedIn(true);
    const logout = () => setIsLoggedIn(false);

    return (
        <div>
            {isLoggedIn ? <button className='bbutton' onClick={logout}>Logout</button> : <button className='bbutton' onClick={login}>Login</button>}
        </div>
        );
}

export default SignInButton;

