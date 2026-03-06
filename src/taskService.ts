import { Task, TaskStatus } from './types';
import * as fs from 'fs';
import * as path from 'path';

const FILE_PATH = path.join(__dirname, '../tasks.json');

function readTasks(): Task[] {
  if (!fs.existsSync(FILE_PATH)) return [];
  const data = fs.readFileSync(FILE_PATH, 'utf-8');
  return JSON.parse(data);
}

function saveTasks(tasks: Task[]) {
  fs.writeFileSync(FILE_PATH, JSON.stringify(tasks, null, 2));
}

export function addTask(title: string) {
  const tasks = readTasks();
  const newTask: Task = {
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

export function listTasks(filter?: TaskStatus) {
  let tasks = readTasks();
  if (filter) tasks = tasks.filter(t => t.status === filter);
  if (!tasks.length) return console.log('No tasks found.');
  tasks.forEach(t => console.log(`[${t.id}] ${t.title} - ${t.status}`));
}

export function updateTask(id: number, title: string) {
  const tasks = readTasks();
  const task = tasks.find(t => t.id === id);
  if (!task) return console.log('Task not found.');
  task.title = title;
  task.updatedAt = new Date().toISOString();
  saveTasks(tasks);
  console.log(`Updated task [${id}]`);
}

export function deleteTask(id: number) {
  let tasks = readTasks();
  const task = tasks.find(t => t.id === id);
  if (!task) return console.log('Task not found.');
  tasks = tasks.filter(t => t.id !== id);
  saveTasks(tasks);
  console.log(`Deleted task [${id}]`);
}

export function changeStatus(id: number, status: TaskStatus) {
  const tasks = readTasks();
  const task = tasks.find(t => t.id === id);
  if (!task) return console.log('Task not found.');
  task.status = status;
  task.updatedAt = new Date().toISOString();
  saveTasks(tasks);
  console.log(`Task [${id}] marked as ${status}`);
}