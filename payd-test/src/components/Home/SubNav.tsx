import { Tooltip, Text } from '@chakra-ui/react';
import React from 'react';
import { FiSidebar } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import { useTaskContext } from './TaskContext';

const SubNav: React.FC = () => {
  const links = [
    { to: '/', label: 'All', tooltip: 'View all tasks' },
    { to: '/high-priority', label: 'High Priority', tooltip: 'View high priority tasks' },
    { to: '/due', label: 'Due', tooltip: 'View tasks due in 2 days' },
  ];

  const { toggleAddTask } = useTaskContext();

  return (
    <div className="text-black w-full">
      <ul className="flex md:gap-10 gap-5 justify-center md:mt-7 mt-14">
        {links.map((link, index) => (
          <li key={index}>
            <Tooltip label={link.tooltip} placement="top" bgColor={'RGBA(0, 0, 0, 0.36)'} color={'gray.400'}>
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
            </Tooltip>
          </li>
        ))}
      </ul>
      <div>
        <Tooltip
          label={'Open/Close Sidebar'}
          placement="right"
          bgColor={'RGBA(0, 0, 0, 0.36)'}
          color={'gray.400'}
          rounded={'md'}
        >
          <button
            onClick={toggleAddTask}
            className="absolute top-[89px] left-[30px] bg-transparent hover:bg-yellow-700 p-1 rounded-lg"
          >
            <FiSidebar className="text-gray-300 w-8 h-6" />
          </button>
        </Tooltip>
      </div>
    </div>
  );
};

export default SubNav;
