const tasklist = document.getElementById("taskList");
const taskInput=document.getElementById("tasKinput");
 
function addTask() {
    const taskText = taskInput.Value.trim();
    if (taskText !=="") {

       const maxtext =taskText.substrings(0, 35);
        const li = document.createElement("li");
        li.innerHTML = `

        <span>${maxtext}</span>
        <button class="editButton" onClick= "editTask(this)">Editar</button>
        <button class="deleteButton" onClick= "deletetask(this)">Remover</button>

    ` ;
    tasklist.appendchild(li);
    taskInput.value ="";
  }

}
 function editTask(button) {
    const li = button.parentElement;
    const span = li.querySelector("span");
    const newtext = prompt("editar tarefa:", span.textContent);
    if (newtext !== nuul && newtext.trim() !=="") {
        span.textContent = newtext.trim();
 } 

}
 function deleteTask (button) {
    const li = button.parentElement;
    tasklist.removeChild(li);
    
 }