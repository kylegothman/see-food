import React, { useState } from "react";
import './home.css';
import { Box, Flex } from '@chakra-ui/react';
import { CleanApiResponse } from './CleanApi'
import CameraApp from "./routes/Camera";
import Submitted from './routes/Submitted';
import Upload from './routes/Upload';
import NotSubmitted from './routes/NotSubmitted';


export default function UploadImage({ user }) {
    const [selectedImage, setSelectedImage] = useState(null);
    const [route, setRoute] = useState('upload');
    const [imgBit, setImgBit] = useState(null);
    const [imgResults, setImgResults] = useState([]);
    const [alertMessage, setAlertMessage] = useState('');


    const onSubmit = async () => {
        if (!imgBit) {
          console.log('no image')
          return;
        }
        const IMAGE_BYTES_STRING = imgBit.slice(23);
        console.log('IMAGE_BYTES_STRING', IMAGE_BYTES_STRING)
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

    return (
        <Flex
        h='100%'
        direction='column'
        alignItems='center'
        justifyContent='center'
        >
            {route === 'camera' && (
            <Box maxW='100%'>
                <CameraApp 
                onSubmit={onSubmit} 
                selectedImage={selectedImage} 
                setSelectedImage={setSelectedImage} 
                imgBit={imgBit} 
                setImgBit={setImgBit} />
            </Box>
            )}

            {route === 'notSubmitted' && <NotSubmitted
            onSubmit={onSubmit}
            selectedImage={selectedImage}
            imgBit={imgBit}
            setRoute={setRoute}
            />}

            {route === 'submitted' && (<Submitted 
            imgResults={imgResults} 
            alertMessage={alertMessage} 
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
            setAlertMessage={setAlertMessage}
            setImgBit={setImgBit}
            setRoute={setRoute}
            imgBit={imgBit}   
            />)}
                                  
            {route === 'upload' && (<Upload 
            setRoute={setRoute} 
            setImgBit={setImgBit}
            imgBit={imgBit} 
            setSelectedImage={setSelectedImage}
            />)}
        </Flex>
    );
}