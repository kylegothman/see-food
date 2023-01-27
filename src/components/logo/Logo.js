import React from 'react'
import logo from './logo.svg';
import { Image } from "@chakra-ui/react"

export function SeeFoodLogo() {
    return (
        <div>
           <Image src={logo} marginY='-10' alt='logo' height= '26vh' width= '26vh' style={{
            filter: "invert(0%) sepia(96%) saturate(0%) hue-rotate(69deg) brightness(99%) contrast(104%)"}}></Image>
        </div>
    )
}



// height= '150px' width= '150px'>