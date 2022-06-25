import Task from "./assets/Task";
import TodoList from "./assets/Todolist";
import Project from "./assets/Project";

//const TodoListDiv = document.querySelector("#todolist");
const projectsDiv = document.querySelector("#projects");

const todoList = new TodoList();
function addProjectToDiv(name) {
  const projectDiv = document.createElement("div");
  projectDiv.id = name;
  projectDiv.textContent = name;
  projectDiv.classList = "projectList";
  projectsDiv.appendChild(projectDiv);
}
function UpdateProjectNames() {
  todoList.getprojects().forEach((element) => {
    const projectDiv = document.createElement("div");
    projectDiv.id = element.getName();
    projectDiv.textContent = element.getName();
    projectDiv.classList = "projectList";
    projectsDiv.appendChild(projectDiv);
  });
}
function MakeaddProjectFormInvisible() {
  document.querySelector("#addProjectBtn").style.display = "block";
  document.querySelector("#addProjectFormDiv").style.display = "none";
}

window.onload = () => {
  MakeaddProjectFormInvisible();
  UpdateProjectNames();

  //add project button ActionListner
  document.querySelector("#addProjectBtn").addEventListener("click", () => {
    addProjectBtn.style.display = "none";
    document.querySelector("#addProjectFormDiv").style.display = "block";
  });
  //addProjectform submit
  document
    .querySelector("#addProjectForm")
    .addEventListener("submit", (event) => {
      event.preventDefault();
      const name = document.querySelector("#addProjectNameInput").value;
      if (todoList.has(name)) {
        alert("Project already exists");
      } else {
        MakeaddProjectFormInvisible();
        todoList.addproject(new Project(name));
        addProjectToDiv(name);
      }
    });
};
