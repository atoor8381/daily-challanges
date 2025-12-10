let addtaskbutton = document.querySelector('.addtask')
let addnewform = document.querySelector('.form')
let finaladd = document.getElementById('addtask-form')
let table = document.querySelector('.table')
let description = document.getElementById('Description')
let Priority = document.getElementById('Priority')
let index=0;
let Priorityentered
let descriptionentered



function addnewtask(priority, description){
    index = index+1;
}
addtaskbutton.addEventListener('click',()=>{
    addnewform.classList.toggle('show')
    console.log(table.children[1].append('<td>Hellow</td>'))
})
finaladd.addEventListener('click',(e)=>{
    e.preventDefault()
    descriptionentered = description.value
    Priorityentered = Priority.value
})
