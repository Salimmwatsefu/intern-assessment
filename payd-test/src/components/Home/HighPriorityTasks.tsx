import React from 'react';
import PostsList from './PostsList';

const HighPriorityPosts: React.FC = () => {
  return <PostsList filterPriority="high" />;
};

export default HighPriorityPosts;
