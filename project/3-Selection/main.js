let boxes = document.querySelectorAll('.box');
let circles = document.querySelectorAll('.circle');


// boxes.forEach(box => {
//   box.addEventListener('click', (i) => {
//     const targets = i.target.parentNode.querySelectorAll('.circle');
//         targets.forEach(target =>{
//           targets.classList.add('selected');
//         })
//         console.log(targets);
//   })
// });

// boxes.forEach(box => {
//   box.addEventListener('click', i => {
//     const target = i.target.parentNode.querySelector('.circle');
//     target.classList.add('selected');
//   });
// });


boxes.forEach(box => {
  box.addEventListener('click', i => {
    const target = box.querySelector('.circle');
    target.classList.toggle('selected');
    // console.log(target);
  });
});


// check which box is clicked


//if box is clicked show its child
// if(i.target == rge){

// }
