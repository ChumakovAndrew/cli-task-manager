#!/usr/bin/env node
import {
  addTask,
  listTasks,
  updateTask,
  deleteTask,
  changeStatus,
} from './taskService';

const args = process.argv.slice(2);
const command = args[0];

switch (command) {
  case 'add':
    addTask(args.slice(1).join(' '));
    break;

  case 'list':
    if (args[1] && ['todo','in-progress','done'].includes(args[1])) {
      listTasks(args[1] as any);
    } else {
      listTasks();
    }
    break;

  case 'update':
    updateTask(Number(args[1]), args.slice(2).join(' '));
    break;

  case 'delete':
    deleteTask(Number(args[1]));
    break;

  case 'mark-in-progress':
    changeStatus(Number(args[1]), 'in-progress');
    break;

  case 'mark-done':
    changeStatus(Number(args[1]), 'done');
    break;

  default:
    console.log(`
Commands:
  add "task title"           Add a new task
  list [status]              List tasks (optionally filter by status)
  update <id> "new title"    Update task title
  delete <id>                Delete a task
  mark-in-progress <id>      Mark task as in-progress
  mark-done <id>             Mark task as done
    `);
}