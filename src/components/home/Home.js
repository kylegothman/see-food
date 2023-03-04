import React from "react";
import { Center, Box } from '@chakra-ui/react';
import './home.css';
import {UploadImage} from './UploadImage';



export default function Home(setImgBit) {

    return (
        <Center bg='yellow.50'>
           <Box 
                className='homeCard'
                align='center'
                backgroundColor= '#FCD035'
                boxShadow='2px 5px 0 0 black'
                borderRadius='.5em'
                mt='4em' 
                p='1em 1em 1em 1em'
                border='1px'
            >
            <UploadImage setImgBit={setImgBit}/>
            </Box> 
        </Center>
    );
}