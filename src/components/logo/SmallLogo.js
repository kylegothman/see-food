import React from 'react'
import smallLogo from './smallLogo.png'
import { Image } from "@chakra-ui/react"

export function SmallLogo() {
    return (
        <div>
           <Image src={smallLogo} alt='logo' pl={5} height='12vh' minH= '100px' style={{
            filter: "invert(0%) sepia(96%) saturate(0%) hue-rotate(69deg) brightness(99%) contrast(104%)"}}></Image>
        </div>
    )
}