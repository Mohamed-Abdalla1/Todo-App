let taskInput = document.getElementById('taskInput');
let taskAddBtn = document.getElementById('taskAddBtn');
let noTask = document.getElementById('noTask');
let allTasks = document.getElementById('allTasks');
let invalidMassage = document.getElementById('invalidMassage');
let closeInvalidMassage = document.getElementById('closeInvalidMassage');


let closeInvalidMassageFunc = ()=>{
    invalidMassage.classList.add('none');
}

closeInvalidMassage.addEventListener('click',closeInvalidMassageFunc);


let addTask = ()=>{

    taskData = taskInput.value;
    if(  taskData.trim() == '' ||taskInput.value.length < 3  || taskInput.value.length >20){
        invalidMassage.classList.remove('none');
    }else{
        noTask.classList.add('none');
    
      allTasks.innerHTML += `
      <div  class = "alert alert-danger task">
      ${taskData} 
      <button class = "btn btn-dark float-right b2 " > Remove </button>
      </div>
      `;
      taskInput.value = "";
      allTasks.addEventListener('click',function(e){
        if(e.target.classList.contains('task')){
                e.target.classList.toggle("checked")
        }
    
      })
}}


taskAddBtn.addEventListener('click',addTask)

document.addEventListener('click',function(e){
   if(e.target.classList.contains('b2')){
     e.target.parentElement.remove();
     if(allTasks.children.length == 0){
         noTask.classList.remove('none');
     }
   }
});
