import React, { useState, useRef } from "react";
import { Box, Button, ButtonGroup } from "@chakra-ui/react";
import { UploadIcon } from "../../ui/uploadIcon/UploadIcon.js";
import { Retake } from "../../ui/retake/Retake.js";
import { Snap } from "../../ui/snap/Snap.js";
import theme from "../../../themes/components/button.tsx";
import "../home.css";
import Camera, { DEVICE, FACING_MODE, PLACEMENT } from 'react-camera-ios';
import '../../../../node_modules/react-camera-ios/build/styles.css'

export default function CameraApp({ onSubmit, imgBit, setImgBit, setSelectedImage }) {
  const [hasPhoto, setHasPhoto] = useState(false);


  const takePhoto = async (dataUrl) => {
    console.log(dataUrl)
    const img = new Image();
    img.src = dataUrl;
    const response = await fetch(dataUrl);
    const blob = await response.blob();
    let file = new File([blob], "download.jpeg", {
      type: "image/jpeg",
      lastModified: new Date().getTime(),
    });
    setHasPhoto(true);
    setSelectedImage(file);
    setImgBit(dataUrl);
    }


  const retakePhoto = () => {
    setHasPhoto(false);
  };

  const containerStyle = { display: "flex", width:window.innerWidth, height: window.innerHeight };


  return (
    <>
      {!hasPhoto && (
        <Box display='flex' className="camera">
        <div style={containerStyle}>
        <Camera
          device={DEVICE.MOBILE}
          facingMode={FACING_MODE.ENVIRONMENT}
          isTurnedOn={true}
          placement={PLACEMENT.COVER}
          quality={0.2}
          onError={error => console.log(error)}
          onTakePhoto={takePhoto}
        />
        </div>
      
        </Box>
      )}

      {hasPhoto && (
        <Box w="100%" className={"photo " + (hasPhoto ? "hasPhoto" : "")} mt={4} position="relative">
          <img alt="photoRef" src={imgBit} width="100%" height="auto" />
          <ButtonGroup
            position="absolute"
            left={0}
            right={0}
            mx="auto"
            bottom="5%"
            w="70%"
            margin="0 auto"
            display="flex"
            justifyContent="space-between"
          >
            <Button
              theme={theme}
              w="48%"
              textAlign="center"
              opacity={0.8}
              _hover={{ opacity: 1, backgroundColor: "#40C7CA", color: "#FFFFF0" }}
              leftIcon={<Retake />}
              onClick={retakePhoto}
            >
              Retake
            </Button>
            <Button
              theme={theme}
              w="48%"
              opacity={0.8}
              textAlign="center"
              _hover={{ opacity: 1, backgroundColor: "#40C7CA", color: "#FFFFF0" }}
              leftIcon={<UploadIcon />}
              onClick={onSubmit}
            >
              Submit
            </Button>
          </ButtonGroup>
        </Box>
      )}
    </>
  );
}

