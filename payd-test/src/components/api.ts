type Task = {
    id: number;
    title: string;
    body: string;
    userId: number;
    dueDate?: string;
    priority: 'low' | 'medium' | 'high';
  };
  
  const priorities = ['low', 'medium', 'high'] as const;

  //fetchTasks
  
  export const fetchTasks = async (): Promise<Task[]> => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!response.ok) {
        throw new Error('Failed to fetch tasks');
      }
      const data: Task[] = await response.json();
      const tasksWithPriorities = data.map(task => ({
        ...task,
        priority: priorities[Math.floor(Math.random() * priorities.length)],
      }));
      return tasksWithPriorities;
    } catch (error) {
      console.error('Error fetching tasks:', error);
      return [];
    }
  };
  

//post tasks

export const addTask = async (newTask: Partial<Task>): Promise<Task | null> => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(newTask),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      if (!response.ok) {
        throw new Error('Failed to add task');
      }
      const data: Task = await response.json();
      // Simulate the addition by assigning a new ID starting from 101
      const addedTask = {
        ...data,
        id: Math.floor(Math.random() * 1000) + 101, // Generate a random ID starting from 101
      };
      return addedTask;
    } catch (error) {
      console.error('Error adding task:', error);
      return null;
    }
  };
  