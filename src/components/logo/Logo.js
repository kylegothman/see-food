import React from 'react'
import sf_logo from '../../assets/sf_logo.png';
import { Image } from "@chakra-ui/react"

export function SeeFoodLogo() {
    return (
        <div>
           <Image src={sf_logo} alt='logo' pl={5} height='12vh' minH= '100px' style={{
            filter: "invert(0%) sepia(96%) saturate(0%) hue-rotate(69deg) brightness(99%) contrast(104%)"}}></Image>
        </div>
    )
}



// height= '150px' width= '150px'>