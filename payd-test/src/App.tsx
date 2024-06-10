import './App.css';
import React from 'react';
import AddTask from './components/Home/AddTask';
import Navbar from './components/Home/Navbar';

function App() {
  return (
    <div className=" bg-[#202020] h-screen">
      <Navbar />

      <div className=' mt-10'>
      <AddTask />
      </div>

     
    </div>
  );
}

export default App;
