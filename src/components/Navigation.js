import React from 'react';
import { SeeFoodLogo } from './logo/Logo';
import '../App.css';
import NavButton from './ui/button/Button';

import {
    Box,
    ButtonGroup,
    Flex,
    Spacer
  } from '@chakra-ui/react';


function Navbar() {
    return (
        <Box bg='orange.50'>
          <Flex minWidth='max-content' alignItems='center' gap='2'>
            <Box p='10'>
                <a href='/'>
                    <SeeFoodLogo />
                </a>
            </Box>
            <Spacer />
            <ButtonGroup p='10' gap='2'>
              <NavButton name='Sign Up'></NavButton>
              <NavButton name='Log In'></NavButton>
            </ButtonGroup>
          </Flex>
        </Box>
    )    
}
export default Navbar;

