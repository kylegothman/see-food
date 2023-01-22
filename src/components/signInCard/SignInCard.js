import React from 'react';
import './signInCard.css'
import { Center } from '@chakra-ui/react';
import { EmailForm } from '../ui/emailForm/EmailForm'

export function SignInCard() {
    return (
        <Center bg='yellow.50'>
        <div className='card'>
            <EmailForm />
        </div>
        </Center>
    )
}