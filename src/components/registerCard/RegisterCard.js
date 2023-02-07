import React from 'react';
import { useForm } from "react-hook-form";
import './registerCard.css'
import { Center } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import NavButton from '../ui/button/Button';

export function RegisterCard() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Center bg='yellow.50'>
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
                        <input className="pw__input" type="text" name="pw" autoComplete="off" required {...register("pw")}/>
                        <label className="pw__label" htmlFor="password">password</label>
                    </Box>
                    <Box p={7}>
                    <NavButton type='submit' name='submit' />
                    </Box>
                </Box>
                
            </Center>
        </form>
    );
}