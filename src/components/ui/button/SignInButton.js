import React from "react";
import './button.css';

export function SignInButton({ onRouteChange, route }) {
    

    return (
        <div>
            { route === 'signin' 
            ? <button className='bbutton' onClick={() => onRouteChange('register')}>Sign Up</button>
            : <button className='bbutton' onClick={() => onRouteChange('signin')}>Login</button>
            }
        </div>
        );
}



