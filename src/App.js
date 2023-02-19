import React, { useState } from 'react';
import Navbar from './components/Navigation.js';
import { RegisterCard } from './components/registerCard/RegisterCard';
import Home from './components/home/Home.js';
import Login from './components/login/Login.js'


export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [route, setRoute] = useState('signin')
  const [imgUrl, setImgUrl] = useState(``)
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

  const raw = JSON.stringify({
    "user_app_id": {
      "user_id": "k-goth",
      "app_id": "SeeFood"
    },
    "inputs": [
        {
            "data": {
                "image": {
                    "url": "https://media.cnn.com/api/v1/images/stellar/prod/210826215046-hotdog-stock.jpg?q=x_3,y_98,h_1684,w_2993,c_crop/w_800"
                }
            }
        }
    ]
  }); 


  const requestOptions = {
  method: 'POST',
  headers: {
      'Accept': 'application/json',
      'Authorization': 'Key c2e851ddbb4446bda9fc93146215a0a8'   
  },
  body: raw
  };

  fetch(`https://api.clarifai.com/v2/models/food-item-recognition/versions/1d5fd481e0cf4826aa72ec3ff049e044/outputs`, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error))



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

