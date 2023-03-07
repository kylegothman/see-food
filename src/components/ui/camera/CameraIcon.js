import React from 'react'
import camera from './camera.png';
import { Image } from "@chakra-ui/react"

export function CameraIcon() {
    return (
        <div>
           <Image src={camera} alt='camera' height='24px' width='24px'></Image>
        </div>
    )
}