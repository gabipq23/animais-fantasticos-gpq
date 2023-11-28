import AnimaNumeros from './anima-numeros.js';

export default function fetchAnimais(url, target) {
  const numerosGrid = document.querySelector(target);
  // cria a div contendo informações com o tootal de animais
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `
        <h3>${animal.especie}</h3>
        <span data-numero>${animal.total}</span>`;
    return div;
  }

  // preenche cada animal no dom
  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }
  // puxa os animais atraves de um arquivo json
  // e cria cada animal usando creat animal
  async function criarAnimais() {
    try {
      // fetch espera resposta
      const animaisResponse = await fetch(url);
      // transforma resposta em json
      const animaisJSON = await animaisResponse.json();
      animaisJSON.forEach((animal) => preencherAnimais(animal));
      const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
      animaNumeros.init();
    } catch (erro) {
      console.log(erro);
    }
  }
  return criarAnimais();
}
