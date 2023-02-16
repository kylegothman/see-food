import React from 'react';
import { useForm } from "react-hook-form";
import './registerCard.css'
import { Center, Box } from '@chakra-ui/react';
import NavButton from '../ui/button/Button';

export function RegisterCard() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = (data) => {
        console.log(JSON.stringify({data}));
        fetch('http://localhost:3000/register', {
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
        .then((actualData) => console.log(actualData))
        .catch((err) => {console.log(err.message);
        });
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
                        <h2>Sign Up</h2>
                    </Box>
                    <Box className="inputBox">
                        <input className="name__input" type="text" name="name" autoComplete="off" required {...register("name")}/>
                        <label className="name__label" htmlFor="name">name</label>
                    </Box>
                    <Box className="inputBox">
                        <input className="username__input" type="text" name="username" autoComplete="off" required {...register("username")}/>
                        <label className="username__label" htmlFor="username">username</label>
                    </Box>
                    <Box className="inputBox">
                        <input className="pw__input" type="password" name="password" autoComplete="off" required {...register("password")}/>
                        <label className="pw__label" htmlFor="password">password</label>
                    </Box>
                    <Box p={7}>
                    <NavButton type='submit' name='submit' />
                    </Box>
                </Box>
            </form>
        </Center>
    );
}