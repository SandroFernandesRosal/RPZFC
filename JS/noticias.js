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
    legenda.innerText = 'Craques do RPZ são vistos na balada'
    legenda.style.fontWeight = 'bold'
    
 
}

function anuncio2() {
 
  
  noticia.src="./IMG/elenco1.jpeg";
  legenda.innerText = 'RPZ conquista a Libertadores do Ipase'
  legenda.style.fontWeight = 'bold'
    

}

function anuncio3() {
 
  
  noticia.src="./IMG/elenco2.jpeg";
  legenda.innerText = 'Elenco do RPZ após mais um dia de treino'
  legenda.style.fontWeight = 'bold'
  

}