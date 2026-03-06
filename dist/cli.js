#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const taskService_1 = require("./taskService");
const args = process.argv.slice(2);
const command = args[0];
switch (command) {
    case 'add':
        (0, taskService_1.addTask)(args.slice(1).join(' '));
        break;
    case 'list':
        if (args[1] && ['todo', 'in-progress', 'done'].includes(args[1])) {
            (0, taskService_1.listTasks)(args[1]);
        }
        else {
            (0, taskService_1.listTasks)();
        }
        break;
    case 'update':
        (0, taskService_1.updateTask)(Number(args[1]), args.slice(2).join(' '));
        break;
    case 'delete':
        (0, taskService_1.deleteTask)(Number(args[1]));
        break;
    case 'mark-in-progress':
        (0, taskService_1.changeStatus)(Number(args[1]), 'in-progress');
        break;
    case 'mark-done':
        (0, taskService_1.changeStatus)(Number(args[1]), 'done');
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
