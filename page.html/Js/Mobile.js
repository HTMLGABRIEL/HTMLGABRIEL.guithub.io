let botaoA = document.getElementById('botao-A');
let menu =  document.getElementById('mobile');
let overlay = document.getElementById('overlay');

botaoA.addEventListener('click',()=>{
    menu.classList.add('Abrir');
});

menu.addEventListener('click',()=>{
    menu.classList.remove('Abrir');
});

overlay.addEventListener('click',()=>{
    menu.classList.remove('Abrir');
});