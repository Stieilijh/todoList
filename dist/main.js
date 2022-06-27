(()=>{"use strict";class e{constructor(e,t=new Date,s=1){this.taskName=e,this.dueDate=t,this.priority=s}getName(){return this.taskName}setName(e){this.taskName=e}setPriority(e){this.priority=e}getPriority(){return this.priority}getDate(){return this.dueDate?this.dueDate:new Date}setDate(e){this.dueDate=e}getFormattedDate(){return new Date(this.getDate()).toLocaleDateString("en-UK",{year:"numeric",month:"2-digit",day:"2-digit",weekday:"short"})}getBackgroundColor(e){switch(e){case 1:return"#00ff00";case 2:return"#ffa500";case 3:return"#ff0000";default:console.log("sucka")}}}class t{constructor(t){this.tasks=[],this.projectName=t,this.tasks.push(new e("Some Task in "+t))}getName(){return this.projectName}setName(e){this.projectName=e}getTasks(){return this.tasks}setTasks(e){this.tasks=e}addTask(e){this.has(e.getName())||this.tasks.push(e)}deleteTask(e){this.tasks=this.tasks.filter((t=>!(t.getName()==e)))}has(e){return this.tasks.some((t=>t.getName()==e))}}class s{constructor(){this.projects=[],this.projects.push(new t("Today")),this.projects.push(new t("This Week"))}isEmpty(){return 0==this.projects.length}getProjects(){return this.projects}getProject(e){return this.projects.find((t=>t.getName()==e))}setprojects(e){this.projects=e}addproject(e){this.has(e.getName())||this.projects.push(e)}deleteproject(e){this.projects=this.projects.filter((t=>!(t.getName()===e)))}has(e){return this.projects.some((t=>t.getName()===e))}}let a="Today";function r(e){const t=document.querySelector("#projects");t.innerHTML="",e.getProjects().forEach((s=>{const n=document.createElement("div"),o=document.createElement("p");if(n.id=s.getName()+"div",o.id=s.getName(),o.textContent=s.getName(),n.appendChild(o),n.classList="projectList",t.appendChild(n),o.addEventListener("click",(()=>{a=s.getName(),c(e)})),n.style.display="flex",n.style.justifyContent="space-around",n.style.alignItems="center","Today"!=s.getName()&&"This Week"!=s.getName()){const t=document.createElement("button");t.id=s.getName()+"DelBtn",t.textContent="x",t.classList="cancelBtns",t.addEventListener("click",(()=>{e.deleteproject(s.getName()),d(e),r(e),l(e),e.has(a)||(e.isEmpty()?document.querySelector("#tasks").innerHTML="":(a=e.getProjects()[0].getName(),c(e)))})),n.appendChild(t)}l(e)}))}function n(){document.querySelector("#addProjectBtn").style.display="block",document.querySelector("#addProjectFormDiv").style.display="none"}function c(e){const t=i(e);if(!t)return;const s=document.querySelector("#tasks");s.innerHTML="",t.getTasks().forEach((a=>{const r=document.createElement("div"),n=document.createElement("p");r.id=a.getName().slice(0,4)+"div",n.id=a.getName().slice(0,4),n.textContent=a.getName(),r.appendChild(n),r.classList="taskList",r.style.display="flex",r.style.backgroundColor=a.getBackgroundColor(a.getPriority()),r.style.gap="5%",r.style.alignItems="center";const o=document.createElement("p");o.id=a.getName().slice(0,4)+"date",o.textContent=a.getFormattedDate(),r.appendChild(o);const i=document.createElement("p");i.id=a.getName().slice(0,4)+"priority",i.textContent=a.getPriority(),r.appendChild(i);const l=document.createElement("button");l.id=a.getName().slice(0,4)+"DelBtn",l.textContent="x",l.classList="cancelBtns",l.addEventListener("click",(()=>{t.deleteTask(a.getName()),d(e),c(e)})),r.appendChild(l),s.appendChild(r)}))}function o(){document.querySelector("#addTaskBtn").style.display="block",document.querySelector("#addTaskFormDiv").style.display="none"}function i(e){return!e.isEmpty()&&e.getProject(a)}function d(e){localStorage.setItem("todolist",JSON.stringify(e))}function l(e){e.getProjects().forEach((t=>{"Today"!=t.getName()&&"This Week"!=t.getName()&&t.getTasks().forEach((t=>{u(t.getDate())&&!e.getProject("Today").has(t.getName())&&e.getProject("Today").addTask(t)}))}))}const u=e=>{const t=new Date;return(e=new Date(e)).getDate()==t.getDate()&&e.getMonth()==t.getMonth()&&e.getFullYear()==t.getFullYear()};let m;localStorage.clear(),localStorage.getItem("todolist")?(m=Object.assign(new s,JSON.parse(localStorage.getItem("todolist"))),m.setprojects(m.getProjects().map((e=>Object.assign(new t,e)))),m.getProjects().forEach((t=>{t.setTasks(t.getTasks().map((t=>Object.assign(new e,t))))}))):m=new s,function(s){n(),r(s),o(),c(s),document.querySelector("#cancelNewProject").addEventListener("click",(()=>{n()})),document.querySelector("#cancelNewTask").addEventListener("click",(()=>{o()})),document.querySelector("#addProjectBtn").addEventListener("click",(()=>{addProjectBtn.style.display="none",document.querySelector("#addProjectFormDiv").style.display="block"})),document.querySelector("#addTaskBtn").addEventListener("click",(()=>{s.isEmpty()?alert("Make a project first!!"):(addTaskBtn.style.display="none",document.querySelector("#addTaskFormDiv").style.display="block")})),document.querySelector("#createNewProjectBtn").addEventListener("click",(()=>{const e=document.querySelector("#addProjectNameInput").value;s.has(e)?alert("Project already exists"):""===e?alert("Name can't be empty"):(n(),s.addproject(new t(e)),r(s),a=e,c(s),d(s))})),document.querySelector("#createNewTaskBtn").addEventListener("click",(()=>{const t=document.querySelector("#addTaskNameInput").value,a=document.querySelector("#addDueDateInput").value,r=document.querySelector("#addPriorityInput").value;i(s).has(t)?alert("Task already exists"):""===t?alert("Task can't be empty"):(o(),i(s).addTask(new e(t,a,parseInt(r))),c(s),d(s),l(s))}))}(m)})();
//# sourceMappingURL=main.js.map