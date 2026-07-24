let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function save(){
    localStorage.setItem("tasks",JSON.stringify(tasks));
}

function render(){

    const list=document.getElementById("taskList");

    list.innerHTML="";

    tasks.forEach((task,index)=>{

        list.innerHTML+=`
        <tr>
            <td>${task.name}</td>
            <td>${task.person}</td>
            <td>${task.date}</td>

            <td>

            ${
                task.done
                ?'<span class="done"> 完了</span>'
                :'<button onclick="finishTask('+index+')">完了</button>'
            }

            </td>

            <td>
                <button onclick="deleteTask(${index})">削除</button>
            </td>

        </tr>
        `;

    });

}

function addTask(){

    const name=document.getElementById("taskName").value;
    const person=document.getElementById("taskPerson").value;
    const date=document.getElementById("taskDate").value;

    if(name=="") return;

    tasks.push({
        name:name,
        person:person,
        date:date,
        done:false
    });

    save();
    render();

    document.getElementById("taskName").value="";
    document.getElementById("taskPerson").value="";
    document.getElementById("taskDate").value="";
}

function finishTask(index){

    tasks[index].done=true;

    save();

    render();

}

function deleteTask(index){

    tasks.splice(index,1);

    save();

    render();

}

render();
