"use strict";

//Task Counter
let taskCounter = 0;

//Creating tasks array
const taskList = [];

//Modal Form
const modal = document.getElementById("myModal");
const newTaskHeader = document.getElementById("newTaskHeader");
const newTaskBtn = document.getElementById("newTaskBtn");
const closeBtn = document.querySelector(".close");

newTaskBtn.addEventListener("click", function () {
  (modal.style = "display: flex"),
    "justify-content: center",
    "align-items: center";
});

closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

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

  // If priority is "High", automatically set importance to true
  /*if (priority === "High") {
    importance = true;
    checkbox.checked = true;
  } else {
    importance = false;
    checkbox.checked = false;
  }*/

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
  doneCheckbox.checked = false; // This makes sure it's unchecked
  doneCheckbox.classList.add("doneCheck"); //Adds class of doneCheck to each completion checkbox created
  doneCheckbox.dataset.id = taskCounter; //store task ID in a data attribute
  doneCheckbox.addEventListener("change", function () {
    // Make sure it only applies if the checkbox has the correct class
    if (this.classList.contains("doneCheck")) {
      const row = this.closest("tr");
      const cells = row.querySelectorAll("td:not(:first-child)"); // Exclude the checkbox cell

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
    const taskId = parseInt(doneCheckbox.dataset.id); // use the dataset from the checkbox

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

  /*if (priority.value === "High") {
    newRow.style.backgroundColor = "#FFD5C2";
  } else if (priority.value === "Medium") {
    newRow.style.backgroundColor = "#FBF3B9";
  } else {
    newRow.style.backgroundColor = "#A1EEBD";
  }*/

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

  //Hide the form once submitted
  modal.style.display = "none";

  // Optional: Clear the form
  this.reset();
});

//Setup Canvas
const canvas = document.getElementById("confettiCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// Create confetti particles
function createConfettiParticle() {
  // Confetti Colors
  const confettiColors = [
    "#FDB7EA",
    "#FFD5C2",
    "#FBF3B9",
    "#A1EEBD",
    "#B7B1F2",
    "#ffffff",
  ];
  const color =
    confettiColors[Math.floor(Math.random() * confettiColors.length)];
  return {
    x: Math.random() * canvas.width,
    y: Math.random() * -canvas.height,
    size: Math.random() * 5 + 2,
    speedY: Math.random() * 3 + 2,
    color: color,
  };
}

let particles = [];

function launchConfetti() {
  particles = Array.from({ length: 100 }, createConfettiParticle);
  requestAnimationFrame(updateConfetti);
}

function updateConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((p) => {
    p.y += p.speedY * 2;
    ctx.fillStyle = p.color;
    ctx.fillRect(p.x, p.y, p.size, p.size);
  });

  if (particles.some((p) => p.y < canvas.height)) {
    requestAnimationFrame(updateConfetti);
  }
}

//Event Listener for confetti
document.addEventListener("change", function (e) {
  if (e.target.classList.contains("doneCheck") && e.target.checked) {
    launchConfetti();
  }
});
