import React, { useRef, useEffect, useState } from "react";
import { Box, Button, ButtonGroup } from "@chakra-ui/react";
import { UploadIcon } from "../ui/uploadIcon/UploadIcon.js";
import { Retake } from "../ui/retake/Retake.js";
import { Snap } from "../ui/snap/Snap.js";
import theme from "../../themes/components/button.tsx";
import "./home.css";

export function Camera({handleSubmit, onSubmit, setImgBitt, imgBitt, setSelectedImage, selectedImage}) {
  const videoRef = useRef(null);
  const photoRef = useRef(null);
  const [hasPhoto, setHasPhoto] = useState(false);
  const [imgBit, setImgBit] = useState(null);
  const getVideo = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment", width: 1080, height: 1920 },
      });
      let video = videoRef.current;
      video.srcObject = stream;
      video.setAttribute("playsInline", true);
      video.play();
    } catch (err) {
      console.error(err);
    }
  };


  useEffect(() => {
    getVideo();
  }, [videoRef]);

  const takePhoto = async () => {
    try {
      const video = videoRef.current;
      const canvas = document.createElement("canvas");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      const img = new Image();
      img.src = canvas.toDataURL("image/jpeg", 0.2);
      canvas.toBlob((blob) => {
        let file = new File([blob], "download.jpeg", {
          type: "image/jpeg",
          lastModified: new Date().getTime(),
        });
        setHasPhoto(true);
        setSelectedImage(file);
      }, "image/jpeg", 1);
      setImgBit(img.src);
      const cleanImg = img.src.slice(23) ;
      setImgBitt(cleanImg);
      console.log("set imagebitt", cleanImg);
    } catch (error) {
      console.error(error);
    }
  };
  
  const retakePhoto = () => {
    setHasPhoto(false);
    getVideo();
  };

  return (
    <>
      {!hasPhoto && (
        <Box w="100%" className="camera">
          <video ref={videoRef} width="100%" height='auto' ></video>
          <Button
            theme={theme}
            position="absolute"
            left={0}
            right={0}
            mx="auto"
            bottom="85px"
            w="20%"
            minW={200}
            maxW={300}
            textAlign="center"
            opacity={0.4}
            _hover={{ backgroundColor: "#40C7CA", color: "#FFFFF0", opacity: 1 }}
            leftIcon={<Snap />}
            onClick={takePhoto}
          >
            SNAP!
          </Button>
        </Box>
      )}
  
      {hasPhoto && (
        <Box w="100%" className={"photo " + (hasPhoto ? "hasPhoto" : "")} mt={4} position="relative">
          <img alt="photoRef" src={imgBit} ref={photoRef} width="100%" height="auto"></img>
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

