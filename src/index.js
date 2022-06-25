import Task from "./assets/Task";
import TodoList from "./assets/Todolist";
import Project from "./assets/Project";

const projectsDiv = document.querySelector("#projects");
const todoList = new TodoList();
todoList.getprojects().forEach((element) => {
  const projectDiv = document.createElement("div");
  projectDiv.id = element.getName();
  projectDiv.textContent = element.getName();
  projectDiv.classList = "projectList";
  projectsDiv.appendChild(projectDiv);
});

const TodoListDiv = document.querySelector("#todolist");
