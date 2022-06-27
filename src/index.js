import Task from "./assets/Task";
import TodoList from "./assets/Todolist";
import Project from "./assets/Project";
import setupUI from "./assets/UI";
let todoList;

if (!localStorage.getItem("todolist")) {
  todoList = new TodoList();
} else {
  todoList = Object.assign(
    new TodoList(),
    JSON.parse(localStorage.getItem("todolist"))
  );
  todoList.setprojects(
    todoList.getProjects().map((project) => {
      return Object.assign(new Project(), project);
    })
  );
  todoList.getProjects().forEach((project) => {
    project.setTasks(
      project.getTasks().map((task) => {
        return Object.assign(new Task(), task);
      })
    );
  });
}

setupUI(todoList);
