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
    this.projects.append(project);
  }
  deleteproject(projectToBeDeleted) {
    this.projects.filter(
      (project) => !(project.getName() == projectToBeDeleted.getName())
    );
  }
  isThere(project) {
    this.projects.some((item) => item.getName() == project.getName());
  }
}
