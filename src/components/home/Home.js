import React from "react";
import { Center, Box } from '@chakra-ui/react';
import './home.css';
import {UploadImage} from './UploadImage.js';

export default function Home() {

    return (
        <Center bg='yellow.50'>
           <Box className='card' 
                _hover={{ 
                        transform: 'translateY(-4px) translateX(-2px)',
                        backgroundColor: '#FCD035',
                        shadow: '2px 5px 0 0 black' }}>
                <Box boxSize='sm' p={20}>
                    <UploadImage/>
                </Box>   
            </Box> 
        </Center>
    );
}