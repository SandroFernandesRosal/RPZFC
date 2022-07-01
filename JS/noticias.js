var noticia = document.querySelector('.noticia');
var noticia1 = document.querySelector('.noticia1');
var noticia2 = document.querySelector('.noticia2');
var noticia3 = document.querySelector('.noticia3');
var legenda = document.querySelector('.legenda');

noticia1.addEventListener('click', anuncio1);
noticia2.addEventListener('click', anuncio2);
noticia3.addEventListener('click', anuncio3);

function anuncio1() {
 
  
    noticia.src="./IMG/balada2.jpeg";
    legenda.innerText = 'Depois de uma semana intensa de treinos e jogos importantes, parte do elenco saiu pra comemorar o aniversário de Léo Nariz.Lugar escolhido para comemorar foi no Olimpo, casa de show muito conhecida no Rio de Janeiro, no bairro da Vila da Penha. RPZ volta aos treinos na próxima segunda!'
    legenda.style.fontWeight = 'bold'
    
 
}

function anuncio2() {
 
  
  noticia.src="./IMG/elenco1.jpeg";
  legenda.innerText = 'Pode comemorar torcedor, o RPZ é campneão da Libertadores do Ipase. Foi uma final emocinante e dramática, depois de um gol antológico de Guil e logo após a expulsão por um carrinho por traz, para evitar o gol de empate do adversário. RPZ vence o jogo por 2x1 e conquista a américa pela primeira vez na sua história!';

  legenda.style.fontWeight = 'bold';
    

}

function anuncio3() {
 
  
  noticia.src="./IMG/elenco2.jpeg";
  legenda.innerText = 'Elenco do RPZ inicia semana livre, com muito teino. Time só volta a campo no próximo domingo';
  legenda.style.fontWeight = 'bold';
  

}
