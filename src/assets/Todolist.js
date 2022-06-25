import Project from "./Project";

export default class TodoList {
  constructor() {
    this.projects = [];
    this.projects.push(new Project("Today"));
    this.projects.push(new Project("This Week"));
  }
  getprojects() {
    return this.projects;
  }

  setprojects(projects) {
    this.projects = projects;
  }

  addproject(project) {
    this.projects.push(project);
  }
  deleteproject(projectName) {
    this.projects = this.projects.filter(
      (project) => !(project.getName() === projectName)
    );
  }
  isThere(projectName) {
    return this.projects.some((item) => item.getName() === projectName);
  }
}
