import "./styles/price-box.css"

export class PriceBox extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.innerHTML = `
     
        <div class="price-box">
          <div class="plan-title">${this.getAttribute('plan-title')}</div>
          <div class="price">${this.getAttribute('price')}</div>
          <ul class="features">
            ${this.getAttribute('features')?.split(',').map(feature => `<li>${feature}</li>`).join('')}
          </ul>
        </div>
      `;
    }
  }
  
  customElements.define('price-box', PriceBox);
  