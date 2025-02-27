# Task Management App

## Overview
This is a **Task Management App** built with **React, TypeScript, and TailwindCSS**. It allows users to **create, edit, complete, and delete tasks** using a **MongoDB Database** with a **.NET Backend**. This Project is just to keep my skills sharp in the age of AI, and to reenforce that I still can create and api and plug it into a frontend App. This Project isnt anything special its was just a exercise.

## 📂 Frontend Project Structure
```
Frontend/
│── src/
│   ├── components/
│   │   ├── TaskItem.tsx  # Task component (includes edit modal)
│   │   ├── TaskForm.tsx  # Form for creating new tasks
│   ├── hooks/
│   │   ├── useTasks.ts  # Fetch all tasks
│   │   ├── useCreateTask.ts  # Create task mutation
│   │   ├── useUpdateTask.ts  # Update task mutation
│   │   ├── useDeleteTask.ts  # Delete task mutation
│   ├── models/
│   │   ├── UserTask.ts  # Task model definition
│   ├── services/
│   │   ├── api-client.ts  # Axios API client
│   ├── App.tsx  # Main app component
│── package.json
```

## 📂 Frontend Project Structure
```
Backend/
│── Controllers/
│   ├── ToDoController.cs # Controller for all the Endpoints that call the ToDoTaskService
│── Models/
│   ├── ToDoDatabaseSettings.cs # Model for Database Settings
│   ├── ToDoTask.cs # Main Model
│── Services/
│   ├── ToDoTasksService.cs # Service that does the Crud operations to Database
│── Program.cs #  .NET api Startup
│── appsettings.json #  API Settings
```
## 🎯 Features
- ✅ **Create Tasks** - Users can add tasks with a title & description.
- ✅ **Edit Tasks** - Tasks can be updated via a modal popup.
- ✅ **Mark Tasks as Complete** - Users can mark tasks as completed.
- ✅ **Delete Tasks** - Remove tasks from the list.
- ✅ **Automatic UI Refresh** - React Query ensures the UI updates dynamically.

## 🛠 Technologies Used
- **React 19** (UI Framework)
- **TypeScript** (Static Typing)
- **Tailwind CSS** (Styling)
- **React Query** (State Management & API Calls)
- **React Models** (Models)
- **Axios** (HTTP Requests)
- **MongoDB** (Database)
- **.NET** (Backend)

## 🔧 Setup Instructions
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-repo/task-manager.git
cd task-manager
```

### 2️⃣ Install Frontend Dependencies
```sh
npm install
```

### 3️⃣ Start the Frontend Development Server
```sh
npm run dev
```

### 4️⃣ Backend Setup (API)
```sh
dotnet run
```
### 4️⃣ Backend Setup (MongoDB)
```sh
docker run --name mongodb -p 27017:27017 -d mongodb/mongodb-community-server:latest
```
Inside docker container:
```sh
use Tasks
```

Ensure MongoDB is running and set up an API to handle:
- **GET /api/tasks** → Fetch all tasks
- **POST /api/tasks** → Create a new task
- **PUT /api/tasks/:id** → Update a task
- **DELETE /api/tasks/:id** → Remove a task

## API Endpoints
| Method | Endpoint        | Description              |
|--------|----------------|--------------------------|
| GET    | `/api/ToDo`    | Fetch all tasks         |
| POST   | `/api/ToDo`    | Create a new task       |
| PUT    | `/api/ToDo/:id` | Update task details     |
| DELETE | `/api/ToDo/:id` | Delete a task           |
