let array=[]
function daily(){
    let input=document.getElementById('input').value
    array.push(input)
    let items=document.getElementById('item')
    let todoItems=document.createElement('div')
    let checkBox=document.createElement('input')
    checkBox.type='checkbox'
    let para=document.createElement('p')
    para.innerHTML=input
    
    let dele=document.createElement('button')
    dele.innerHTML="DELETE"
    dele.classList.add('delete')
    
    todoItems.classList.add('todo-flex')
    checkBox.classList.add('cbox')
    todoItems.appendChild(checkBox)
    todoItems.appendChild(para)
    
    todoItems.appendChild(dele)
    items.appendChild(todoItems)
    document.getElementById('input').value=''
    
}

function delt(){
    
}