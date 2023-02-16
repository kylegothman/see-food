import React from "react";
import { Center, Box } from '@chakra-ui/react';
import './home.css';
import {UploadImage} from './UploadImage.js';

export default function Home() {

    return (
        <Center bg='yellow.50'>
           <Box 
                className='homeCard'
                boxSize='sm' 
                h='25em'
                align='center'
                backgroundColor= '#FCD035'
                boxShadow='2px 5px 0 0 black'
                borderRadius='.5em'
                mt='4em' 
                p='1em 1em 3em 1em'
                border='1px'
            >
            <UploadImage/>
            </Box> 
        </Center>
    );
}