import React from 'react';
import './registerCard.css'
import { Center } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import NavButton from '../ui/button/Button';

export function RegisterCard() {
    return (
        <Center bg='yellow.50'>
        <Box minW='390px' minH='555px' bg='#FFFFF0' className='card'>
            <Box className="header">
                <h2>Sign Up</h2>
            </Box>
            <Box className="username">
                <input className="username__input" type="text" name="name" autoComplete="off" required />
                <label className="username__label" htmlFor="username">name</label>
            </Box>
            <Box className="pw">
                <input className="pw__input" type="text" name="name" autoComplete="off" required />
                <label className="pw__label" htmlFor="password">username</label>
            </Box>
            <Box className="pw">
                <input className="pw__input" type="text" name="name" autoComplete="off" required />
                <label className="pw__label" htmlFor="password">password</label>
            </Box>
            <Box m={10}>
            <NavButton name='submit' />
            </Box>
        </Box>
        </Center>
    )
}