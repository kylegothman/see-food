import React, { useState } from "react";
import { UploadIcon } from '../ui/uploadIcon/UploadIcon';
import { Garbage } from '../ui/garbage/Garbage';
import { Eye } from '../ui/eye/Eye';
import theme from '../../themes/components/button.tsx';
import './home.css';
import { Button, Box, Flex, ButtonGroup, Alert, AlertTitle, AlertDescription, } from '@chakra-ui/react';
import { CleanApiResponse } from './CleanApi'
import { ResultList } from './ResultList'
import { Camera } from "./Camera";
import { CameraIcon } from '../ui/camera/CameraIcon';
import { HappyBot } from '../ui/happyBot/HappyBot';
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
    const [imgBit, setImgBit] = useState(null);
    const [imgResults, setImgResults] = useState([]);
    const [alertMessage, setAlertMessage] = useState('');

    const handleButtonClick = () => {
        document.querySelector('input[type="file"]').click();
    };

    const handleNewUpload = () => {
        setSelectedImage(null);
        setImgBit(null);
        setRoute('upload');
        setAlertMessage('');
    };

    const handleSubmit = async () => {
        if (!imgBit) {
          return;
        }
        onSubmit(imgBit);
      };

    const capturePhoto = () =>  {
        setRoute('camera');
    }

    const onSubmit = async () => {
        if (!imgBit) {
          console.log('no image')
          return;
        }
        const IMAGE_BYTES_STRING = imgBit;
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          mode: 'cors',
          body: JSON.stringify({ image: { content: IMAGE_BYTES_STRING } })
        };
        try {
          console.log('requestOptions', requestOptions)
          const response = await fetch('https://shrouded-hollows-05651.herokuapp.com/image-bit', requestOptions);
          if (!response.ok) {
            setAlertMessage(`An HTTP error occurred: ${response.status}`);
          } else {
            const result = await response.text();
            console.log('result', result)
            const resultClean = await CleanApiResponse(result);
            setImgResults(resultClean)
            const hotDogScore = calculateHotDogScore(resultClean);
            if (hotDogScore !== null) {
              happyAI(hotDogScore);
            } else {
              normalAi();
            }
          }
        } catch (error) {
          console.log('error', error);
          setAlertMessage(`An error occurred: ${error}`);
        }
      };

      const calculateHotDogScore = (concepts) => {
        const hotDogConcept = concepts.slice(0, 8).find((concept) => concept.name === 'hot dog');
        if (!hotDogConcept) {
          return null;
        }
        let hotDogScore = hotDogConcept.value * 100;
        const goldenRatio = (1 + Math.sqrt(5)) / 2;
        hotDogScore *= goldenRatio;
        hotDogScore = Math.round(hotDogScore * 10) % 100 + 1;
        return hotDogScore;
      };
  
        

  const happyAI = (hotDogScore) => {
    const json = {
      id: `${user.id}`,
      points: hotDogScore.toString(),
    };
    setRoute('submitted');
    fetch('https://shrouded-hollows-05651.herokuapp.com/image-ranking', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(json),
    })
    .then((response) => CleanApiResponse(response.json()))
    .then((data) => {
      setAlertMessage(`Here's ${hotDogScore} points.`)
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
    fetch('https://shrouded-hollows-05651.herokuapp.com/image-ranking', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(json),
    })
    .then((response) => response.json())
    .catch((error) => {
      console.error('Error:', error);
    });
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
            setImgBit(dataUrl.slice(23));
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
                <Box maxW='1000px'>
                <Camera handleSubmit={handleSubmit} onSubmit={onSubmit} selectedImage={selectedImage} setSelectedImage={setSelectedImage} imgBitt={imgBit} setImgBitt={setImgBit} />
                </Box>
            )}
            {route === 'notSubmitted' && (
                <Box p={[1, 2, 5]} minW={['100%', 400]}>
                <Box maxW={300} border='1px solid black' borderRadius='.5em' className='imageBox' align='flex-start'>
                    <img
                    className='userImage'
                    alt="uploaded"
                    src={URL.createObjectURL(selectedImage)}
                    />
                </Box>
                <Box w='100%' position='relative' bottom={0} pt={[2, 3, 5]} justify='center' align='center'>
                    <ButtonGroup w='90%' verticalAlign='bottom' mt={3} gap={2}>
                    <Button
                        theme={theme}
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
                        theme={theme}
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
                <Box className='subContainer' minW={400} p={5} position='relative'>
                    <Box maxW={400} border='1px solid black' borderRadius='.5em' className='imageBox' align='flex-start' position='relative'>
                        <img
                        className='userImage'
                        alt="uploaded"
                        src={URL.createObjectURL(selectedImage)}
                        />
                    </Box>
                    {alertMessage && (
                        <Alert 
                        justifyContent='center'
                        textAlign={'left'}
                        mt={5} 
                        mb={2} 
                        border='1px' 
                        borderRadius=".5em" 
                        backgroundColor={'#FFFFF0'}
                        >
                        <Box position={'absolute'} left={5} bottom={3} >
                            <HappyBot/>
                        </Box>
                        <Box ml={4}>
                            <AlertTitle >Ooh la la! What a HOT dog!!</AlertTitle>
                            <AlertDescription maxWidth='sm'>{alertMessage}</AlertDescription>
                        </Box>
                        </Alert>
                    )}
                    <TableContainer pt={10} mb={10}>
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
                    <Box position='absolute' bottom={0} pt={5} justify='center' align='center' w='100%'>
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
                    theme={theme}
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