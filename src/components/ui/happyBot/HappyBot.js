import React from 'react';
import bot from './bot.png';
import { Image } from "@chakra-ui/react"
import styled, { keyframes } from 'styled-components';

const hover = keyframes`
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(0, 8px);
  }
  100% {
    transform: translate(0, 0);
  }
`;

const StyledImage = styled(Image)`
  position: relative;
  animation: ${hover} 2s ease-in-out infinite;
  top: ${Math.floor(Math.random() * 2) - 2}px;
  left: ${Math.floor(Math.random() * 5) - 2}px;
`;

export function HappyBot() {
    return (
        <div>
            <img src={bot} alt='happy bot' height='55px' width='55px'></img>
        </div>
    )
}