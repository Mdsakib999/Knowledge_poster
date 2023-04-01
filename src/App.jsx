import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header';
import LoadData from './components/Data/LoadData';
import SideCard from './components/SideCard/SideCard';

function App() {
  
  return (
    <div>
      <Header></Header>
      <div className='home'>
        <LoadData></LoadData>
        <div className='side-card'>
        <SideCard></SideCard>
        </div>
      </div>
    </div>
  );
}


export default App
