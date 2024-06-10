import React, { useState } from 'react';
import TasksList from './TasksList';


const HighPriorityTasks: React.FC = () => {


  return <TasksList filterPriority="high"  />;
};

export default HighPriorityTasks;
