import React from 'react'
import logo from './logo.svg';
import './logo.css'
import { Image } from "@chakra-ui/react"

export function SeeFoodLogo() {
    return (
        <div>
           <Image src={logo} alt='logo' height= '30vh' width= '30vh' style={{
            filter: "invert(0%) sepia(96%) saturate(0%) hue-rotate(69deg) brightness(99%) contrast(104%)"}}></Image>
        </div>
    )
}



// height= '150px' width= '150px'>