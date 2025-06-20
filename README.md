# Unicorn Flow Task Management Web App
![Logo](https://github.com/user-attachments/assets/f0c8f4c7-f3de-4097-a3cb-63b5da377ccc)

The front-end of a task management web app that uses HTML, CSS, and vanilla JavaScript to allow users to add, delete, and mark tasks as complete, each change logged to the console log in JSON.

## Project Description

Unicorn Flow is a task management app that features a pastel rainbow color palette and a cute logo to bring joy to any to-do list in a fun and gamified way! This project is the culmination of what I learned in my WEB 110 - Webscripting class at Wake Technical Community College. For our final project we were tasked with creating the frontend dvelopment and web design for a task management web application using only HTML, CSS, and vanilla JavaScript. 

### Required Features

For the assignment, we were provided a list of requirments that our web app needed to have along with an example for inspiration: 


**Functional Requirements**

Below is a list of the required features for the project:

- Input field where users can enter a task name
- Dropdown menu to select task priority (High, Medium, Low)
- Checkbox for marking a task as important
- Users should be able to submit tasks via a form
- Checkbox for marking a task as completed (or done)
- Users must be able to toggle task completion
- Submit button to add the task to the list
- Delete button to remove the task to the list
- Users must be able to delete tasks
- Date to show when the task was added using the Date object
- Div with an id of "taskmanager" using .innerHTML where tasks will be displayed dynamically
- Important tasks must be highlighted in red
- Completed tasks must have a strikethrough
- Tasks must be stored in an array of objects with the following properties and logged in the console in JSON:

```
{
  id: 1,
  name: "Finish JavaScript project",
  priority: "High",
  isImportant: true,
  isCompleted: false,
  date: today﻿
  }

```

**Non-Functional Requirements**
- Application must be coded using vanilla JavaScript (no external libraries or frameworks)
- Code must follow clean coding practices, including proper indentation, meaningful variable names, and comments
- UI should be responsive and visually intuitive
- Application must prevent invalid input, such as empty task names

**Example Video**

[![Watch the video](https://img.youtube.com/vi/qM3pAJmL8Xg/hqdefault.jpg)](https://youtu.be/watch?v=qM3pAJmL8Xg)

https://youtu.be/qM3pAJmL8Xg
<br/>

### Fun Features

These are the features that I added to enhance user experience, but were not required features of the assignment:

- <ins>Confetti:</ins> Whenever a task is completed, confetti falls down the screen to add an element of gamification and adds to the overall feeling of joy I want users to feel when using Unicorn Flow
- <ins>Modal Form:</ins> The form users fill out to add tasks is in a modal that appears only when users need to add a new task and disappears when the user is finished entering their new task to create a more clean and uncluttered user interface 


## Building Unicorn Flow

Building Unicorn Flow took about 2 weeks which I started and completed in April 2025. After reading the requirements and watching the example video as a jumping off point, I started first with the development to make sure I hit all of the functional requirements, then moved onto the design and the overall look of Unicorn Flow.

**Development Challenges**

After watching the example video, two ideas came to mind on how I could improve upon the user experience of the sample task manager in the video:
1. Using a table to organize the task information in an organzied fashion
2. Putting the form into a popup window to give the task management dashboard a more clean look since the form is only needed when a user is creating a new task

Not knowing exactly how to create these elements, I consulted ChatGPT on how to code them and ChatGPT delivered! I was able to easily incorporate these ideas into my code and moved on to coding the rest of the required elements. 

Tools Used:
- Visual Studio Code
- ChatGPT

**Design Challenges**

Once all of the functionalities were built, I started thinking about the branding and overall feel that I wanted the web app to have. The biggest question that I had to ask myself when deciding on the aesthetic of the web app was: 
> Do I want to make the web app look "professional" or do I want to make something that I like?

Tools Used:
- Color Hunt
- Coolors
- Canva
- Google Fonts
- Visual Studio Code
- ChatGPT

## Future Steps
