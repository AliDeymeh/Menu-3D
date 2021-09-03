const hamberger_menu=document.querySelector('.hamberger-menu');
const conteiner=document.querySelector('.container');



hamberger_menu.addEventListener('click',()=>{
    conteiner.classList.toggle('active');
})


