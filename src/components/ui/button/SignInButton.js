import React from "react";
import { Button } from "@chakra-ui/react";
import './button.css';
import theme from '../../../themes/components/button.tsx';

export function SignInButton({ onRouteChange, route }) {
    

    return (
        <div>
            { route === 'signin' 
            ? <Button theme={theme} onClick={() => onRouteChange('register')}>Sign Up</Button>
            : <Button theme={theme} onClick={() => onRouteChange('signin')}>Login</Button>
            }
        </div>
        );
}



