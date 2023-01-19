import React from 'react'
import { Image } from "@chakra-ui/react"

export function Logo() {
    return (
        <div className='logo-nav'>
           <Image src="/logo.png" alt='See Food Logo' height= '150px' width= '150px'></Image>
        </div>
    )
}

