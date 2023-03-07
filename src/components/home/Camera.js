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
  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: { width: 1080, height: 1920 },
      })
      .then((stream) => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getVideo();
  }, [videoRef]);

  const takePhoto = () => {
    let video = videoRef.current;
    let canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    let ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    let img = new Image();
    img.src = canvas.toDataURL("image/jpeg");
    canvas.toBlob((blob) => {
      let file = new File([blob], "download.jpeg", {
        type: "image/jpeg",
        lastModified: new Date().getTime(),
      });
      setHasPhoto(true);
      setSelectedImage(file);
    }, "image/jpeg", 1);
    setImgBit(img.src);
    setImgBitt(img.src);
    console.log(selectedImage)
    console.log(photoRef)
    console.log('sucess!', imgBitt)
  };

  const retakePhoto = () => {
    setHasPhoto(false);
    getVideo();
  };

  return (
    <>
      {!hasPhoto && (
        <Box w="50%" className="camera">
          <video ref={videoRef}></video>
          <Button
            theme={theme}
            position="absolute"
            marginLeft="-87.5px"
            bottom="2em"
            w="175px"
            textAlign="center"
            _hover={{ backgroundColor: "#40C7CA", color: "#FFFFF0" }}
            leftIcon={<Snap />}
            onClick={takePhoto}
          >
            SNAP!
          </Button>
        </Box>
      )}


      {hasPhoto && (
    <Box w="50%" className={"photo " + (hasPhoto ? "hasPhoto" : "")}>
      <img alt="photoRef" src={imgBit} ref={photoRef}></img>
      <ButtonGroup
        position="absolute"
        bottom="2em"
        left="50%"
        marginLeft="-175px"
        gap={2}
      >
        <Button
          theme={theme}
          w="175px"
          textAlign="center"
          _hover={{ backgroundColor: "#40C7CA", color: "#FFFFF0" }}
          leftIcon={<Retake />}
          onClick={retakePhoto}
        >
          Retake
        </Button>
        <Button
          theme={theme}
          w="175px"
          textAlign="center"
          _hover={{ backgroundColor: "#40C7CA", color: "#FFFFF0" }}
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

