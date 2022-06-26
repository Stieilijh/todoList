import Task from "./Task";

export default class Project {
  constructor(projectName) {
    this.tasks = [];
    this.projectName = projectName;
    this.tasks.push(new Task("Some Task" + projectName));
  }

  getName() {
    return this.projectName;
  }

  setName(name) {
    this.projectName = name;
  }
  getTasks() {
    return this.tasks;
  }

  setTasks(tasks) {
    this.tasks = tasks;
  }

  addTask(task) {
    this.tasks.push(task);
  }
  deleteTasks(taskToBeDeleted) {
    this.tasks.filter((task) => !(task.getName() == taskToBeDeleted.getName()));
  }
  has(taskName) {
    return this.tasks.some((item) => item.getName() == taskName);
  }
}
