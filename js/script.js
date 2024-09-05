// Seleção de elementos HTML (DOM)
var btnMenu = document.querySelector('.btn-menu');
var menu = document.querySelector('.menu');

//console.log(btnMenu);
//console.log(menu);

// Função (rotina) que vai manipilat o menu
function menuSite(){
    // toggle -> alterna entre add e remove uma classe
    menu.classList.toggle('menu-open');
    btnMenu.classList.toggle('x');
}

// Eventos
// Ao clicar no menu será acionada a função menuSite
btnMenu.addEventListener('click',menuSite);