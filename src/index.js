import Task from "./assets/Task";
import TodoList from "./assets/Todolist";
import Project from "./assets/Project";

//const TodoListDiv = document.querySelector("#todolist");

const todoList = new TodoList();

function UpdateProjectNames() {
  const projectsDiv = document.querySelector("#projects");
  projectsDiv.innerHTML = "";
  todoList.getprojects().forEach((element) => {
    const projectDiv = document.createElement("div");
    projectDiv.id = element.getName();
    projectDiv.textContent = element.getName();
    projectDiv.classList = "projectList";
    projectsDiv.appendChild(projectDiv);
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
      UpdateProjectNames();
    });
    projectDiv.appendChild(delBtn);
  });
}
function MakeaddProjectFormInvisible() {
  document.querySelector("#addProjectBtn").style.display = "block";
  document.querySelector("#addProjectFormDiv").style.display = "none";
}

window.onload = () => {
  MakeaddProjectFormInvisible();
  UpdateProjectNames();

  //cancel new project
  document.querySelector("#cancelNewProject").addEventListener("click", () => {
    MakeaddProjectFormInvisible();
  });

  //add project button ActionListener
  document.querySelector("#addProjectBtn").addEventListener("click", () => {
    addProjectBtn.style.display = "none";
    document.querySelector("#addProjectFormDiv").style.display = "block";
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
        UpdateProjectNames();
      }
    });
};
