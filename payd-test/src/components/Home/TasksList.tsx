import React, { useState, useEffect } from 'react';
import { fetchTasks } from '../api';
import NoTask from './NoTask';
import TaskItem from './TaskItem';
import Pagination from '../Pagination';
import { useTaskContext } from './TaskContext';

type Task = {
  id: number;
  title: string;
  body: string;
  userId: number;
  dueDate?: string;
  priority: 'low' | 'medium' | 'high';
};

interface TasksListProps {
  filterPriority?: 'low' | 'medium' | 'high';
  filterDueDate?: [string, string];
}

const TasksList: React.FC<TasksListProps> = ({ filterPriority, filterDueDate }) => {
  const { isAddTaskOpen } = useTaskContext(); 
  const [tasks, setTasks] = useState<Task[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const tasksPerPage = isAddTaskOpen ? 6 : 8; // Adjust tasks per page based on AddTask state
  const gridCols = isAddTaskOpen ? 'grid-cols-3' : 'grid-cols-4'; // Adjust grid columns based on AddTask state

  useEffect(() => {
    const getTasks = async () => {
      const fetchedTasks = await fetchTasks();
      const updatedTasks = fetchedTasks.map(task => ({
        ...task,
        dueDate: generateRandomDueDate(),
      }));

      let filteredTasks = updatedTasks;

      if (filterPriority) {
        filteredTasks = filteredTasks.filter(task => task.priority === filterPriority);
      }

      if (filterDueDate) {
        const [startDate, endDate] = filterDueDate;
        filteredTasks = filteredTasks.filter(task => {
          const dueDate = new Date(task.dueDate || '');
          return dueDate >= new Date(startDate) && dueDate <= new Date(endDate);
        });
      }

      setTasks(filteredTasks);
    };

    getTasks();
  }, [filterPriority, filterDueDate]);

  const generateRandomDueDate = () => {
    const currentDate = new Date();
    const randomDaysToAdd = Math.floor(Math.random() * 30);
    const newDate = new Date(currentDate.getTime() + randomDaysToAdd * 24 * 60 * 60 * 1000);
    return newDate.toISOString().split('T')[0];
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(tasks.length / tasksPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = tasks.slice(indexOfFirstTask, indexOfLastTask);
  

  return (
    <div className="text-gray-100 text">
      {tasks.length === 0 ? (
        <NoTask />
      ) : (
        <div>
          <div className=' flex justify-center'>
          <div className={`mt-10 grid ${gridCols} gap-8`}>
            {currentTasks.map(task => (
              <TaskItem key={task.id} task={task} />
            ))}
          </div>
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(tasks.length / tasksPerPage)}
            onNextPage={handleNextPage}
            onPreviousPage={handlePreviousPage}
          />
          <div className="text-center text-gray-400 mt-2">
            Page {currentPage} of {Math.ceil(tasks.length / tasksPerPage)}
          </div>
        </div>
      )}
    </div>
  );
};

export default TasksList;
