export default class Project {
  constructor(projectName) {
    this.tasks = [];
    this.projectName = projectName;
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
    this.tasks.append(task);
  }
  deleteTasks(taskToBeDeleted) {
    this.tasks.filter((task) => !(task.getName() == taskToBeDeleted.getName()));
  }
  isThere(task) {
    this.tasks.some((item) => item.getName() == task.getName());
  }
}
