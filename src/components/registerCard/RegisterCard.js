import React from 'react';
import './registerCard.css'
import { Center } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import NavButton from '../ui/button/Button';

export function RegisterCard() {
    return (
        <Center bg='yellow.50'>
        <Box className='card'
                       _hover={{ 
                        transform: 'translateY(-4px) translateX(-2px)',
                        backgroundColor: '#FCD035',
                        shadow: '2px 5px 0 0 black' }}>
            <Box className="header">
                <h2>Sign Up</h2>
            </Box>
            <Box className="name">
                <input className="name__input" type="text" name="name" autoComplete="off" required />
                <label className="name__label" htmlFor="name">name</label>
            </Box>
            <Box className="pw">
                <input className="pw__input" type="text" name="name" autoComplete="off" required />
                <label className="pw__label" htmlFor="password">username</label>
            </Box>
            <Box className="pw">
                <input className="pw__input" type="text" name="name" autoComplete="off" required />
                <label className="pw__label" htmlFor="password">password</label>
            </Box>
            <Box p={8}>
            <NavButton name='submit' />
            </Box>
        </Box>
        </Center>
    )
}