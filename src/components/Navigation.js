import React from 'react';
import { Logo } from './Logo';
import '../App.css';

import {
    Box,
    Button,
    ButtonGroup,
    Flex,
    Spacer
  } from '@chakra-ui/react';


function Navbar() {
    return (
        <div className="">
          <Flex minWidth='max-content' alignItems='center' gap='2'>
            <Box p='10'>
                <a href='/'>
                    <Logo />
                </a>
            </Box>
            <Spacer />
            <ButtonGroup p='10' gap='2'>
              <Button colorScheme='teal' variant='outline' _hover={{background: 'teal', color:'white'}}>Sign Up</Button>
              <Button colorScheme='teal' variant='outline' _hover={{background: 'teal', color:'white'}}>Log in</Button>
            </ButtonGroup>
          </Flex>
        </div>
    )    
}
export default Navbar;