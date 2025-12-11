// Grab the elements we care about
let addtaskbutton = document.querySelector('.addtask'); // The button to show the form
let addnewform = document.querySelector('.form');      // The form container
let finaladd = document.getElementById('addtask-form'); // The submit button inside the form
let table = document.querySelector('.table');          // The table where tasks go
let description = document.getElementById('Description'); // Task description input
let Priority = document.getElementById('Priority');       // Task priority input

// We'll use this array to hold all tasks in memory
let tasks = [];

// =======================
// 1️⃣ Load saved tasks from localStorage when page opens
// =======================
window.addEventListener("DOMContentLoaded", () => {
    // Try to load tasks from localStorage
    // If nothing is there yet, start with an empty array
    let saved = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = saved;

    // Loop through saved tasks and render them on the table
    saved.forEach(task => {
        // false means "don’t save to localStorage again" since these are already saved
        addnewtask(task.priority, task.description, task.status, task.id, false);
    });
});

// =======================
// 2️⃣ Helper: Save tasks array to localStorage
// =======================
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// =======================
// 3️⃣ Helper: Create a button for table cells
// =======================
function addbutton(text){
    let btn = document.createElement('button');
    btn.textContent = text;
    return btn;
}

// =======================
// 4️⃣ Add a new task to the table (and optionally save it)
// =======================
function addnewtask(priority, description, status = "❌", id = Date.now(), shouldSave = true) {

    // Insert a new row at the end of the tbody
    let row = table.children[1].insertRow();
    row.setAttribute("data-id", id); // tag row with task id

    // Create a task object
    let task = { id, priority, description, status };

    // If this is a brand new task, push it to the array and save
    if (shouldSave) {
        tasks.push(task);
        saveTasks();
    }

    // Create table cells
    for (let i = 0; i <= 4; i++) {
        let cell = row.insertCell(i);
        cell.setAttribute('class', 'heading');

        switch(i){
            case 0: // Index
                cell.textContent = tasks.indexOf(task);
                break;

            case 1: // Priority
                cell.textContent = priority;
                break;

            case 2: // Description
                cell.textContent = description;
                break;

            case 3: // Status button
                let btnstatus = addbutton(status);
                cell.appendChild(btnstatus);

                btnstatus.addEventListener('click', () => {
                    // Toggle status
                    btnstatus.textContent = btnstatus.textContent === "❌" ? "✅" : "❌";

                    // Update the task object in memory
                    task.status = btnstatus.textContent;
                    saveTasks();
                });
                break;

            case 4: // Remove button
                let btndelete = addbutton('Remove Task');
                cell.appendChild(btndelete);

                btndelete.addEventListener('click', () => {
                    // Remove row from table
                    row.remove();

                    // Remove from tasks array and save
                    tasks = tasks.filter(t => t.id !== id);
                    saveTasks();
                });
                break;

            default:
                break;
        }
    }
}

// =======================
// 5️⃣ Show/hide the add task form
// =======================
addtaskbutton.addEventListener('click', () => {
    addnewform.classList.toggle('show');
});

// =======================
// 6️⃣ Handle form submission
// =======================
finaladd.addEventListener('click', (e) => {
    e.preventDefault(); // stop page reload

    let descriptionentered = description.value;
    let Priorityentered = Priority.value;

    // If inputs are empty, do nothing
    if(descriptionentered.trim() === "" || Priorityentered.trim() === "") return;

    // Add new task to table and save
    addnewtask(Priorityentered, descriptionentered);

    // Clear form fields
    description.value = "";
    Priority.value = "";
});
