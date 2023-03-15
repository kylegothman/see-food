import React from 'react';
import { 
    Box, 
    Alert, 
    AlertTitle, 
    AlertDescription, 
    TableContainer, 
    Table, 
    Thead,
    Th,
    TableCaption, 
    Button, 
    ButtonGroup,
    Tr
} from "@chakra-ui/react";
import { HappyBot } from "../../ui/happyBot/HappyBot";
import { UploadIcon } from "../../ui/uploadIcon/UploadIcon";
import { ResultList } from "../ResultList";
import theme from '../../../themes/components/button.tsx';



export default function Submitted({ alertMessage, setAlertMessage, imgResults, imgBit, setImgBit, setSelectedImage, setRoute }) {

    const handleNewUpload = () => {
        setSelectedImage(null);
        setImgBit(null);
        setRoute('upload');
        setAlertMessage('');
    }
    
        
    return (
        <Box className='subContainer' minW={400} p={5} position='relative'>
                <Box 
                maxW={400} 
                border='1px solid black' 
                borderRadius='.5em' 
                className='imageBox' 
                align='flex-start' 
                position='relative'>
                    <img
                    className='userImage'
                    alt="uploaded"
                    src={imgBit}
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
    )
}