import React, { useState } from 'react';
import { Card, CardHeader, CardBody, Heading, Icon, Tooltip, useToast } from '@chakra-ui/react';
import { HiPlusCircle} from 'react-icons/hi';
import { addTask } from '../api'; 
import { useTaskContext } from './TaskContext';



  const AddTask: React.FC = () => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [userId, setUserId] = useState('');
  const toast = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate form fields
    if (!taskName.trim() || !taskDescription.trim() || !userId.trim()) {
        toast({
          title: "Please fill in all fields",
          status: "warning",
          duration: 5000,
          isClosable: true,
          position: 'top'
        });
        return;
      }

    // Create a new task object
    const newTask = {
      title: taskName,
      body: taskDescription,
      userId: parseInt(userId),
    };

    //add new task
    const addedTask = await addTask(newTask);

    if (addedTask) {
      // Reset form fields after successful addition
      setTaskName('');
      setTaskDescription('');
      setUserId('');
      toast({
        title: "Task added successfully!",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: 'top'
      });
    } else {
        toast({
            title: "Failed to add task",
            status: "error",
            duration: 5000,
            isClosable: true,
            position: 'top'
          });
    }
  };

  const { isAddTaskOpen } = useTaskContext();

  return (
    <div className="border-r xl:w-[450px] md:w-full xl:h-[86vh] lg:h-[42vh] border-white/5 bg-[#232323]" style={{ display: isAddTaskOpen ? 'block' : 'none' }}>
        
      <div className="text-gray-300 flex justify-center lg:pt-20 pt-16 pb-10">
        
        <Card className="w-[350px]" bgColor={'RGBA(0, 0, 0, 0.16)'}>
          <CardHeader className="flex gap-1">
            <Icon as={HiPlusCircle} w={7} h={7} color="yellow.700" />
            <Heading size="sm" className="mt-[3px]" color={'gray.100'}>
              Add New Task
            </Heading>
            
          </CardHeader>
          <CardBody>
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  value={taskName}
                  onChange={(e) => setTaskName(e.target.value)}
                  className="w-full rounded-lg bg-[#3f260f] p-4 pe-12 text-sm shadow-sm text-gray-200 placeholder-gray-400"
                  placeholder="Enter Task Name"
                />
                <input
                  type="text"
                  value={taskDescription}
                  onChange={(e) => setTaskDescription(e.target.value)}
                  className="w-full rounded-lg bg-[#3f260f] p-4 pe-12 text-sm shadow-sm text-gray-200 placeholder-gray-400 my-5"
                  placeholder="Enter Task Description"
                />
                <input
                  type="number"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                  className="w-full rounded-lg bg-[#3f260f] p-4 pe-12 text-sm shadow-sm text-gray-200 placeholder-gray-400"
                  placeholder="Enter User ID"
                />
              </div>

              <div className="flex gap-7 justify-center">
                <button
                  type="button"
                  onClick={() => {
                    setTaskName('');
                    setTaskDescription('');
                    setUserId('');
                  }}
                  className="block w-32 rounded-lg bg-[#252525] px-5 py-3 text-sm font-medium text-white mt-10"
                >
                  Reset
                </button>

                <button
                  type="submit"
                  className="block w-32 rounded-lg bg-yellow-700 px-5 py-3 text-sm font-medium text-white mt-10"
                >
                  Add Task
                </button>
              </div>
            </form>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default AddTask;
