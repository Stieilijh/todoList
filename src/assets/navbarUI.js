import Project from "./Project";

export default function setupNavBar(todoList) {
  MakeaddProjectFormInvisible();
  UpdateProjectNames(todoList);

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
        UpdateProjectNames(todoList);
      }
    });
}

function UpdateProjectNames(todoList) {
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
      UpdateProjectNames(todoList);
    });
    projectDiv.appendChild(delBtn);
  });
}
function MakeaddProjectFormInvisible() {
  document.querySelector("#addProjectBtn").style.display = "block";
  document.querySelector("#addProjectFormDiv").style.display = "none";
}
