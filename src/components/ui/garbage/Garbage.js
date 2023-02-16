import React from 'react'
import trash from './trash.svg';
import { Image } from "@chakra-ui/react"

export function Garbage() {
    return (
        <div>
           <Image src={trash} alt='garbage' height='24px' width='24px'></Image>
        </div>
    )
}