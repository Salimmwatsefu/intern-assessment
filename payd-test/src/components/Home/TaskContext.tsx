
import React, { createContext, useContext, useState } from 'react';

interface TaskContextProps {
  isAddTaskOpen: boolean;
  toggleAddTask: () => void;
}

interface Props {
    children: React.ReactNode;
  }

const TaskContext = createContext<TaskContextProps | undefined>(undefined);

export const TaskProvider: React.FC<Props> = ({ children }) => {
  const [isAddTaskOpen, setAddTaskOpen] = useState(true);

  const toggleAddTask = () => {
    setAddTaskOpen(prevState => !prevState);
  };

  return (
    <TaskContext.Provider value={{ isAddTaskOpen, toggleAddTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => {
    const context = useContext(TaskContext);
    if (!context) {
      throw new Error('useTaskContext must be used within a TaskProvider');
    }
    return context;
  };
  
export default TaskContext;