import React, { useState } from "react";
import { UploadIcon } from '../ui/uploadIcon/UploadIcon.js';
import { Garbage } from '../ui/garbage/Garbage.js';
import { Eye } from '../ui/eye/Eye.js';
import theme from '../../themes/components/button.tsx';
import './home.css';
import { Button, Box, Flex, ButtonGroup } from '@chakra-ui/react';
import { CleanApiResponse } from './CleanApi'
import { ResultList } from './ResultList'
import {
    Table,
    Thead,
    Tr,
    Th,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'





export function UploadImage() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [route, setRoute] = useState('upload')
    const [imgBit, setImgBit] = useState(null);
    const [imgResults, setImgResults] = useState([]);

    const handleButtonClick = () => {
        document.querySelector('input[type="file"]').click();
    };

    const handleNewUpload = () => {
        setSelectedImage(null);
        setImgBit(null);
        setRoute('upload');
    };

    const onSubmit = async () => {
        const PAT = 'c2e851ddbb4446bda9fc93146215a0a8';
        const USER_ID = 'k-goth';   
        const APP_ID = 'SeeFood';
        const IMAGE_BYTES_STRING = imgBit.slice(23);

        const raw = JSON.stringify({
            "user_app_id": {
                "user_id": USER_ID,
                "app_id": APP_ID
            },
            "inputs": [
                {
                    "data": {
                        "image": {
                            "base64": IMAGE_BYTES_STRING
                        }
                    }
                }
            ]
        }); 

        const happyAI = () => {
            setRoute('submitted');
            console.log('Happy AI');
        }

        const normalAi = () => {
            setRoute('submitted');
            console.log('The ai is feeling normal');
        }

        const requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Authorization': `Key ${PAT}`  
            },
            body: raw
        };
        
        try {
            const response = await fetch(`https://api.clarifai.com/v2/models/food-item-recognition/versions/1d5fd481e0cf4826aa72ec3ff049e044/outputs`, requestOptions);
            const result = await response.text();
            const resultClean = CleanApiResponse(result) 
            console.log(resultClean)
            setImgResults(resultClean)
            console.log(imgResults)
            result.includes('hot dog') ? happyAI() : normalAi()
        } catch (error) {
            console.log('error', error);
        }
    };

    const handleFileInputChange = (event) => {
        const file = event.target.files[0];
        if (file.type !== "image/jpeg") {
            alert('Please select a .jpg file')
            return;
        }   else { 
            const reader = new FileReader();
            reader.onloadend = () => {
                const dataUrl = reader.result;
                setImgBit(dataUrl);
            };
            reader.readAsDataURL(file);
            setSelectedImage(file);
            setRoute('notSubmitted');
        }
    };

    return (
        <Flex
            h='100%'
            direction='column'
            alignItems='center'
            justifyContent='center'
        >
            {route === 'notSubmitted' && (
                <Box minW={400} p={5}>
                    <Box maxW={300} border='1px solid black' borderRadius='.5em' className='imageBox' align='flex-start'>
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
                                _hover={{ backgroundColor: '#F65223' }}
                                onClick={() => {
                                    setSelectedImage(null);
                                    setImgBit(null);
                                    setRoute('upload')
                                }}
                            >
                                Remove
                            </Button>
                            <Button
                                onClick={onSubmit}
                                leftIcon={<Eye />}
                                type='submit'
                                name='submit'
                            >
                                Submit
                            </Button>
                        </ButtonGroup>
                    </Box>
                </Box>
            )}

            {route === 'submitted' && (
                <Box minW={400} p={5}>
                    <Box maxW={400} border='1px solid black' borderRadius='.5em' className='imageBox' align='flex-start'>
                        <img
                            className='userImage'
                            alt="uploaded"
                            src={URL.createObjectURL(selectedImage)}
                        />
                    </Box>
                    <TableContainer pt={10}>
                        <Table variant='simple' size='sm'>
                            <TableCaption></TableCaption>
                            <Thead>
                            <Tr>
                                <Th>Prediction</Th>
                                <Th isNumeric>Certainty</Th>
                            </Tr>
                            </Thead>
                            <>
                            <ResultList imgResults={imgResults}/>
                            </>
                        </Table>
                        </TableContainer>
                    <Box position='relative' bottom={0} pt={5} justify='center' align='center' >
                        <ButtonGroup align='center' verticalAlign='bottom' gap={2}>
                            <Button
                                theme={theme}
                                w={225}
                                textAlign='center'
                                _hover={{ backgroundColor: '#40C7CA', color: '#FFFFF0' }}
                                leftIcon={<UploadIcon />}
                                onClick={handleNewUpload}
                            >
                                Delete Profile
                            </Button>
                        </ButtonGroup>
                    </Box>
                </Box>
            )}
                                  
        {route === 'upload' && (
        <Flex boxSize='md' minW='400px' minH='400px' alignItems='center' justifyContent='center' direction='column' p={5}>
            <Box pt={25} pb={5} textAlign='center'>
            <h1>Upload an image to the AI</h1>
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
        )}
    </Flex>
    );
}