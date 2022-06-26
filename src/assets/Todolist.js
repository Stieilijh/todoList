import Project from "./Project";

export default class TodoList {
  constructor() {
    this.projects = [];
    this.projects.push(new Project("Today"));
    this.projects.push(new Project("This Week"));
  }
  isEmpty() {
    return this.projects.length == 0;
  }
  getProjects() {
    return this.projects;
  }
  getProject(name) {
    return this.projects.find((project) => project.getName() == name);
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
