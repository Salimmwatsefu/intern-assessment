import React, { useState } from 'react';
import TasksList from './TasksList';


const DueTasks: React.FC = () => {
  // Calculate today's date and the date 2 days from now
  const today = new Date();
  const twoDaysFromNow = new Date();
  twoDaysFromNow.setDate(today.getDate() + 2);


  // Format the dates in YYYY-MM-DD format
  const todayFormatted = today.toISOString().split('T')[0];
  const twoDaysFromNowFormatted = twoDaysFromNow.toISOString().split('T')[0];

  return <TasksList filterDueDate={[todayFormatted, twoDaysFromNowFormatted]}   />;
};

export default DueTasks;
