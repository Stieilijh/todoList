import Task from "./assets/Task";
import TodoList from "./assets/Todolist";
import Project from "./assets/Project";
import setupNavBar from "./assets/navbarUI";

//const TodoListDiv = document.querySelector("#todolist");

const todoList = new TodoList();

setupNavBar(todoList);
