import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import '../registerCard/registerCard.css';
import { Center, Box, Button, Alert, AlertIcon, AlertDescription, } from '@chakra-ui/react';
import theme from '../../themes/components/button.tsx';
import './login.css'
import LogoEyes from './LogoEyes';

export default function Login({ onRouteChange, loadUser }) {
    const { register, handleSubmit, } = useForm();
    const [alertMessage, setAlertMessage] = useState('');

    const onSubmit = async (data) => {
        try {
            const response = await fetch('http://localhost:3000/signin', {
                method:'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({data})
            });
            if (!response.ok) {
                response.status === 401? setAlertMessage("Username & password was incorrect. Please try again.") : setAlertMessage(`An HTTP error occurred: ${response.status}`);
            } else {
                const actualData = await response.json();
                loadUser(actualData);
                console.log(actualData);
                onRouteChange('home');
                console.log('route changed to home');
            }
        } catch (error) {
            setAlertMessage(`An error occurred: ${error.message}`);
        }
    }

    const handleInput = () => {
        setAlertMessage('');
    }

    return (
        <Center bg='yellow.50'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box 
                    className='loginCard' 
                    maxWidth={400} p={12}
                    _hover={{ 
                        transform: 'translateY(-4px) translateX(-2px)',
                        backgroundColor: '#FCD035',
                        shadow: '2px 5px 0 0 black' }}>
                        <LogoEyes/>
                        <Box pt={1} className="header">
                            <h2>Log In</h2>
                        </Box>
                        {alertMessage && <Alert mb={10} border='1px' borderRadius=".5em" status='error'>
                                        <AlertIcon/>
                                        <AlertDescription>{alertMessage}</AlertDescription>
                                        </Alert>}
                        <Box className="inputBox">
                            <input className="username__input" type="text" name="username" autoComplete="off" required {...register("username", {maxLength: 20 })} onChange={handleInput}/>
                            <label className="username__label" htmlFor="username">username</label>
                        </Box>
                        <Box className="inputBox">
                            <input className="pw__input" type="password" name="password" autoComplete="off" required {...register("password")} onChange={handleInput}/>
                            <label className="pw__label" htmlFor="password">password</label>
                        </Box>
                        <Button 
                        theme={theme}
                        mt={15}
                        w='175px'
                        type='submit' 
                        name='submit'>
                            Submit
                        </Button>
                </Box>
            </form>
        </Center>
    );
}