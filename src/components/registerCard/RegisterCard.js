import React from 'react';
import './registerCard.css'
import { Center } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import NavButton from '../ui/button/Button';

export function RegisterCard() {
    return (
        <Center bg='yellow.50'>
        <Box className='card'>
            <Box className="header">
                <h2>Get Started</h2>
            </Box>
            <Box className="username">
                <input className="username__input" type="text" name="name" autoComplete="off" required />
                <label className="username__label" htmlFor="username">username</label>
            </Box>
            <Box className="pw">
                <input className="pw__input" type="text" name="name" autoComplete="off" required />
                <label className="pw__label" htmlFor="password">password</label>
            </Box>
            <Box m={8}>
            <NavButton name='register' />
            </Box>
        </Box>
        </Center>
    )
}