import React, { useState } from "react";
import {UploadIcon} from '../ui/uploadIcon/UploadIcon.js';
import {Garbage} from '../ui/garbage/Garbage.js';
import theme from '../../themes/components/button.tsx';
import './home.css';
import { Button, Box, Flex, ButtonGroup } from '@chakra-ui/react';

export function UploadImage() {
    const [selectedImage, setSelectedImage] = useState(null);
    const handleButtonClick = () => {
        document.querySelector('input[type="file"]').click();
    };

    return (
        <>
            <h1>Upload an image to the AI</h1>
            {selectedImage && (
                <Box p={5}>
                    <Flex align="center" justify="center">
                        <img alt="uploaded" width={"250px"} src={URL.createObjectURL(selectedImage)} />
                    </Flex>
                    <br />
                    <Flex justify='center' align='center' >
                    <ButtonGroup gap='2'>
                        <Button p='1em 2em' theme={theme}                 
                                leftIcon={<Garbage />} 
                                onClick={()=>setSelectedImage(null)}>Remove</Button>
                        <Button p='1em 2em' theme={theme} type='submit' name='submit'>Submit</Button>
                    </ButtonGroup>
                    </Flex>
                </Box>
            )}
            <br />
      
            {!selectedImage && (
                <Box p={5}>
                    <input type="file" style={{outline: "none", display: "none" }} 
                            onChange={(event) => {
                                    console.log(event.target.files[0]);
                                    setSelectedImage(event.target.files[0]) 
                                }}
                    />
                    <Button backgroundColor='#FFFFF0' 
                            border='1px'
                            _hover={{ backgroundColor: '#40C7CA', color: '#FFFFF0'}}
                            borderColor='rgb(100, 100, 100)' 
                            borderRadius="10em" 
                            leftIcon={<UploadIcon />} 
                            variant='outline' 
                            onClick={handleButtonClick}>
                        Upload Image
                    </Button>
                </Box>
            )}
        </>  
    )
}