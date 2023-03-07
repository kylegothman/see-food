import React, { useState } from "react";
import { UploadIcon } from '../ui/uploadIcon/UploadIcon.js';
import { Garbage } from '../ui/garbage/Garbage.js';
import { Eye } from '../ui/eye/Eye.js';
import theme from '../../themes/components/button.tsx';
import './home.css';
import { Button, Box, Flex, ButtonGroup } from '@chakra-ui/react';
import { CleanApiResponse } from './CleanApi'
import { ResultList } from './ResultList'
import { Camera } from "./Camera";
import { CameraIcon } from '../ui/camera/CameraIcon.js';
import {
    Table,
    Thead,
    Tr,
    Th,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'


  export function UploadImage({ user }) {
    const [selectedImage, setSelectedImage] = useState(null);
    const [route, setRoute] = useState('upload')
    const [imgBitt, setImgBitt] = useState(null);
    const [imgResults, setImgResults] = useState([]);

    const handleButtonClick = () => {
        document.querySelector('input[type="file"]').click();
    };

    const handleNewUpload = () => {
        setSelectedImage(null);
        setImgBitt(null);
        setRoute('upload');
    };

    const handleSubmit = async () => {
        if (!imgBitt) {
          console.log("No image to submit");
          return;
        }
        console.log('submitting', imgBitt);
        onSubmit(imgBitt);
      };

    const capturePhoto = () =>  {
        setRoute('camera');
    }

    const onSubmit = async () => {
        const PAT = '';
        const USER_ID = '';   
        const APP_ID = 'SeeFood';
        const IMAGE_BYTES_STRING = imgBitt.slice(23);

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

        const happyAI = (result) => {
            let start = result.lastIndexOf('hot dog');
            let hotDogScore = (result.slice(start + 17, start + 20) * 10);
            const json = {
                id: `${user.id}`,
                points: hotDogScore.toString(),
            };
            setRoute('submitted');
            fetch('http://localhost:3000/image-ranking', {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(json),
            })
              .then((response) => response.json())
              .then((data) => {
                console.log('Success:', data);
              })
              .catch((error) => {
                console.error('Error:', error);
              });
          };

          const normalAi = () => {
            const json = {
                id: `${user.id}`,
                points: "1",
            };
            setRoute('submitted');
            fetch('http://localhost:3000/image-ranking', {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(json),
            })
              .then((response) => response.json())
              .then((data) => {
                console.log('Success:', data);
              })
              .catch((error) => {
                console.error('Error:', error);
              });
          };


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
            setImgResults(resultClean)
            result.includes('hot dog') ? happyAI(result) : normalAi()
        } catch (error) {
            console.log('error', error);
        }
    };

    const handleFileInputChange = (event) => {
        const file = event.target.files[0];
        console.log(file);
        if (file.type !== "image/jpeg") {
            alert('Please select a .jpg file')
            return;
        }   else { 
            const reader = new FileReader();
            reader.onloadend = () => {
                const dataUrl = reader.result;
                setImgBitt(dataUrl);
            };
            reader.readAsDataURL(file);
            setSelectedImage(file)
            setRoute('notSubmitted')
        }
    };

    return (
        <Flex
            h='100%'
            direction='column'
            alignItems='center'
            justifyContent='center'
        >
            {route === 'camera' && (
                <Box maxW='1000px' >
                <Camera handleSubmit={handleSubmit} onSubmit={onSubmit} selectedImage={selectedImage} setSelectedImage={setSelectedImage} imgBitt={imgBitt} setImgBitt={setImgBitt} />
                </Box>
            )}
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
                                    setImgBitt(null);
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
                                Upload New Image
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

            <ButtonGroup verticalAlign='bottom' gap={2}>
                <Button
                    leftIcon={<CameraIcon />}
                    _hover={{ backgroundColor: '#F65223' }}
                    onClick={capturePhoto}
                >
                    Camera
                </Button>
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
            </ButtonGroup>
            </Box>
        </Flex>
        )}
    </Flex>
    );
}