let btn = document.querySelector('#btn');
let myModal = new bootstrap.Modal(document.getElementById('staticBackdrop'))

btn.addEventListener('click', ()=>{ 
  myModal.show();

});