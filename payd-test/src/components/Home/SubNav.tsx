// SubNav.tsx

import { Tooltip } from '@chakra-ui/react';
import React from 'react';
import { FiSidebar } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import { useTaskContext } from './TaskContext';




const SubNav: React.FC = () => {
  const links = [
    { to: '/', label: 'All (34)' },
    { to: '/high-priority', label: 'High Priority' },
    { to: '/due', label: 'Due' },
  ];

  const { toggleAddTask } = useTaskContext();

  return (
    <div className="text-black w-full">
      <ul className="flex gap-10 justify-center mt-7">
        {links.map((link, index) => (
          <li key={index}>
            <NavLink
              to={link.to}
              className={({ isActive }) =>
                `${
                  isActive ? 'bg-[#ffcc70] text-black' : 'bg-[#303030] text-[#adadad]'
                } py-[7px] px-5 rounded-full font-medium`
              }
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
      <div>
        <Tooltip
          label={ 'Open/CloseSidebar'}
          placement="right"
          bgColor={'RGBA(0, 0, 0, 0.36)'}
          color={'gray.400'}
          rounded={'md'}
        >
          <button
            onClick={ toggleAddTask } // Call onToggleSidebar to toggle sidebar open/close
            className="absolute top-[100px] left-[30px] bg-transparent hover:bg-yellow-700 p-1 rounded-lg"
          >
            <FiSidebar className="text-gray-300 w-8 h-6" />
          </button>
        </Tooltip>
      </div>
    </div>
  );
};

export default SubNav;
