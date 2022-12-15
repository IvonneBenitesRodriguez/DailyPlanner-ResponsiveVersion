const btnUpdate =document.querySelector('.btn-main');


btnUpdate.addEventListener('click', () =>{
    const headline = document.getElementById('headline');
    const input = document.querySelector('.input-main');

    headline.className = 'grow';
    headline.textContent = input.value;
    input.value = '';
});

const btnUpdateTask = document.querySelector('.btn-task');



btnUpdateTask.addEventListener('click', () => {
    const task =document.getElementById('task');
    const inputTask = document.querySelector('.input-task');

    task.textContent = inputTask.value;
    inputTask.value = '';

  
});

const bntUpdateTaskTwo = document.querySelector('.btn-taskTwo');

bntUpdateTaskTwo.addEventListener('click', () => {
    const taskTwo = document.getElementById('taskTwo');
    const inputTaskTwo = document.querySelector('.input-taskTwo');

    taskTwo.textContent = inputTaskTwo.value;
    inputTaskTwo.value = '';
})

const bntUpdateTaskThree = document.querySelector('.btn-taskThree');

bntUpdateTaskThree.addEventListener('click', () => {
    const taskThree= document.getElementById('taskThree');
    const inputTaskThree = document.querySelector('.input-taskThree');

    taskThree.textContent = inputTaskThree.value;
    inputTaskThree.value = '';
})

const bntUpdateTaskFour = document.querySelector('.btn-taskFour');

bntUpdateTaskFour.addEventListener('click', () => {
    const taskFour= document.getElementById('taskFour');
    const inputTaskFour = document.querySelector('.input-taskFour');

    taskFour.textContent = inputTaskFour.value;
    inputTaskFour.value = '';
})

const bntUpdateTaskFifth = document.querySelector('.btn-taskFifth');

bntUpdateTaskFifth.addEventListener('click', () => {
    const taskFifth= document.getElementById('taskFifth');
    const inputTaskFifth = document.querySelector('.input-taskFifth');

    taskFifth.textContent = inputTaskFifth.value;
    inputTaskFifth.value = '';
})

const bntUpdateTaskSixth = document.querySelector('.btn-taskSixth');

bntUpdateTaskSixth.addEventListener('click', () => {
    const taskSixth= document.getElementById('taskSixth');
    const inputTaskSixth = document.querySelector('.input-taskSixth');

    taskSixth.textContent = inputTaskSixth.value;
    inputTaskSixth.value = '';
})

