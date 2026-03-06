# 🧰 CLI Task Manager

A simple and elegant **Command-Line Task Manager** built with **TypeScript** and **Node.js**.

This tool allows you to manage tasks directly from the terminal with a clean interface, colored output, and a structured table view.

---

## ✨ Features

- ➕ Add new tasks
- 📋 List all tasks
- 🔎 Filter tasks by status
- ✏️ Update task titles
- ❌ Delete tasks
- 🚧 Mark tasks as *in-progress*
- ✅ Mark tasks as *done*
- 💾 Tasks stored locally in a JSON file
- 🎨 Colored CLI output
- 📊 Beautiful table view in terminal

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/cli-task-manager.git
cd cli-task-manager


## ➕ Add a task

```bash
node dist/cli.js add "Task name"
```

Example:

```bash
node dist/cli.js add "Finish homework"
```

---

## 📋 List tasks

```bash
node dist/cli.js list
```

---

## 🔎 Filter tasks by status

```bash
node dist/cli.js list todo
node dist/cli.js list in-progress
node dist/cli.js list done
```

---

## ✏️ Update a task

```bash
node dist/cli.js update <id> "New task title"
```

Example:

```bash
node dist/cli.js update 1 "Finish math homework"
```

---

## ❌ Delete a task

```bash
node dist/cli.js delete <id>
```

Example:

```bash
node dist/cli.js delete 2
```

---

## 🚧 Mark task as in progress

```bash
node dist/cli.js mark-in-progress <id>
```

Example:

```bash
node dist/cli.js mark-in-progress 1
```

---

## ✅ Mark task as done

```bash
node dist/cli.js mark-done <id>
```

Example:

```bash
node dist/cli.js mark-done 1
```

---

## 👨‍💻 Created as a practice project for learning:

- TypeScript
- CLI application development
- File-based data storage
- Terminal UI formatting
- Clean project architecture
