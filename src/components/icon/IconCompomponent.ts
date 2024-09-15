export class SvgComponent extends HTMLElement {
    private svgCode: string;
    private customClassName: string;
    private elementId: string;
    private optionalMethod?: () => void;

    constructor() {
        super();
        this.svgCode = '';
        this.customClassName = '';
        this.elementId = '';
    }

    static get observedAttributes() {
        return ['svg-code', 'class-name', 'element-id'];
    }

    attributeChangedCallback(name: string, oldValue: string, newValue: string) {
        if (oldValue !== newValue) {
            switch (name) {
                case 'svg-code':
                    this.svgCode = newValue;
                    break;
                case 'class-name':
                    this.customClassName = newValue;
                    break;
                case 'element-id':
                    this.elementId = newValue;
                    break;
            }
            this.render();
        }
    }

    connectedCallback() {
        this.render();
        this.addEventListener('click', this.handleClick.bind(this));
    }

    disconnectedCallback() {
        this.removeEventListener('click', this.handleClick.bind(this));
    }

    setMethod(method: () => void) {
        this.optionalMethod = method;
    }

    private handleClick() {
        if (this.optionalMethod) {
            this.optionalMethod();
        }
    }

    private render() {
        const cachedSvg = localStorage.getItem('cachedSvg');
        if (cachedSvg && cachedSvg === this.svgCode) {
            this.innerHTML = cachedSvg;
        } else {
            const fragment = document.createDocumentFragment();
            const div = document.createElement('div');
            div.innerHTML = this.svgCode;
            fragment.appendChild(div);
            this.innerHTML = '';
            this.appendChild(fragment);
            localStorage.setItem('cachedSvg', this.svgCode);
        }

        if (this.customClassName) {
            this.classList.add(this.customClassName);
        }
        if (this.elementId) {
            this.id = this.elementId;
        }
    }
  }
  
  customElements.define('svg-component', SvgComponent);
  