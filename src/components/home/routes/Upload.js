import React from 'react';
import { useMediaQuery } from '@chakra-ui/react';
import { Box, Flex, Button, ButtonGroup } from '@chakra-ui/react';
import { CameraIcon } from '../../ui/camera/CameraIcon';
import { UploadIcon } from '../../ui/uploadIcon/UploadIcon';
import theme from '../../../themes/components/button.tsx';



export default function Upload({setSelectedImage, setImgBit, setRoute}) {
    const [isMobile] = useMediaQuery("(max-width: 600px)");



    const capturePhoto = () =>  {
        console.log("click");
        setRoute('camera');
    }

    const handleButtonClick = () => {
        console.log("click");
        document.querySelector('input[type="file"]').click();
    };

    const handleFileInputChange = (event) => {
        const file = event.target.files[0];
        if (!(file instanceof Blob)) {
            console.error('Selected file is not a Blob object');
            return;
        }
    
        if (file.type !== "image/jpeg") {
            alert('Please select a .jpg file')
            return;
        } else { 
            const reader = new FileReader();
            reader.onloadend = () => {
                const dataUrl = reader.result;
                setImgBit(dataUrl);
                console.log('dataUrl', dataUrl)
            };
            reader.readAsDataURL(file);
            setRoute('notSubmitted');
            setSelectedImage(file);
        }
        };

    return (
        <Flex boxSize="md"
        minW="400px"
        minH="400px"
        alignItems="center"
        justifyContent="center"
        direction="column"
        p={5}>
        <Box pt={25} pb={5} textAlign='center'>
            <h1>Upload an image to the AI</h1>
        </Box>
        <Box position="relative" bottom={0} top={20}>
            <ButtonGroup   
                verticalAlign="bottom"
                gap={2}
                flexDir={isMobile ? "column" : "row"}>
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
                        _hover={{ backgroundColor: '#40C7CA', color: '#FFFFF0' }}
                        leftIcon={<UploadIcon />}
                        onClick={handleButtonClick}
                    >
                        Upload Image
                    </Button>
        </ButtonGroup>
        </Box>
        </Flex>
        );
}