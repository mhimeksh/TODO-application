let tasksList= [];

//renders taskListEl which contains all the tasks as child nodes
function render(){
    let taskListEl= document.getElementById("taskList");
    taskListEl.innerHTML= "";

    let cnt =0;
    tasksList.forEach(task => {

        cnt++;

        let taskEl= document.createElement("div");

        let taskDescriptionSpan= document.createElement("span");
        taskDescriptionSpan.innerHTML= task;
        let deleteButton= document.createElement("button");
        deleteButton.setAttribute("id", cnt);
        deleteButton.innerHTML="-";
        deleteButton.setAttribute("onclick", "deleteTask("+ deleteButton.getAttribute("id")+")");
        taskEl.appendChild(taskDescriptionSpan);
        taskEl.appendChild(deleteButton);
        taskListEl.appendChild(taskEl);
    });
    
}

// Adding valid tasks to tasksList and calling render function
function addTask(){
    let inp_todo_el=document.getElementById("input-todo");
    if(inp_todo_el.value.trim()!="") tasksList.push(inp_todo_el.value.trim());
    inp_todo_el.value="";
    render();
}

// Deletes the task from tasksList using its id and then renders the taskList div
function deleteTask(id){
    tasksList.splice(id-1, 1);
    render();
}
