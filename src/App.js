import React, { useState } from 'react';
import Navbar from './components/Navigation.js';
import { RegisterCard } from './components/registerCard/RegisterCard';
import Home from './components/home/Home.js';
import Login from './components/login/Login.js'

export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [route, setRoute] = useState('signin')
  const [user, setUser] = useState({
    id: '',
    name: '',
    username: '',
    score: 0,
    joined: ''
  })


  function onRouteChange(route) {
    if (route === 'signout') {
      setIsSignedIn(false);
    } else if (route === 'home') {
      setIsSignedIn(true);
    }
    setRoute(route);

  }

  function loadUser(data) {
      setUser( {
      id: data.id,
      name: data.name,
      username: data.username,
      score: data.score,
      joined: data.joined
    })
  }


  return (
    <>
      <Navbar isSignedIn={isSignedIn} route={route} onRouteChange={onRouteChange}/>
        { route === 'home'
          ? <Home/>
              : ( route === 'profile' ? <profile loadUser={loadUser} onRouteChange={onRouteChange}/>
              : (
                route === 'signin'
                ? <Login loadUser={loadUser} onRouteChange={onRouteChange}/>
                : <RegisterCard loadUser={loadUser} onRouteChange={onRouteChange}/>
                ))}
    </>
  );
}