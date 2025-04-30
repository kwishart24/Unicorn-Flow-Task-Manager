"use strict";

//Task Counter
let taskCounter = 0;

//Creating tasks array
const taskList = [];

//Form
const myForm = document.getElementById("myForm");
const newTaskHeader = document.getElementById("newTaskHeader");
const newTaskBtn = document.getElementById("newTaskBtn");

//Capturing Data from Modal Form

document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevents the page from refreshing
  //Grabbing the input data from the form
  const taskName = document.getElementById("taskName").value;
  const dropdown = document.getElementById("priority");
  const priority = dropdown.value;
  const checkbox = document.getElementById("importance");
  //importance will return true or false
  const importance = checkbox.checked;

  const now = new Date();
  const formattedDate = now.toLocaleDateString();

  //Declaring the table
  const table = document
    .getElementById("myTable")
    .getElementsByTagName("tbody")[0];
  //Inserting the new row
  const newRow = table.insertRow();

  //Increase count for each task created
  taskCounter++;

  //Inserting the new cells in the new row
  //Creating the done check box
  const checkboxCell = newRow.insertCell(0);
  const doneCheckbox = document.createElement("input");
  doneCheckbox.type = "checkbox";
  doneCheckbox.checked = false;
  doneCheckbox.classList.add("doneCheck");
  doneCheckbox.dataset.id = taskCounter;
  doneCheckbox.addEventListener("change", function () {
    // Make sure it only applies if the checkbox has the correct class
    if (this.classList.contains("doneCheck")) {
      const row = this.closest("tr");
      const cells = row.querySelectorAll("td:not(:first-child)");

      if (this.checked) {
        cells.forEach((cell) => (cell.style.textDecoration = "line-through"));
      } else {
        cells.forEach((cell) => (cell.style.textDecoration = "none"));
      }

      //Updated isCompleted in taskList
      const taskId = parseInt(this.dataset.id);
      const task = taskList.find((t) => t.id === taskId);
      if (task) {
        task.isCompleted = this.checked;
        console.log(JSON.stringify(taskList));
        row.style.backgroundColor = "#A1EEBD";
      }
    }
  });

  checkboxCell.appendChild(doneCheckbox);

  //Adding the rest of the cells
  //const importanceCell = newRow.insertCell(1);
  const taskNameCell = newRow.insertCell(1);
  const priorityCell = newRow.insertCell(2);
  const dateCell = newRow.insertCell(3);

  //Creating the delete button cell
  const deleteCell = newRow.insertCell(4);
  const deleteBtn = document.createElement("img");
  //const deleteBtn = document.createElement("button");
  //deleteBtn.textContent = "Delete";
  deleteBtn.src = "images/trash1.png";
  deleteBtn.alt = "Delete";
  deleteBtn.classList.add("trash-icon");
  deleteBtn.width = 20;
  deleteBtn.height = 20;

  // Add event listener to delete this row and task
  deleteBtn.addEventListener("click", function () {
    const row = this.closest("tr");
    const taskId = parseInt(doneCheckbox.dataset.id);

    // Remove the row from the table
    row.remove();

    // Remove task from array
    const index = taskList.findIndex((t) => t.id === taskId);
    if (index !== -1) {
      taskList.splice(index, 1);
    }

    console.log(JSON.stringify(taskList));
  });

  deleteCell.appendChild(deleteBtn);

  //Filling the cells with the captured data
  if (importance === true) {
    //importanceCell.innerHTML = "Important!";
    newRow.style.backgroundColor = "#FDB7EA";
  } else if (priority === "High") {
    //importanceCell.innerHTML = "";
    newRow.style.backgroundColor = "#FFD5C2";
  } else if (priority === "Medium") {
    newRow.style.backgroundColor = "#FBF3B9";
  } else if (priority === "Low") {
    newRow.style.backgroundColor = "white";
  } else {
    newRow.style.backgroundColor = "white";
  }

  taskNameCell.innerHTML = taskName;
  priorityCell.innerHTML = priority;
  dateCell.innerHTML = formattedDate;

  //Create an object and add it to the array
  const tasks = {
    id: taskCounter,
    name: taskName,
    priority: priority,
    isImportant: importance,
    isCompleted: doneCheckbox.checked,
    date: formattedDate,
  };

  taskList.push(tasks);

  //Prints list of tasks to console log
  console.log(JSON.stringify(taskList));

  //Clear the form
  this.reset();
});
