import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header';
import LoadData from './components/Data/LoadData';

function App() {
  
  return (
    <div>
      <Header></Header>
      <LoadData></LoadData>
    </div>
  );
}


export default App
