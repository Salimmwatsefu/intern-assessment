import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import AddTask from './AddTask';
import SubNav from './SubNav';

function Layout() {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <div >
          <AddTask />
        </div>
        <div>
          <SubNav />
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
