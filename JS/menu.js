var botao = document.querySelector('.botao')
var menu = document.querySelector('.botaomenu')

botao.addEventListener("click", menumobile);
function menumobile(){

  if (menu.style.display =='none'){
    menu.style.display='block';

  }
 
  else {
    menu.style.display='none';
  }
}

