const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

const generateTemplate = todo => {
  const html = `<li class="list-group-item d-flex justify-content-between align-items-center">
  <span>${todo}</span>
  <i class="far fa-trash-alt delete"></i>
 </li>`;
    list.innerHTML += html;
};

// To add Todos
addForm.addEventListener('submit', e => {
  e.preventDefault();
  const todo = addForm.add.value.trim();
  if(todo.length){
    generateTemplate(todo);
    addForm.reset();
  }else{
      console.log('please fill the form');
  }
  
  console.log(todo);
});

//to delete Todos
list.addEventListener('click', e =>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
    
});

const filterTodos = (temporary) =>{
    
    Array.from(list.children)
    .filter((todo)=>!todo.textContent.toLowerCase().includes(temporary))
    .forEach((todo)=>todo.classList.add('filtered'));

    Array.from(list.children)
    .filter((todo)=>todo.textContent.toLowerCase().includes(temporary))
    .forEach((todo)=>todo.classList.remove('filtered'));

};
//searching and filtering toDo using keyUp Events
search.addEventListener('keyup', () =>{
    const temporary = search.value.trim().toLowerCase();
    filterTodos(temporary);
});