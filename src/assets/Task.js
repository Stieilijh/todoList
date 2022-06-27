export default class Task {
  constructor(taskName, dueDate = "No date") {
    this.taskName = taskName;
    this.dueDate = dueDate;
  }
  getName() {
    return this.taskName;
  }
  setName(taskName) {
    this.taskName = taskName;
  }
  getDate() {
    return !this.dueDate ? "No date" : this.dueDate;
  }
  setDate(date) {
    this.dueDate = date;
  }
}
