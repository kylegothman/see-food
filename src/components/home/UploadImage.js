import React, { useState } from "react";
import {UploadIcon} from '../ui/uploadIcon/UploadIcon.js';
import {Garbage} from '../ui/garbage/Garbage.js';
import {Eye} from '../ui/eye/Eye.js';
import theme from '../../themes/components/button.tsx';
import './home.css';
import { Button, Box, Flex, ButtonGroup } from '@chakra-ui/react';


export function UploadImage() {
    const [selectedImage, setSelectedImage] = useState(null);
    const handleButtonClick = () => {
        document.querySelector('input[type="file"]').click();
    };

    return (
        <Flex h='100%' direction='column' alignContent='center' align={'center'} justify='center'>
            {selectedImage && (
                <Box boxSize='xs' p={5}>
                    <Box maxW='80%' className='imageBox' align='center'>
                        <img
                            className='userImage'
                            alt="uploaded" 
                            src={URL.createObjectURL(selectedImage)} 
                        />
                    </Box>
                    <Box position='relative' bottom={0} pt={5} justify='center' align='center' >
                        <ButtonGroup verticalAlign='bottom' gap={2}>
                                <Button 
                                    leftIcon={<Garbage />}
                                    _hover={{ backgroundColor: '#F65223'}}
                                    onClick={()=>setSelectedImage(null)}>
                                        Remove
                                </Button>
                                <Button 
                                    leftIcon={<Eye/>} 
                                    type='submit' 
                                    name='submit'>
                                        Submit
                                </Button>
                        </ButtonGroup>
                    </Box>
                </Box>
            )}
      
            {!selectedImage && (
                <Flex display='flex' w='100%' h='300px' alignItems='center' justifyContent='center' direction='column' p={5}>
                    <Box pt={25} pb={5} textAlign='center'>
                        <h1>Upload an image to the AI</h1>
                    </Box>
                    <Box position='relative' bottom={0} top={20}>
                        <input
                            type="file" 
                            style={{outline: "none", display: "none" }} 
                            onChange={(event) => {
                                    console.log(event.target.files[0]);
                                    setSelectedImage(event.target.files[0]) 
                            }}
                        />
                        <Button
                            theme={theme}
                            w='175px'
                            textAlign='center'
                            _hover={{ backgroundColor: '#40C7CA', color: '#FFFFF0'}}
                            leftIcon={<UploadIcon />} 
                            onClick={handleButtonClick}
                        >Upload Image
                        </Button>
                    </Box>
                </Flex>
            )}
        </Flex>
    )
}