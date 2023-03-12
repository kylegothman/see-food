import React, { useState } from 'react';
import { SeeFoodLogo } from './logo/Logo';
import '../App.css';
import NavButton from './ui/button/NavButton';
import { SignInButton } from './ui/button/SignInButton';
import {
  Box,
  ButtonGroup,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Spacer,
  useBreakpointValue
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

function Navbar({ onRouteChange, isSignedIn, route }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    console.log('clicked', isMenuOpen)
    const newIsMenuOpen = !isMenuOpen;
    localStorage.setItem('isMenuOpen', JSON.stringify(newIsMenuOpen));
    setIsMenuOpen(newIsMenuOpen);
  };

  const isMobile = useBreakpointValue({ base: true, md: false });


  return (
    <Flex className='navFlex' bg='yellow.50' pt={5} minWidth='max-content' justify='space-between' gap='2'>
      <Box align='right'>
        {isSignedIn && (
          <Box>
            <a href='/'>
              <SeeFoodLogo />
            </a>
          </Box>
        )}
      </Box>
      <Spacer />
      {!isMobile ? (
        <ButtonGroup pr='5' gap='2' alignItems='center'>
          {isSignedIn && <NavButton route={route} onRouteChange={onRouteChange} isSignedIn={isSignedIn} />}
          {!isSignedIn && <SignInButton route={route} onRouteChange={onRouteChange} isSignedIn={isSignedIn} />}
        </ButtonGroup>
      ) : isSignedIn ? (
        <Menu>
          <MenuButton
            justifyContent={isMobile ? 'center' : 'flex-end'}
            mr={5}
            onClick={toggleMenu}
            border='1px solid black'
            width={isMobile ? '40%' : 'auto'}
            maxH='40px'
            variant="solid"
            size="md"
            borderRadius="10em"
            px="16px"
            py=".5em"
            transition="all 0.3s ease-in-out"
            _hover={{
              backgroundColor: '#F65223',
              color: '#FFFFF0',
              transform: 'translateY(-4px) translateX(-2px)',
              boxShadow: '2px 5px 0 0 black'
            }}
          >
            Menu <ChevronDownIcon />
          </MenuButton>
          {isMenuOpen && (
            <MenuList bg='#FFFFF0' pt={2} pb={2} borderRadius=".5em" border='1px solid black' >
              {route === 'profile' && (
                <MenuItem borderRadius=".5em" bg='#FFFFF0' onClick={() => { onRouteChange('home'); toggleMenu(); }}>Home</MenuItem>
              )}
              {route !== 'profile' && (
                <MenuItem borderRadius=".5em" bg='#FFFFF0' onClick={() => { onRouteChange('profile'); toggleMenu(); }}>Profile</MenuItem>
              )}
              <MenuItem borderRadius=".5em" bg='#FFFFF0' onClick={() => { onRouteChange('signout'); toggleMenu(); }}>Sign Out</MenuItem>
            </MenuList>
          )}
        </Menu>
      ) : (
        <SignInButton route={route} onRouteChange={onRouteChange} isSignedIn={isSignedIn} />
      )}
    </Flex>
  );
}

export default Navbar;