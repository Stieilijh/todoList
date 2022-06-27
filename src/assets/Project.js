import Task from "./Task";

export default class Project {
  constructor(projectName) {
    this.tasks = [];
    this.projectName = projectName;
    this.tasks.push(new Task("Some Task in " + projectName));
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
    if (!this.has(task.getName())) {
      this.tasks.push(task);
    }
  }
  deleteTask(taskToBeDeleted) {
    this.tasks = this.tasks.filter(
      (task) => !(task.getName() == taskToBeDeleted)
    );
  }
  has(taskName) {
    return this.tasks.some((item) => item.getName() == taskName);
  }
}
