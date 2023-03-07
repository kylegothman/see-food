import React from 'react';
import { Center, Box } from '@chakra-ui/react';
import {
    Table,
    Tr,
    Td,
    TableContainer,
  } from '@chakra-ui/react';

export default function Profile({user}) {
    console.log(user.id)
    return (
        <Center bg='yellow.50'>
        <Box 
            className='homeCard'
            align='center'
            backgroundColor= '#FCD035'
            boxShadow='2px 5px 0 0 black'
            borderRadius='.5em'
            mt='4em' 
            p='2em 1em 1em 1em'
            border='1px'
            minW={390}
            minH={300}
         >
                <h1 paddingTop={10} >Profile</h1>
                <TableContainer pt={10}>
                    <Table variant='simple' size='sm'>
                        <Tr>
                            <Td>Name:</Td>
                            <Td>{user.name}</Td>
                        </Tr>
                        <Tr>
                            <Td>Username:</Td>
                            <Td>{user.username}</Td>
                        </Tr>
                        <Tr>
                            <Td>Score:</Td>
                            <Td>{user.score}</Td>
                        </Tr>
                        <Tr>
                            <Td>Joined:</Td>
                            <Td>{user.joined.slice(0, 10)}</Td>
                        </Tr>
                    </Table>
                </TableContainer>
        </Box>
        </Center>
    )
}
