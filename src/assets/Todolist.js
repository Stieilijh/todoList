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
    if (!this.has(project.getName())) this.projects.push(project);
  }
  deleteproject(projectName) {
    this.projects = this.projects.filter(
      (project) => !(project.getName() === projectName)
    );
  }
  has(projectName) {
    return this.projects.some((item) => item.getName() === projectName);
  }
}
