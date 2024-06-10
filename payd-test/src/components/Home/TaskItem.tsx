import React from 'react';

interface TaskItemProps {
  task: {
    id: number;
    title: string;
    body: string;
    userId: number;
    dueDate?: string;
    priority: 'low' | 'medium' | 'high';
  };
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  return (
    <div className={`bg-yellow-100 w-[250px] h-[150px] px-2 py-3 rounded-xl`}>
      <h1 className='text-black font-bold text-lg ml-2 truncate'>{task.title}</h1>
      <p className='text-black text-xs font-semibold ml-2 mt-2 h-[65px] limited-text'>{task.body}</p>
      <div className='flex  ml-2 mt-1'>
        <p className='text-black text-[10px] bg-transparent/10 py-1 px-3 rounded-lg relative top-0 left-0'>{task.userId}</p>
        <p className={`text-black text-[10px] relative left-8 py-1 px-3 rounded-lg ml-3 ${task.priority === 'high' ? 'bg-red-500/40' : task.priority === 'medium' ? 'bg-yellow-500/40' : 'bg-green-500/40'}`}>{task.priority}</p>
        <p className='text-black text-[10px] bg-transparent/10 relative left-16 right-0 p-1 rounded-lg'>{task.dueDate}</p>
      </div>
    </div>
  );
};

export default TaskItem;
