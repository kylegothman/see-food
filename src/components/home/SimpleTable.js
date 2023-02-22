import React from 'react' 
import {
    Tr,
    Td,
  } from '@chakra-ui/react'

export function SimpleTable({ name, value }) {

    return (
                <Tr>
                    <Td>{ name }</Td>
                    <Td isNumeric>{ parseFloat(value*100).toFixed(2) }%</Td>
                </Tr>
        )
}