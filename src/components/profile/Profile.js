import React from 'react';
import { Flex, Box, Button } from '@chakra-ui/react';
import theme from '../../themes/components/button.tsx';

export function Profile() {

    return (
        <>
            <Flex boxSize='md' minW='400px' minH='400px' alignItems='center' justifyContent='center' direction='column' p={5}>
                <Box pt={25} pb={5} textAlign='center'>
                <h1>Profile</h1>
                </Box>
                <Box position='relative' bottom={0} top={20}>
                <input
                    type="file"
                    style={{ outline: "none", display: "none" }}
                    onChange={handleFileInputChange}
                />
                <Button
                    theme={theme}
                    w='175px'
                    textAlign='center'
                    _hover={{ backgroundColor: '#40C7CA', color: '#FFFFF0' }}
                    leftIcon={<UploadIcon />}
                    onClick={handleButtonClick}
                >
                    Upload Image
                </Button>
                </Box>
            </Flex>
        </>
    )
}