// get modal element
let modal =  document.getElementById('simpleModal');

// get open modal button
let modalBtn =  document.getElementById('modalBtn');

// get close modal button
let closeBtn =  document.getElementsByClassName('closeBtn')[0];

// listen for open Click
modalBtn.addEventListener('click', openModal);

// listen for close Click
closeBtn.addEventListener('click', closeModal);

// listen for outside Click
window.addEventListener('click', outsideClick);

// function open modal
function openModal(){
  modal.style.display = 'block';
}

// function open modal
function closeModal(){
  modal.style.display = 'none';
}

// function close modal outside click
function outsideClick(e){
  if(e.target == modal){
    modal.style.display = 'none';
  }
}
