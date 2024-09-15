import "./styles/section.css";
export class SectionComponent extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      const url = this.getAttribute('data-url');
      this.fetchData(url as string);
    }
  
    async fetchData(url: string) {
      try {
        const response = await fetch(url);
        const data = await response.json();
        this.render(data.sections);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  
    render(sections: any[]) {
      this.innerHTML = sections.map(section => `
        <section class="${section.class}" id="${section.id}">
          <div class="col-left">
            <header class="title-section"><h3>${section.title}</h3></header>
            <article>
              <p>${section.content}</p>
            </article>
            <button-wc>+ info</button-wc>
          </div>
          <div class="col-right">
            <picture>
              <img
                width="300px"
                height="300px"
                src="${section.imgSrc}"
                alt="${section.imgAlt}"
                loading="lazy"
              />
            </picture>
          </div>
        </section>
      `).join('');
    }
  }
  
  customElements.define('section-component', SectionComponent);
  