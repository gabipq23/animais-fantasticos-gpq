// //DOM PARA INICIANTES
// // seleção de Elementos

// // getElementById seleciona e retorna elementos do DOM
// // Seleciona pelo ID
// const animaisSection = document.getElementById('animais');
// const contatoSection = document.getElementById('contato');

// // Retorna null caso não exista
// const naoExiste = document.getElementById('teste');


// //getElementsByClassName e getElementsByTagName selecionam e retornam uma lista de elementos do DOM. A lista retornada está ao vivo, significa que se elementos forem adicionados, ela será automaticamente atualizada.
// // Seleciona pela classe, retorna uma HTMLCollection
// //const gridSection = document.getElementsByClassName('grid-section');
// //const contato = document.getElementsByClassName('grid-section contato');

// // Seleciona todas as UL's, retorna uma HTMLCollection
// const ul = document.getElementsByTagName('ul');

// // Retorna o primeiro elemento
// console.log(gridSection[0]);


// // querySelector retorna o primeiro elemento que combinar com o seu seletor CSS.
// // mais genérico e mais usado
// const animais = document.querySelector('.animais');
// const contato = document.querySelector('#contato');
// const ultimoItem = document.querySelector('.animais-lista li:last-child');
// const linkCSS = document.querySelector('[href^="https://"]');
// const primeiroUl = document.querySelector('ul');

// // Busca dentro do Ul apenas
// const navItem = primeiroUl.querySelector('li');


// // querySelectorAll retorna todos os elementos compatíveis com o seletor CSS em uma NodeList
// // segundo mais genérico e mais usado

// const gridSection = document.querySelectorAll('.grid-section');
// const listas = document.querySelectorAll('ul');
// const titulos = document.querySelectorAll('.titulo');
// const fotosAnimais = document.querySelectorAll('.animais-lista img');

// // Retorna o segundo elemento
// console.log(gridSection[1]);

// // array like

// // Retorne no console todas as imagens do site
// const imagens = document.querySelectorAll('img');

// // Retorne no console apenas as imagens que começaram com a palavra imagem
// const imgAnimais = document.querySelectorAll('img[src^="img/imagem"]');

// // Selecione todos os links internos (onde o href começa com #)
// const linksInt = document.querySelectorAll('[href^="#"]');

// // Selecione o primeiro h2 dentro de .animais-descricao
// const animais = document.querySelector('.animais-descricao h2')

// // Selecione o último p do site
// const paragrafos = document.querySelectorAll('p');
// console.log(paragrafos[paragrafos.length -1])

// // FOREACH
// // método para selecioanr listas
//const imgs = document.querySelectorAll('img');

// imgs.forEach(function(item){
//   console.log(item);
// });

// // parametros de foreach
// //O primeiro parâmetro é o callback, ou seja, a função que será ativada a cada item. Esse função pode receber três parâmetros: valorAtual, index e array;
// const imgs = document.querySelectorAll('img');

// imgs.forEach(function(item, index, array){
//   console.log(item); // o item atual no loop
//   console.log(index); // o número do index
//   console.log(array); // a Array completa
// });

// // ARROW FUNCTION
// // Sintaxe curta em relação a function expression. 
// //Basta remover a palavra chave function e adicionar a fat arrow => após os argumentos.
// const imgs = document.querySelectorAll('img');

// imgs.forEach((item) => {
//   console.log(item);
// });

// //exercicio
// // Mostre no console cada parágrado do site
// const para = document.querySelectorAll('p');
// para.forEach(function(item){
//     console.log(item);
// });

// // Como corrigir os erros abaixo:
// const imgs = document.querySelectorAll('img');

// imgs.forEach((item, index) => {
//   console.log(item, index);
// });

// let i = 0;
// imgs.forEach(() => {
//   console.log(i++)
// });


// // GETATTRIBUTE E SETATTRIBUTE
// // Métodos que retornam ou definem de acordo com o atributo selecionado
// const img = document.querySelector('img');

// img.getAttribute('src'); // valor do src
// img.setAttribute('alt', 'Texto Alternativo'); // muda o alt
// img.hasAttribute('id'); // true / false
// img.removeAttribute('alt'); // remove o alt

// img.hasAttributes(); // true / false se tem algum atributo


// // Dimensões e distancias
// //WINDOW pode usar para ver medida de tela do usuario
// window.innerWidth; // width do janela
// window.outerWidth; // soma dev tools também
// window.innerHeight; // height do janela
// window.outerHeight; // soma a barra de endereço

// if(window.innerWidth < 600) {
//   console.log('Tela menor que 600px');
// }

// // mas o ideal é usa com o MATCHMEDIA();
// //uso igual do media querie
// const small = window.matchMedia('(max-width: 600px)');

// if(small.matches) {
//   console.log('Tela menor que 600px')
// } else {
//   console.log('Tela maior que 600px')
// }
  
// // acessibilidade: clicavel tem que ter 48 px de altura e largura nominimo
// const links = document.querySelectorAll('a');

// links.forEach((link) => {
//     const linkWidth = link.offsetWidth;
//     const linkHeight = link.offsetHeight;
//     if (linkWidth >= 48 && linkHeight >= 48){
//         console.log(link, 'Possui boa acessibilidae')
//     } else{
//         console.log(link, 'Não possui boa acessibilidade')
//     }
// });

// EVENTOS

// //ADDEVENTLISTENER
// //Adiciona uma função ao elemento, esta chamada de callback, que será ativada assim que certo evento ocorrer neste elemento.

// const img = document.querySelector('img');

// // elemento.addEventListener(event, callback, options)
// img.addEventListener('click', function() {
//   console.log('Clicou');
// })

// // É boa prática separar a função de callback do addEventListener, ou seja, declarar uma função ao invés de passar diretamente uma função anônima
// const img = document.querySelector('img');
// function callback() {
//   console.log('Clicou');
// }

// img.addEventListener('click', callback); // 🚀
//img.addEventListener('click', callback()); // undefined
//img.addEventListener('click', function() {
 // console.log('Clicou');
//})
//img.addEventListener('click', () => {
  //console.log('Clicou');
//})

//https://www.origamid.com/slide/javascript-completo-es6/#/0307-eventos/9
