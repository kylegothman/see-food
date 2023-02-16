import React from 'react';
import upload from './upload.svg'
import { Image } from "@chakra-ui/react"

export function UploadIcon() {
    return (
        <div>
           <Image src={upload} alt='uploadIcon' height= '24px' width= '24px' style={{
            filter: "invert(0%) sepia(96%) saturate(0%) hue-rotate(69deg) brightness(99%) contrast(104%)"}}></Image>
        </div>
    )
}