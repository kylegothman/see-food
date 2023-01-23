import React from 'react';
import './signInCard.css'
import { Center } from '@chakra-ui/react';
import { EmailForm } from '../ui/emailForm/EmailForm'

export function SignInCard() {
    return (
        <Center bg='yellow.50'>
        <div className='card'>
            <div  className="gs">
                <h2>Get Started</h2>
            </div>
            <div className="inputGroup">
                <input className="emailInput" type="text" name="name" autoComplete="off" required />
                <label className="emailLabel" htmlFor="email">email</label>
            </div>
        </div>
        </Center>
    )
}