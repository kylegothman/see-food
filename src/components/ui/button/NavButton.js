import React from "react";
import './button.css';
import {
    ButtonGroup,
} from '@chakra-ui/react';

export default function NavButton({ onRouteChange, route }) {
    console.log(route)
    return (
        <ButtonGroup>
            <button className='bbutton' onClick={() => onRouteChange('signout')}>Sign Out</button>
            <>
            { route === 'profile' 
            ? <button className='bbutton' onClick={() => onRouteChange('home')}>Home</button> 
            : <button className='bbutton' onClick={() => onRouteChange('profile')}>Profile</button> 
            }
            </>
        </ButtonGroup>  
    )
}