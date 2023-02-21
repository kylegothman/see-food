import React from 'react';
import { useForm } from "react-hook-form";
import '../registerCard/registerCard.css';
import { Center, Box, Button } from '@chakra-ui/react';
import theme from '../../themes/components/button.tsx';


export default function Login({ onRouteChange, loadUser }) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = (data) => {
        console.log(JSON.stringify({data}));
        fetch('http://localhost:3000/signin', {
            method:'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({data})
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error(
                `This is an HTTP error: The status is ${response.status}`
                );
            } else {
                return response;
            }
        })
        .then((data) => {
            if (data) {
              loadUser(data);
              onRouteChange('home');
              console.log('route changed to home')
            }
        })
        .then((actualData) => console.log(actualData))
        .catch((err) => {console.log(err.message)})
    }

    return (
        <Center bg='yellow.50'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box className='card'
                    _hover={{ 
                        transform: 'translateY(-4px) translateX(-2px)',
                        backgroundColor: '#FCD035',
                        shadow: '2px 5px 0 0 black' }}>
                    <Box className="header">
                        <h2>Log In</h2>
                    </Box>
                    <Box className="inputBox">
                        <input className="username__input" type="text" name="username" autoComplete="off" required  {...register("username", {maxLength: 20 })}/>
                        <label className="username__label" htmlFor="username">username</label>
                    </Box>
                    <Box className="inputBox">
                        <input className="pw__input" type="password" name="password" autoComplete="off" required {...register("password")}/>
                        <label className="pw__label" htmlFor="password">password</label>
                    </Box>
                    <Button 
                        theme={theme}
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