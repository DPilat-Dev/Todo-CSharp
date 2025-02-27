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
git clone https://github.com/DPilat-Dev/Todo-CSharp.git
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
Here is a MongoDb Docker Compose
```
version: '3.8'

services:
  mongodb:
    image: mongo:latest
    container_name: mongodb
    restart: always
    ports:
      - "27017:27017"
    environment:
      MONGO_INITDB_DATABASE: Tasks  # This ensures MongoDB initializes with the 'Tasks' database
    volumes:
      - mongodb_data:/data/db

volumes:
  mongodb_data:
    driver: local

```
Create The Docker container
```sh
docker-compose up -d
```
Check is the Tasks DB exists
```sh
show dbs
use Tasks
show collections

```

Ensure MongoDB is running and set up an API to handle:
- **GET /api/ToDo** → Fetch all tasks
- **GET /api/ToDo/id** → Fetch a task
- **POST /api/ToDo** → Create a new task
- **PUT /api/ToDo/:id** → Update a task
- **DELETE /api/ToDo/:id** → Remove a task

##⚡API Endpoints
| Method | Endpoint        | Description              |
|--------|----------------|--------------------------|
| GET    | `/api/ToDo`    | Fetch all tasks         |
| GET    | `/api/ToDo/:id`    | Fetch a tasks         |
| POST   | `/api/ToDo`    | Create a new task       |
| PUT    | `/api/ToDo/:id` | Update task details     |
| DELETE | `/api/ToDo/:id` | Delete a task           |

## 📷 ScreenShots
![image](https://github.com/user-attachments/assets/7e408171-4d6b-4db6-a66a-168bd71826fc)
![image](https://github.com/user-attachments/assets/8b65e04f-81b5-408f-b174-a0b73e939385)
![image](https://github.com/user-attachments/assets/1f7ddbeb-4cf3-4b4d-a259-89fad6fde253)



