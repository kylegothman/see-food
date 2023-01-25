import React from 'react';
import './signInCard.css'
import { Center } from '@chakra-ui/react';
import { EmailForm } from '../ui/emailForm/EmailForm'

export function SignInCard() {
    return (
        <Center bg='yellow.50'>
        <div className='card'>
            <div  className="header">
                <h2>Get Started</h2>
            </div>
            <div className="email">
                <input className="email__input" type="text" name="name" autoComplete="off" required />
                <label className="email__label" htmlFor="email">email</label>
            </div>
            <div className="pw">
                <input className="pw__input" type="text" name="name" autoComplete="off" required />
                <label className="pw__label" htmlFor="email">password</label>
            </div>
        </div>
        </Center>
    )
}