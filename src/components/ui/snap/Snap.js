import React from 'react'
import capture from './capture.png';
import { Image } from "@chakra-ui/react"

export function Snap() {
    return (
        <div>
           <Image src={capture} alt='capture' height='25px' width='25px'></Image>
        </div>
    )
}