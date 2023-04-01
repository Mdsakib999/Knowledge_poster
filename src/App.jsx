import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header';
import LoadData from './components/Data/LoadData';
import SideCard from './components/SideCard/SideCard';

function App() {
  const [reading, setReading] = useState("");

  const readTime = (time) => {
    const previousTime = (localStorage.getItem("readTime"));

    if(previousTime) {
      let sum = parseInt(previousTime) + parseInt(time);
      localStorage.setItem("readTime", sum);
      
      setReading(sum)
    }
    else{
      localStorage.setItem("readTime", time);
      setReading(time);
    }
  };



  
  return (
    <div>
      <Header></Header>
      <div className='home'>
        <LoadData readTime={readTime}></LoadData>
        <div className='side-card'>
        <SideCard reading={reading}></SideCard>
        </div>
      </div>
    </div>
  );
}


export default App
