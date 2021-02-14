const list = document.querySelector('#list');
const addItem = document.querySelector('#add');
const clearAll = document.querySelector('#clear');
const clearCompleted = document.querySelector('#clearCompleted');

let input = document.querySelector('#input');
let counter = document.querySelector('#incompleteCount');
let item;
let incomplete = 0;

addItem.addEventListener('click', add);
input.addEventListener('keydown', enterKey);
list.addEventListener('click', taskComplete);
list.addEventListener('click', removeSingle);
clearCompleted.addEventListener('click', removeCompleted);
clearAll.addEventListener('click', removeAll);

function enterKey(e) {
    if(e.code === 'Enter')
        add();
}

function add() {
    let newItem = document.createElement('li');
    newItem.innerHTML = `<button class=\"deleteTask\">X</button>${input.value}`;
    console.log(list);
    if (input.value !== '') {
        list.appendChild(newItem);
        incomplete++;
    }
    input.value = ``;
    counter.innerText = incomplete;
}

function taskComplete(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('done');
        if (e.target.classList.contains('done'))
            incomplete--;
        else
            incomplete++;
    }
    counter.innerText = incomplete
}

function removeSingle(e) {
    if(e.target.className === 'deleteTask'){
        list.removeChild(e.target.parentNode);
        if (!e.target.parentNode.classList.contains('done'))
            incomplete--;
    }
    counter.innerText = incomplete;
}

function removeCompleted() {
    console.log(list.children.length);
    for(i = 0; i < list.children.length; i++) {
        if(list.children[i].classList.contains('done')){
            console.log(list.children[i]);
            list.removeChild(list.children[i]);
        }
        else
            console.log(`${list.children[i]} is not done`);
    }
    console.log(list.children.length);
}

function removeAll() {
    list.innerHTML = ``;
    incomplete = 0;
    counter.innerText = incomplete;
}