import React, { useState } from 'react';
import Navbar from './components/Navigation';
import { RegisterCard } from './components/registerCard/RegisterCard';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Profile from './components/profile/Profile';
import { Box } from '@chakra-ui/react';

export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [route, setRoute] = useState('signin');
  const [user, setUser] = useState({
    id: '',
    name: '',
    username: '',
    score: 0,
    joined: ''
  });

  async function onRouteChange(route) {
    if (route === 'signout') {
      try {
        const response = await fetch(`https://shrouded-hollows-05651.herokuapp.com/signout`, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' }
      });
      if (!response.ok) {
        throw new Error(`This is an HTTP error: The status is ${response.status}`);
      } else {
        setIsSignedIn(false);
        setUser({
          id: '',
          name: '',
          username: '',
          score: 0,
          joined: ''
        });
        console.log(user)
      }
    } catch (error) {
      console.error(error);
    }
    } else if (route === 'home') {
      setIsSignedIn(true);
    } else if (route === 'profile') {
      if (user.id) {
        try {
          const response = await fetch(`https://shrouded-hollows-05651.herokuapp.com/profile/${user.id}`, {
            method: 'get',
            headers: { 'Content-Type': 'application/json' }
          });
          if (!response.ok) {
            throw new Error(`This is an HTTP error: The status is ${response.status}`);
          } else {
            const actualData = await response.json();
            loadProfile(actualData);
          }
        } catch (error) {
          console.error(error);
        }
      }
    } else if (route === 'signin') {
      // Wait for state updates to complete before attempting to log in again
      setIsSignedIn(false);
      setUser({
        id: '',
        name: '',
        username: '',
        score: 0,
        joined: ''
      });
      console.log(user);    
    }
  
    setRoute(route);
  }

  function loadUser({data}) {
    setUser({
      id: data.id,
      name: data.name,
      username: data.username,
      score: data.score,
      joined: data.joined
    });
  }
  
  function loadProfile(data) {
    setUser({
      id: data.id,
      name: data.name,
      username: data.username,
      score: data.score,
      joined: data.joined
    });
  }

  return (
    <div className='rootContainer'>
      <Navbar isSignedIn={isSignedIn} route={route} onRouteChange={onRouteChange} />
      <Box justify='center' className='bodyContainer' bg='yellow.50' mt={0} p={2}>
        {route === 'home' ? (
          <Home user={user} setUser={setUser} />
        ) : route === 'profile' ? (
          <Profile user={user} onRouteChange={onRouteChange} />
        ) : route === 'signin' ? (
          <Login loadProfile={loadProfile} onRouteChange={onRouteChange} />
        ) : (
          <RegisterCard loadUser={loadUser} onRouteChange={onRouteChange} />
        )}
      </Box>
    </div>
  );
}