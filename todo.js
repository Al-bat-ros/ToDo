'use strict';

const tasks = document.querySelector('.tasks'),
      listTask = document.querySelector('.listTask'),
      enterTask = document.getElementById('enterTask'),
      btnAdd = document.getElementById('btnAdd'),
      timer = document.getElementById('timer');


const clock = () => {
   let date = new Date();
   let second = date.getSeconds();
   let minutes = date.getMinutes();
   let hours = date.getHours();

   const zero = (num) => {
      if (num === 0 || num < 10){
         return '0' + num;
      } else {
         return num;
      }
   }
   timer.innerHTML = `${zero(hours)}:${zero(minutes)}:${zero(second)}`;
  };

   setInterval(()=>{
      clock();
      console.log(1);
   }, 1000);




// Добавляем задачу в список
const addTasks = () => {
   const addLi = document.createElement('li');
   addLi.innerHTML = `${enterTask.value}<img src="./img/trash.png" width="20" height="20" alt="X">`;
   listTask.children[0].appendChild(addLi);
   

   enterTask.value = '';
}

// Удаление задач из списка
const deleteTasks = (target) => {
   target.closest('li').remove();
}

tasks.addEventListener('click', () => {
   let target = event.target;
   
      //Зачеркнем задачу
      if (target.matches('li')){
         target.classList.toggle('decor');
      }

      // Добавляем задачу в список
      if (target.matches('#btnAdd') && enterTask.value !== ''){
         addTasks();
      }

      // Удаление задач из списка
      if (target.matches('img')) {
         deleteTasks(target);
      }
}); 

document.addEventListener('keydown', (event) => {
  if (event.keyCode === 13 && enterTask.value !== '' ) addTasks();  
});

