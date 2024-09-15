import "./styles/button.css"
export class ButtonComponent extends HTMLElement {
  private _label: string;
  private _clickHandler: () => void = () => {};
  private _button: HTMLButtonElement | null = null;
  private _cssClasses: string[];
  private _isLoggedIn: boolean = false;
  private _isPrivate: boolean = false; // Nuevo atributo para la privacidad

  static get observedAttributes() {
      return ['label', 'class', 'is-logged-in', 'is-private']; // Agregar 'is-private'
  }

  constructor(label: string, cssClasses: string | string[] = '', isLoggedIn: boolean = false, isPrivate: boolean = false) {
      super();
      this._label = label;
      this._cssClasses = typeof cssClasses === 'string' ? [cssClasses] : cssClasses;
      this._isLoggedIn = isLoggedIn;
      this._isPrivate = isPrivate; // Inicializar el estado de privacidad
      this.render();
  }

  connectedCallback() {
      this.updateButton();
  }

  attributeChangedCallback(name: string, _oldValue: string, newValue: string) {
      switch (name) {
          case 'label':
              this._label = newValue;
              break;
          case 'class':
              this._cssClasses = newValue.split(' ');
              break;
          case 'is-logged-in':
              this._isLoggedIn = newValue === 'true';
              break;
          case 'is-private': // Manejar el cambio de privacidad
              this._isPrivate = newValue === 'true';
              break;
      }
      this.updateButton();
  }

  set onClick(value: () => void) {
      this._clickHandler = value;
      this.updateButton();
  }

  get onClick(): () => void {
      return this._clickHandler;
  }

  private updateButton(): void {
      if (this._button) {
          this._button.textContent = this._label;
          this._button.className = this._cssClasses.join(' ');
          // Mostrar el botón solo si el usuario está logueado y el sitio no es privado
          this._button.style.display = this._isLoggedIn && !this._isPrivate ? 'inline-block' : 'none';
          this._button.removeEventListener('click', this._clickHandler);
          this._button.addEventListener('click', this._clickHandler);
      }
  }

  render(): void {
      this._button = document.createElement('button');
     
      this._button.className = this._cssClasses.join(' ');
      // Mostrar el botón solo si el usuario está logueado y el sitio no es privado
      this._button.style.display = this._isLoggedIn && !this._isPrivate ? 'inline-block' : 'none';
      this._button.addEventListener('click', () => this.click());
      if(this._button.classList.contains("active")){
        this._button.classList.add("gradient-border");
      }
      this.appendChild(this._button);
  }
}

customElements.define('button-wc', ButtonComponent);
