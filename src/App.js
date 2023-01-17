import React from 'react';
import './App.css';
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Spacer
} from '@chakra-ui/react';


function App() {
  return (
    <div className="">
      <Flex minWidth='max-content' alignItems='center' gap='2'>
        <Box p='10'>
          <Heading size='md'>SeeFood</Heading>
        </Box>
        <Spacer />
        <ButtonGroup p='10' gap='2'>
          <Button colorScheme='teal' variant='outline' _hover={{background: 'teal', color:'white'}}>Sign Up</Button>
          <Button colorScheme='teal' variant='outline' _hover={{background: 'teal', color:'white'}}>Log in</Button>
        </ButtonGroup>
      </Flex>
    </div>
  );
}

export default App;
