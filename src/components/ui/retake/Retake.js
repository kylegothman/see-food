import React from 'react'
import direction from './direction.png';
import { Image } from "@chakra-ui/react"

export function Retake() {
    return (
        <div>
           <Image src={direction} alt='retake' height='25px' width='25px'></Image>
        </div>
    )
}