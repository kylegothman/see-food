import React, { useState } from 'react';
import { SeeFoodLogo } from '../../logo/Logo';
import './navigation.css';
import { SignInButton } from '../button/SignInButton';
import theme from '../../../themes/components/button.tsx';
import {
  Box,
  Button,
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
    const newIsMenuOpen = !isMenuOpen;
    localStorage.setItem('isMenuOpen', JSON.stringify(newIsMenuOpen));
    setIsMenuOpen(newIsMenuOpen);
  };

  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Flex className='navFlex'>
      <Box align='right'>
        {isSignedIn && (
          <Box _hover={{cursor: 'pointer'}} onClick={() => onRouteChange('home')}>
              <SeeFoodLogo />
          </Box>
        )}
      </Box>
      <Spacer />
      {isSignedIn && (!isMobile || isSignedIn) ? (
        <Menu>
          <MenuButton
            className='menuButton'
            justifyContent={isMobile ? 'center' : 'flex-end'}
            onClick={toggleMenu}
            variant="solid"
            size="md"
          >
            Menu <ChevronDownIcon />
          </MenuButton>
          {isMenuOpen && (
            <MenuList bg='#fffff0' className='menuList'>
              {route === 'profile' && (
                <MenuItem className='menuItem' bg='#fffff0' onClick={() => { onRouteChange('home'); toggleMenu(); }}>Home</MenuItem>
              )}
              {route !== 'profile' && (
                <MenuItem className='menuItem' bg='#fffff0' onClick={() => { onRouteChange('profile'); toggleMenu(); }}>Profile</MenuItem>
              )}
              <MenuItem className='menuItem' bg='#fffff0' onClick={() => { onRouteChange('about'); toggleMenu(); }}>About</MenuItem>
              <MenuItem className='menuItem' bg='#fffff0' onClick={() => { onRouteChange('signout'); toggleMenu(); }}>Sign Out</MenuItem>
            </MenuList>
          )}
        </Menu>
      ) : (
        <>
        <ButtonGroup mt={5} mr={5} >
          {route === 'about' ? (
            <Button theme={theme} onClick={() => onRouteChange('register')} mr={2}>
              Register
            </Button>
          ) : (
            <Button theme={theme} onClick={() => onRouteChange('about')} mr={2}>
              About
            </Button>
          )}
          <SignInButton route={route} onRouteChange={onRouteChange} isSignedIn={isSignedIn} />
          </ButtonGroup>
        </>
      )}
    </Flex>
  );
}

export default Navbar;
