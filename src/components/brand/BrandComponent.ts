import "./styles/brand-styles.css";

export class BrandComponent extends HTMLElement {
  static get observedAttributes() {
    return [
      "svg-url",
      "svg-code",
      "company-name",
      "slogan",
      "width",
      "height",
      "name-class",
      "slogan-class",
    ];
  }

  private static template: DocumentFragment;
  private static svgCache: { [key: string]: SVGElement } = {};

  constructor() {
    super();
    if (!BrandComponent.template) {
      BrandComponent.template = this.getTemplate();
    }
    this.appendChild(BrandComponent.template.cloneNode(true));
  }

  get svgUrl(): string | null {
    return this.getAttribute("svg-url");
  }

  get svgCode(): string | null {
    return this.getAttribute("svg-code");
  }

  get companyName(): string {
    return this.getAttribute("company-name") || "";
  }

  get slogan(): string {
    return this.getAttribute("slogan") || "";
  }

  get width(): string {
    return this.getAttribute("width") || "200px";
  }

  get height(): string {
    return this.getAttribute("height") || "50px";
  }

  get nameClass(): string {
    return this.getAttribute("name-class") || "brand-name";
  }

  get sloganClass(): string {
    return this.getAttribute("slogan-class") || "slogan";
  }

  connectedCallback(): void {
    this.updateStyles();
  }

  attributeChangedCallback(): void {
    this.updateStyles();
  }

  private updateStyles(): void {
    this.style.setProperty("--brand-width", this.width);
    this.style.setProperty("--brand-height", this.height);

    const nameElement = this.querySelector(`.${this.nameClass}`) as HTMLElement | null;
    if (nameElement) {
      nameElement.textContent = this.companyName;
    }

    const sloganElement = this.querySelector(`.${this.sloganClass}`) as HTMLElement | null;
    if (sloganElement) {
      sloganElement.textContent = this.slogan;
    }

    const brandImageElement = this.querySelector(".brand-image") as HTMLElement | null;
    if (brandImageElement) {
      if (this.svgUrl) {
        brandImageElement.innerHTML = `<img src="${this.svgUrl}" alt="Brand EDR ES">`;
      } else if (this.svgCode) {
        this.loadSvgFromCache(this.svgCode, brandImageElement);
      }
    }
  }

  private loadSvgFromCache(svgCode: string, container: HTMLElement): void {
  if (BrandComponent.svgCache[svgCode]) {
    container.innerHTML = "";
    container.appendChild(BrandComponent.svgCache[svgCode].cloneNode(true));
  } else {
    const parser = new DOMParser();
    const doc = parser.parseFromString(svgCode, "image/svg+xml");
    const svgElement = doc.documentElement as unknown as SVGElement; // Convertir a unknown primero
    BrandComponent.svgCache[svgCode] = svgElement; // Cache the SVG
    container.innerHTML = "";
    container.appendChild(svgElement);
  }
}

  private getTemplate(): DocumentFragment {
    const template = document.createDocumentFragment();
    const div = document.createElement("div");
    div.innerHTML = `
      <div class="brand">
        <div class="brand-image"></div>
        <div class="brand-text">
          <div class="brand-name"></div>
          <div class="slogan"></div>
        </div>
      </div>
    `;
    while (div.firstChild) {
      template.appendChild(div.firstChild);
    }
    return template;
  }
}

customElements.define("brand-component", BrandComponent);
