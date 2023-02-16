import React from 'react'
import eye from './eye.png';
import { Image } from "@chakra-ui/react"

export function Eye() {
    return (
        <div>
           <Image src={eye} alt='eye' height='24px' width='24px'></Image>
        </div>
    )
}