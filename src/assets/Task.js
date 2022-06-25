export default class Task {
  constructor(taskName, dueDate = "No date") {
    this.taskName = taskName;
  }
  getName() {
    return this.taskName;
  }
  setName(taskName) {
    this.taskName = taskName;
  }
  getDate() {
    return this.dueDate;
  }
  setDate(date) {
    this.dueDate = date;
  }
}
