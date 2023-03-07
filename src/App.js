import React, { useState } from 'react';
import Navbar from './components/Navigation';
import { RegisterCard } from './components/registerCard/RegisterCard';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Profile from './components/profile/Profile';

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
      setIsSignedIn(false);
    } else if (route === 'home') {
      setIsSignedIn(true);
    } else if (route === 'profile') {
      try {
        const response = await fetch(`http://localhost:3000/profile/${user.id}`, {
          method: 'get',
          headers: { 'Content-Type': 'application/json' }
        });
        if (!response.ok) {
          throw new Error(`This is an HTTP error: The status is ${response.status}`);
        } else {
          const actualData = await response.json();
          loadUser(actualData);
          console.log(actualData);
        }
      } catch (error) {
        console.error(error);
      }
    }

    setRoute(route);
    console.log(route);
  }

  function loadUser(data) {
    setUser({
      id: data.id,
      name: data.name,
      username: data.username,
      score: data.score,
      joined: data.joined
    });
  }

  return (
    <>
      <Navbar isSignedIn={isSignedIn} route={route} onRouteChange={onRouteChange} />
      {route === 'home' ? (
        <Home user={user} setUser={setUser} />
      ) : route === 'profile' ? (
        <Profile user={user} onRouteChange={onRouteChange} />
      ) : route === 'signin' ? (
        <Login loadUser={loadUser} onRouteChange={onRouteChange} />
      ) : (
        <RegisterCard loadUser={loadUser} onRouteChange={onRouteChange} />
      )}
    </>
  );
}