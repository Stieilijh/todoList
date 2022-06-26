import Project from "./Project";
import Task from "./Task";
import TodoList from "./Todolist";

let currentProjectName = "Today";

export default function setupNavBar(todoList) {
  //NavBar Projects menu
  MakeaddProjectFormInvisible();
  UpdateProjectNames(todoList);

  MakeaddTaskFormInvisible();
  UpdateProjectTasks(todoList);

  //cancel new project
  document.querySelector("#cancelNewProject").addEventListener("click", () => {
    MakeaddProjectFormInvisible();
  });
  //cancel new task
  document.querySelector("#cancelNewTask").addEventListener("click", () => {
    MakeaddTaskFormInvisible();
  });

  //add project button ActionListener
  document.querySelector("#addProjectBtn").addEventListener("click", () => {
    addProjectBtn.style.display = "none";
    document.querySelector("#addProjectFormDiv").style.display = "block";
  });

  //add task button ActionListener
  document.querySelector("#addTaskBtn").addEventListener("click", () => {
    addTaskBtn.style.display = "none";
    document.querySelector("#addTaskFormDiv").style.display = "block";
  });
  //addProjectform submit
  document
    .querySelector("#createNewProjectBtn")
    .addEventListener("click", () => {
      const name = document.querySelector("#addProjectNameInput").value;
      if (todoList.has(name)) {
        alert("Project already exists");
      } else if (name === "") {
        alert("Name can't be empty");
      } else {
        MakeaddProjectFormInvisible();
        todoList.addproject(new Project(name));
        UpdateProjectNames(todoList);
      }
    });
  //addTaskform submit
  document.querySelector("#createNewTaskBtn").addEventListener("click", () => {
    const name = document.querySelector("#addTaskNameInput").value;
    const date = document.querySelector("#addDueDateInput").value;
    if (findCurrentProject(todoList).has(name)) {
      alert("Task already exists");
    } else if (name === "") {
      alert("Task can't be empty");
    } else {
      MakeaddTaskFormInvisible();
      findCurrentProject(todoList).addTask(new Task(name, date));
      UpdateProjectTasks(todoList);
    }
  });
}

function UpdateProjectNames(todoList) {
  const projectsDiv = document.querySelector("#projects");
  projectsDiv.innerHTML = "";
  todoList.getProjects().forEach((element) => {
    const projectDiv = document.createElement("div");
    const projectText = document.createElement("p");
    projectDiv.id = element.getName() + "div";
    projectText.id = element.getName();
    projectText.textContent = element.getName();
    projectDiv.appendChild(projectText);
    projectDiv.classList = "projectList";
    projectsDiv.appendChild(projectDiv);
    //changing projects
    projectText.addEventListener("click", () => {
      currentProjectName = element.getName();
      UpdateProjectTasks(todoList);
    });
    //styling the new project
    projectDiv.style.display = "flex";
    projectDiv.style.justifyContent = "space-around";
    projectDiv.style.alignItems = "center";
    //delete project btn
    const delBtn = document.createElement("button");
    delBtn.id = element.getName() + "DelBtn";
    delBtn.textContent = "x";
    delBtn.classList = "cancelBtns";
    delBtn.addEventListener("click", () => {
      todoList.deleteproject(element.getName());
      UpdateProjectNames(todoList);
    });
    projectDiv.appendChild(delBtn);
  });
}
function MakeaddProjectFormInvisible() {
  document.querySelector("#addProjectBtn").style.display = "block";
  document.querySelector("#addProjectFormDiv").style.display = "none";
}

function UpdateProjectTasks(todoList) {
  //task text
  const currentProject = findCurrentProject(todoList);
  if (!currentProject) {
    return;
  }
  const tasksDiv = document.querySelector("#tasks");
  tasksDiv.innerHTML = "";
  currentProject.getTasks().forEach((task) => {
    const taskDiv = document.createElement("div");
    const taskText = document.createElement("p");
    taskDiv.id = task.getName().slice(0, 4) + "div";
    taskText.id = task.getName().slice(0, 4);
    taskText.textContent = task.getName();
    taskDiv.classList = "taskList";
    tasksDiv.appendChild(taskDiv);
    taskDiv.appendChild(taskText);
  });
}

function MakeaddTaskFormInvisible() {
  document.querySelector("#addTaskBtn").style.display = "block";
  document.querySelector("#addTaskFormDiv").style.display = "none";
}

function findCurrentProject(todoList) {
  if (todoList.isEmpty()) {
    return false;
  }
  return todoList.getProject(currentProjectName);
}
