(()=>{"use strict";class e{constructor(e){this.tasks=[],this.projectName=e}getName(){return this.projectName}setName(e){this.projectName=e}getTasks(){return this.tasks}setTasks(e){this.tasks=e}addTask(e){this.tasks.append(e)}deleteTasks(e){this.tasks.filter((t=>!(t.getName()==e.getName())))}isThere(e){this.tasks.some((t=>t.getName()==e.getName()))}}const t=document.querySelector("#projects");(new class{constructor(){this.projects=[],this.projects.push(new e("Today")),this.projects.push(new e("This Week"))}getprojects(){return this.projects}setprojects(e){this.projects=e}addproject(e){this.projects.append(e)}deleteproject(e){this.projects.filter((t=>!(t.getName()==e.getName())))}isThere(e){this.projects.some((t=>t.getName()==e.getName()))}}).getprojects().forEach((e=>{const s=document.createElement("div");s.id=e.getName(),s.textContent=e.getName(),t.appendChild(s)})),document.querySelector("#todolist")})();