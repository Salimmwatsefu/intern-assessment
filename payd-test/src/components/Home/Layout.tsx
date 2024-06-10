import React from 'react';
import { TaskProvider } from './TaskContext';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import AddTask from './AddTask';
import SubNav from './SubNav';

function Layout() {
  return (
    <TaskProvider>
      <div>
        <Navbar />
        <div className="flex">
          <div>
            <AddTask />
          </div>
          <div className="flex-grow flex flex-col h-full">
            <SubNav />
            <Outlet />
          </div>
        </div>
      </div>
    </TaskProvider>
  );
}

export default Layout;
