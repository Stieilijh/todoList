export default class TodoList {
  constructor(todoListName) {
    this.todoListName = todoListName;
    this.projects = [];
  }
  getName() {
    return this.todoListName;
  }

  setName(name) {
    this.todoListName = name;
  }
  getprojects() {
    return this.projects;
  }

  setprojects(projects) {
    this.projects = projects;
  }

  addproject(project) {
    this.projects.append(project);
  }
  deleteprojects(projectToBeDeleted) {
    this.projects.filter(
      (project) => !(project.getName() == projectToBeDeleted.getName())
    );
  }
  isThere(project) {
    this.projects.some((item) => item.getName() == project.getName());
  }
}
