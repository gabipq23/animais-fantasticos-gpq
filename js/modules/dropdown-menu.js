import outsideClick from './outsideclick.js';

export default class DropdownMenu {
  constructor(dropdownMenus, events) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);

    // define o touchstart e click como argumento padrão
    // de evets caso o usuario não forneça um
    if (events === undefined) this.events = ['touchstart', 'click'];
    else this.events = events;

    this.activeClass = 'ativo';
    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }

  // ativa o dropdown e adiciona a função que observa p clique fora dele
  activeDropdownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    outsideClick(element, this.events, () => {
      element.classList.remove('ativo');
    });
  }

  // adiciona os eventos ao dropdown
  addDropdownMenuEvent() {
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownMenuEvent();
    }
    return this;
  }
}
