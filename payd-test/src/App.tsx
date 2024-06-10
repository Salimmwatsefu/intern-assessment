import './App.css';
import React from 'react';
import AddTask from './components/Home/AddTask';
import Navbar from './components/Home/Navbar';
import { Route, Routes } from 'react-router-dom';
import SubNav from './components/Home/SubNav';
import Layout from './components/Home/Layout';


function App() {
  return (
    <div className=" bg-[#202020] h-screen">

      <Routes>

      <Route path='/' element={<Layout />}>
          
      </Route >

      </Routes>
      

     
    </div>
  );
}

export default App;
