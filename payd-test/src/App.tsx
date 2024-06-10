import './App.css';
import React from 'react';
import AddTask from './components/Home/AddTask';
import Navbar from './components/Home/Navbar';
import { Route, Routes } from 'react-router-dom';
import SubNav from './components/Home/SubNav';
import Layout from './components/Home/Layout';
import AllTasks from './components/Home/AllTasks';
import RecentTasks from './components/Home/RecentTasks';


function App() {
  return (
    <div className=" bg-[#202020] h-screen">

      <Routes>

      <Route path='/' element={<Layout />}>
      <Route index element={<AllTasks />}/>
      <Route path='/recent' element={<RecentTasks />} />
          
      </Route >

      </Routes>
      

     
    </div>
  );
}

export default App;
