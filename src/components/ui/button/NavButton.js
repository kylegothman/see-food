import React from "react";
import './button.css';
import {
    ButtonGroup,
    Button,
} from '@chakra-ui/react';
import theme from '../../../themes/components/button.tsx';


export default function NavButton({ onRouteChange, route }) {
    console.log(route)
    return (
        <ButtonGroup>
            <Button className='bbutton' theme={theme} _hover={{ backgroundColor: '#F65223' }} onClick={() => onRouteChange('signout')}>Sign Out</Button>
            <>
            { route === 'profile' 
            ? <Button className='bbutton' theme={theme} onClick={() => onRouteChange('home')}>Home</Button> 
            : <Button className='bbutton' theme={theme} onClick={() => onRouteChange('profile')}>Profile</Button> 
            }
            </>
        </ButtonGroup>  
    )
}