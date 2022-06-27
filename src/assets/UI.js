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
    if (todoList.isEmpty()) {
      alert("Make a project first!!");
      return;
    }
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
        currentProjectName = name;
        UpdateProjectTasks(todoList);
        storeList(todoList);
      }
    });
  //addTaskform submit
  document.querySelector("#createNewTaskBtn").addEventListener("click", () => {
    const name = document.querySelector("#addTaskNameInput").value;
    const date = document.querySelector("#addDueDateInput").value;
    const priority = document.querySelector("#addPriorityInput").value;
    if (findCurrentProject(todoList).has(name)) {
      alert("Task already exists");
    } else if (name === "") {
      alert("Task can't be empty");
    } else {
      MakeaddTaskFormInvisible();
      findCurrentProject(todoList).addTask(
        new Task(name, date, parseInt(priority))
      );
      UpdateProjectTasks(todoList);
      storeList(todoList);
      initializeMainProjects(todoList);
    }
  });
}

function UpdateProjectNames(todoList) {
  const projectsDiv = document.querySelector("#projects");
  projectsDiv.innerHTML = "";
  todoList.getProjects().forEach((project) => {
    const projectDiv = document.createElement("div");
    const projectText = document.createElement("p");
    projectDiv.id = project.getName() + "div";
    projectText.id = project.getName();
    projectText.textContent = project.getName();
    projectDiv.appendChild(projectText);
    projectDiv.classList = "projectList";
    projectsDiv.appendChild(projectDiv);
    //changing projects
    projectText.addEventListener("click", () => {
      currentProjectName = project.getName();
      UpdateProjectTasks(todoList);
    });
    //styling the new project
    projectDiv.style.display = "flex";
    projectDiv.style.justifyContent = "space-around";
    projectDiv.style.alignItems = "center";
    //delete project btn
    if (!(project.getName() == "Today" || project.getName() == "This Week")) {
      const delBtn = document.createElement("button");
      delBtn.id = project.getName() + "DelBtn";
      delBtn.textContent = "x";
      delBtn.classList = "cancelBtns";
      delBtn.addEventListener("click", () => {
        todoList.deleteproject(project.getName());
        storeList(todoList);
        UpdateProjectNames(todoList);
        initializeMainProjects(todoList);
        if (!todoList.has(currentProjectName)) {
          if (todoList.isEmpty()) {
            document.querySelector("#tasks").innerHTML = "";
          } else {
            currentProjectName = todoList.getProjects()[0].getName();
            UpdateProjectTasks(todoList);
          }
        }
      });
      projectDiv.appendChild(delBtn);
    }
    //adds tasks from all other projects to today and this week
    initializeMainProjects(todoList);
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
    taskDiv.appendChild(taskText);
    taskDiv.classList = "taskList";
    //styling
    taskDiv.style.display = "flex";
    taskDiv.style.backgroundColor = task.getBackgroundColor(task.getPriority());
    taskDiv.style.gap = "5%";
    taskDiv.style.alignItems = "center";
    //due date
    const dateP = document.createElement("p");
    dateP.id = task.getName().slice(0, 4) + "date";
    dateP.textContent = task.getFormattedDate();
    taskDiv.appendChild(dateP);
    //task priority
    const priority = document.createElement("p");
    priority.id = task.getName().slice(0, 4) + "priority";
    priority.textContent = task.getPriority();
    taskDiv.appendChild(priority);
    //del button
    const delBtn = document.createElement("button");
    delBtn.id = task.getName().slice(0, 4) + "DelBtn";
    delBtn.textContent = "x";
    delBtn.classList = "cancelBtns";
    delBtn.addEventListener("click", () => {
      currentProject.deleteTask(task.getName());
      storeList(todoList);
      UpdateProjectTasks(todoList);
    });
    taskDiv.appendChild(delBtn);
    tasksDiv.appendChild(taskDiv);
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

function storeList(todoList) {
  localStorage.setItem("todolist", JSON.stringify(todoList));
}

//adds tasks from all other projects to today and this week
function initializeMainProjects(todoList) {
  todoList.getProjects().forEach((project) => {
    if (!(project.getName() == "Today" || project.getName() == "This Week")) {
      project.getTasks().forEach((task) => {
        if (
          isToday(task.getDate()) &&
          !todoList.getProject("Today").has(task.getName())
        ) {
          todoList.getProject("Today").addTask(task);
        }
      });
    }
  });
}

const isToday = (someDate) => {
  const today = new Date();
  someDate = new Date(someDate);
  return (
    someDate.getDate() == today.getDate() &&
    someDate.getMonth() == today.getMonth() &&
    someDate.getFullYear() == today.getFullYear()
  );
};
