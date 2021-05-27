let headerTitle = document.getElementById('header-title');
let header = document.getElementById('main-header');
header.style.borderBottom = "3px solid red";

let items = document.getElementsByClassName('list-group-item');

// items.style.background = "yellow";

// items.forEach(item =>{

// })
// variable i is the iteration
for (let i = 0; i < items.length; i++){
  items[i].style.background = 'yellow';

}