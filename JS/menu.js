var botao = document.querySelector('.botao');
var menu = document.querySelector('.botaomenu');
var icon = document.querySelector('.icon');

botao.addEventListener("click", menumobile);
function menumobile(){

  if (menu.style.display =='none'){
    menu.style.display='block';
    icon.src="./IMG/close.png";
  }
 
  else {
    menu.style.display='none';
    icon.src="./IMG/botao-menu.png";
  }
}

