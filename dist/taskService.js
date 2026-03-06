"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTask = addTask;
exports.listTasks = listTasks;
exports.updateTask = updateTask;
exports.deleteTask = deleteTask;
exports.changeStatus = changeStatus;
const fs = require("fs");
const path = require("path");
const FILE_PATH = path.join(__dirname, '../tasks.json');
function readTasks() {
    if (!fs.existsSync(FILE_PATH))
        return [];
    const data = fs.readFileSync(FILE_PATH, 'utf-8');
    return JSON.parse(data);
}
function saveTasks(tasks) {
    fs.writeFileSync(FILE_PATH, JSON.stringify(tasks, null, 2));
}
function addTask(title) {
    const tasks = readTasks();
    const newTask = {
        id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
        title,
        status: 'todo',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    };
    tasks.push(newTask);
    saveTasks(tasks);
    console.log(`Added task: [${newTask.id}] ${newTask.title}`);
}
function listTasks(filter) {
    let tasks = readTasks();
    if (filter)
        tasks = tasks.filter(t => t.status === filter);
    if (!tasks.length)
        return console.log('No tasks found.');
    tasks.forEach(t => console.log(`[${t.id}] ${t.title} - ${t.status}`));
}
function updateTask(id, title) {
    const tasks = readTasks();
    const task = tasks.find(t => t.id === id);
    if (!task)
        return console.log('Task not found.');
    task.title = title;
    task.updatedAt = new Date().toISOString();
    saveTasks(tasks);
    console.log(`Updated task [${id}]`);
}
function deleteTask(id) {
    let tasks = readTasks();
    const task = tasks.find(t => t.id === id);
    if (!task)
        return console.log('Task not found.');
    tasks = tasks.filter(t => t.id !== id);
    saveTasks(tasks);
    console.log(`Deleted task [${id}]`);
}
function changeStatus(id, status) {
    const tasks = readTasks();
    const task = tasks.find(t => t.id === id);
    if (!task)
        return console.log('Task not found.');
    task.status = status;
    task.updatedAt = new Date().toISOString();
    saveTasks(tasks);
    console.log(`Task [${id}] marked as ${status}`);
}
