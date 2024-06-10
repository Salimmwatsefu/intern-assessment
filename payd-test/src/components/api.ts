
type Post = {
    id: number;
    title: string;
    body: string;
    userId: number;
    dueDate?: string;
    priority: 'low' | 'medium' | 'high';
  };
  
  const priorities = ['low', 'medium', 'high'] as const;
  
  export const fetchPosts = async (): Promise<Post[]> => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }
      const data: Post[] = await response.json();
      const postsWithPriorities = data.map(post => ({
        ...post,
        priority: priorities[Math.floor(Math.random() * priorities.length)]
      }));
      return postsWithPriorities;
    } catch (error) {
      console.error('Error fetching posts:', error);
      return [];
    }
  };
  