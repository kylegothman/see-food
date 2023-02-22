import React from 'react';
import { SeeFoodLogo } from './logo/Logo';
import '../App.css';
import NavButton from './ui/button/NavButton';
import { SignInButton } from './ui/button/SignInButton';

import {
    Box,
    ButtonGroup,
    Flex,
    Spacer
  } from '@chakra-ui/react';


function Navbar({ onRouteChange, isSignedIn, route }) {
    return (
        <Box pt='1' bg='yellow.50'>
          <Flex minWidth='max-content' alignItems='center' gap='2'>
            <Box>
                <a href='/'>
                    <SeeFoodLogo />
                </a>
            </Box>
            <Spacer />
            <ButtonGroup pr='5' gap='2'>
            { route === 'home' 
             ? <NavButton onRouteChange={onRouteChange} isSignedIn={isSignedIn}/>
             : <SignInButton route={route} onRouteChange={onRouteChange} isSignedIn={isSignedIn}/>
             }
            </ButtonGroup>
          </Flex>
        </Box>
    )    
}
export default Navbar;

