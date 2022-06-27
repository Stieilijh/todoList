export default class Task {
  constructor(taskName, dueDate = new Date(), priority = 1) {
    this.taskName = taskName;
    this.dueDate = dueDate;
    this.priority = priority;
  }
  getName() {
    return this.taskName;
  }
  setName(taskName) {
    this.taskName = taskName;
  }
  setPriority(priority) {
    this.priority = priority;
  }
  getPriority() {
    return this.priority;
  }
  getDate() {
    return !this.dueDate ? new Date() : this.dueDate;
  }
  setDate(date) {
    this.dueDate = date;
  }
  getFormattedDate() {
    return new Date(this.getDate()).toLocaleDateString("en-UK", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      weekday: "short",
    });
  }
  getBackgroundColor(priority) {
    switch (priority) {
      case 1:
        return "#00ff00";
      case 2:
        return "#ffa500";
      case 3:
        return "#ff0000";
      default:
        console.log("sucka");
    }
  }
}
