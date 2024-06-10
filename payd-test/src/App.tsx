import './App.css';
import React from 'react';
import AddTask from './components/Home/AddTask';
import Navbar from './components/Home/Navbar';
import { Route, Routes } from 'react-router-dom';
import SubNav from './components/Home/SubNav';
import Layout from './components/Home/Layout';
import AllTasks from './components/Home/AllTasks';
import RecentTasks from './components/Home/HighPriorityTasks';
import HighPriorityTasks from './components/Home/HighPriorityTasks';
import DueTasks from './components/Home/DueTasks';


function App() {
  return (
    <div className=" bg-[#202020] h-full">

      <Routes>

      <Route path='/' element={<Layout />}>
      <Route index element={<AllTasks />}/>
      <Route path='/high-priority' element={<HighPriorityTasks />} />
      <Route path='/due' element={<DueTasks />} />
          
      </Route >

      </Routes>
      

     
    </div>
  );
}

export default App;
