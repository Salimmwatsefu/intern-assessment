import React, { useState, useEffect } from 'react';
import { fetchPosts } from '../api'; // Import the reusable data fetching function
import NoTask from './NoTask';

type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
  dueDate?: string;
  priority: 'low' | 'medium' | 'high';
};

interface PostsListProps {
  filterPriority?: 'low' | 'medium' | 'high';
  filterDueDate?: [string, string]; // Accepts an array of two dates [startDate, endDate]
}

const PostsList: React.FC<PostsListProps> = ({ filterPriority, filterDueDate }) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  
  const postsPerPage = 6; 

  useEffect(() => {
    const getPosts = async () => {
      const fetchedPosts = await fetchPosts();
      const updatedPosts = fetchedPosts.map(post => ({
        ...post,
        dueDate: generateRandomDueDate(),
      }));

      let filteredPosts = updatedPosts;

      // Filter by priority if provided
      if (filterPriority) {
        filteredPosts = filteredPosts.filter(post => post.priority === filterPriority);
      }

      // Filter by due date if provided
      if (filterDueDate) {
        const [startDate, endDate] = filterDueDate;
        filteredPosts = filteredPosts.filter(post => {
          const dueDate = new Date(post.dueDate || '');
          return dueDate >= new Date(startDate) && dueDate <= new Date(endDate);
        });
      }

      setPosts(filteredPosts);
    };

    getPosts();
  }, [filterPriority, filterDueDate]);

  const generateRandomDueDate = () => {
    const currentDate = new Date();
    const randomDaysToAdd = Math.floor(Math.random() * 30); // Random days up to 30
    const newDate = new Date(currentDate.getTime() + randomDaysToAdd * 24 * 60 * 60 * 1000);
    return newDate.toISOString().split('T')[0]; // Format: YYYY-MM-DD
  };

  // Calculate the indices of the first and last posts on the current page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  // Get the current posts to display
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const handleNextPage = () => {
    if (currentPage < Math.ceil(posts.length / postsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="text-gray-100 text">
      {posts.length === 0 ? (
        <div><NoTask /></div>
      ) : (
        <div>
          <div className='mt-10 mx-5 grid grid-cols-3 gap-8'>
            {currentPosts.map((post) => (
              <div
                key={post.id}
                className={`bg-yellow-100 w-[250px] h-[150px] px-2 py-3 rounded-xl`}
              >
                <h1 className=' text-black font-bold text-lg ml-2 truncate'>
                  {post.title}
                </h1>
                <p className='text-black text-xs font-semibold ml-2 mt-2 h-[65px] limited-text'>
                  {post.body}
                </p>
                <div className='flex gap-4 ml-2 mt-1'> 
                  <p className='text-black text-[10px] bg-transparent/10 py-1 px-3 rounded-lg'>
                    {post.userId}
                  </p>
                  <p className={`text-black text-[10px] py-1 px-3 rounded-lg ml-3 ${post.priority === 'high' ? 'bg-red-500/40' : post.priority === 'medium' ? 'bg-yellow-500/40' : 'bg-green-500/40'}`}>
                    {post.priority}
                  </p>
                  <p className='text-black text-[10px] bg-transparent/10 p-1 rounded-lg'>
                    {post.dueDate}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-4">
            <button
              onClick={handlePreviousPage}
              className={`mr-2 px-4 py-2 rounded ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'bg-blue-500 text-white'}`}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <button
              onClick={handleNextPage}
              className={`ml-2 px-4 py-2 rounded ${currentPage >= Math.ceil(posts.length / postsPerPage) ? 'opacity-50 cursor-not-allowed' : 'bg-blue-500 text-white'}`}
              disabled={currentPage >= Math.ceil(posts.length / postsPerPage)}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostsList;
