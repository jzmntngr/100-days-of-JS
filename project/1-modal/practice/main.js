  // get modal element
    let modal = document.querySelector('.modal');

  // get modal btn
    let modalBtn = document.querySelector('.modalBtn');

  // get close btn
    let closeBtn = document.getElementsByClassName('close');

  // listen open click modal
    modalBtn.addEventListener('click', openModal);

  // listen outside click modal
    window.addEventListener('click', outsideClick);

  // openModal Function
    function openModal(){
      modal.style.display = 'block';
    }

  // closeModal Function
    function closeModal(){
      modal.style.display = 'none';
    }

    window.addEventListener('click', outsideClick);

  // outsideClick Function
    function outsideClick(i){
      if (i.target == modal){
          modal.style.display = 'none';
      }
    }

  // loop to get all class names
    for (var i = 0; i < closeBtn.length; i++) {
      closeBtn[i].addEventListener('click', closeModal);
    }
