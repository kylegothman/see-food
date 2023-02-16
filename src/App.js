import React, { useState } from 'react';
import Navbar from './components/Navigation.js';
import { RegisterCard } from './components/registerCard/RegisterCard';
import Home from './components/home/Home.js';


export default function App() {
  const [isGuest, setIsGuest] = useState(false);

  const close = () => setIsGuest(false);
  const open = () => setIsGuest(true);

  return (
    <>
    <Navbar/>
    {isGuest ? <RegisterCard isGuest={isGuest} handleClose={close}/> : <Home isGuest={isGuest} handleClose={open}/>}
    </>
  );
}

