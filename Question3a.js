// creates an empty array to store tasks as strings
const tasks = [];

// Define the addTask function to add a new task to the array
const addTask = (task) => {
    tasks.push(task);  // Add the new task to the array
    console.log(`Task "${task}" has been added.`);  // Print a message confirming the task was added
    return tasks.length;  // Return the updated number of tasks in the array
};

// Define a function to list all the tasks
const listAllTasks = () => {
    console.log("List of all tasks:");  
    tasks.forEach((task, index) => {
        // Loop through the tasks array and print each tasks
        console.log(`${index + 1}. ${task}`);  // adding 1 to the index so it doesnt start at 0 when priting out the number for each task
    });
};

// creating a fcuntion to delete something specific from the array
const deleteTask = (task) => {
    const taskIndex = tasks.indexOf(task);  // Find the index of the task in the array
    if (taskIndex !== -1) {  // Check if the task exists in the array
        tasks.splice(taskIndex, 1);  // Remove the task from the array
        console.log(`Task "${task}" has been deleted.`);  // Print a message letting you know that it worked
    } else {
        console.log(`Task "${task}" not found.`);  // this message will print if the task that we are looking for is not found 
    }
    return tasks.length;  // Returns the number of tasks after deletion 
};

// Adding a few tasks to the list
addTask("Go to class");
addTask("Do homework");
addTask("Review work");

// Display tasks 
listAllTasks();

// Deleting task
deleteTask("Go to class");
console.log(`Number of tasks after deletion: ${tasks.length}`);  // Show how many tasks are left

// Display tasks 
listAllTasks();