import React from "react";
import { Center, Box } from '@chakra-ui/react';
import './home.css';
import { UploadImage } from './UploadImage';

export default function Home(props) {
  const { user } = props;
  
  return (
    <Box
      bg='yellow.50'
      p={{ base: '1em', md: '2em' }}
    >
      <Center>
        <Box 
          className='homeCard'
          align='center'
          backgroundColor= '#FCD035'
          boxShadow='2px 5px 0 0 black'
          borderRadius='.5em'
          mt={{ base: '2em', md: '4em' }}
          mb={{ base: '2em', md: '0em' }}
          p={{ base: '1em', md: '2em' }}
          border='1px'
          w={{ base: '80vw', md: '65vh' }}
        >
          <UploadImage user={user} />
        </Box> 
      </Center>
    </Box>
  );
}
