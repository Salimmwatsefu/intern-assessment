
# Task Flow

## Description

Task Flow is a simple Todo List App that helps you manage your tasks well to help increase in productivity

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Components](#components)
4. [API](#api)
5. [Edge Cases](#edge-cases)


## Installation

Instructions on how to install and set up your project locally.

### Prerequisites

- Node.js (version 22.2.0)
- npm (version 10.7.0)

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/Salimmwatsefu/intern-assessment.git
   ```

2. Navigate to the project directory:
   ```bash
   cd intern-assessment
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```


## Usage

Once the project is set up, follow these steps to use the application:

1. **Navigating the App:**
   - Upon launching the application, you'll land on the homepage which displays all tasks, the Add Task Form, which maybe opened or closed based on your liking.
   - Use the navigation links provided to filter tasks based on priority or due date.

2. **Adding a Task:**
   - Fill in the required fields (Task Name, Description, User ID) and click "Add Task" to submit.
   - You'll receive a notification indicating if the task addition was successful or failed.

3. **Viewing Task Details:**
   - The task details include the task name, description, user ID, priority, and due date.
   - In the navigation links, we have All, High Priority and Due
   - Under All, you can view all tasks
   - Under High Prioty, you can view high priority tasks
   - Under Due, you can see all task which are almost due, upto 2 days 



## Components

### 1. Layout Component
The Layout component serves as the main layout wrapper for the application, providing a consistent structure across pages.

### 2. AddTask Component
Manages task addition by providing a form for users to input task details such as name, description, and user ID. Upon submission, the task is added to the list. It also displays notifications for successful or failed task addition.

### 3. SubNav Component
Manages sub-navigation by providing links to different task views and a button to toggle the sidebar.

### 4. AllTasks Component
Renders a list of all tasks.

### 5. HighPriorityTasks Component
Renders a list of tasks with high priority.

### 6. DueTasks Component
Renders a list of tasks due within the next two days.

### 7. NoTask Component
Displays a message when there are no tasks to show.

### 8. TaskContext Component
Manages the state related to task features, specifically controlling the visibility of the add task feature. It provides a context for toggling the visibility of the add task form.

### 9. TaskItem Component
Displays individual task details in a card-like format.

### 10. TasksList Component
Displays a list of tasks fetched from an external API. Supports pagination and filtering by priority and due date. Priorities and due dates are generated randomly for each task after fetching to simulate real data.
Other components such as AllTasks, DueTasks, and HighPriorityTasks utilize this component to display specific subsets of tasks.

### 11. Task Component

Purpose: Provides typescript interfaces for defining task objects and an array of task priorities. Manages the retrieval and addition of tasks from/to an external API.

   ### a. fetchTasks Function
   Purpose: Fetches tasks from an external API (https://jsonplaceholder.typicode.com/posts) and assigns random priorities to each task.

   ### b. addTask Function
   Purpose: Posts a new task to an external API (https://jsonplaceholder.typicode.com/posts). Simulates task addition by generating a random ID starting from 101.


## API

Link: https://jsonplaceholder.typicode.com/posts

This is the API Link which just a placeholder

You can read more about it here : https://jsonplaceholder.typicode.com/


## Edge Cases


### Problem:
Currently, the task data is generated randomly each time the component mounts or updates. As a result, users may observe different priorities and due dates each time they interact with the application, which can be confusing and misleading.

### Reasoning:
The API used to fetch tasks does not provide fields for priorities and due dates. To enhance the realism and usability of the todo list application, it's important to incorporate features like task priorities and due dates. By generating these values randomly and manually, we simulate real-world scenarios where tasks have varying levels of importance and deadlines.







