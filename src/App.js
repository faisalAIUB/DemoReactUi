import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './App.css';
import Weather from './Test/Weather';
import { GetWeather } from './Test/TestApi.Service';


function App() {
 
  return (
    <Weather ></Weather>
  );
}

export default App;
