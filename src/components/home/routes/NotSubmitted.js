import React from "react";
import { Box, Button, ButtonGroup } from "@chakra-ui/react";
import { Eye } from '../../ui/eye/Eye';
import { Garbage } from '../../ui/garbage/Garbage';
import theme from '../../../themes/components/button.tsx';



export const NotSubmitted = ({ isMobile, imgBit, setImgBit, setSelectedImage, setRoute, onSubmit}) => {

    return (
        <Box p={[1, 2, 5]} minW={['100%', 400]}>
            <Box maxW={300} border='1px solid black' borderRadius='.5em' className='imageBox' align='flex-start'>
                <img
                className='userImage'
                alt="uploaded"
                src={imgBit}
                />
            </Box>
            <Box w='100%' position='relative' bottom={0} pt={[2, 3, 5]} justify='center' align='center'>
            <ButtonGroup   
                    verticalAlign="bottom"
                    gap={2}
                    flexDir={isMobile ? "column" : "row"}>
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
    )
}

export default NotSubmitted;