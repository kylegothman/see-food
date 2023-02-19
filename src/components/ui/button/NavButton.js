import React from "react";
import './button.css';
import {
    ButtonGroup,
} from '@chakra-ui/react';

export default function NavButton({ onRouteChange }) {
    return (
            <ButtonGroup>
                <button className='bbutton' onClick={() => onRouteChange('register')}>Sign Out</button> 
                <button className='bbutton' onClick={() => onRouteChange('profile')}>Profile</button>
            </ButtonGroup>
        
    )
}

