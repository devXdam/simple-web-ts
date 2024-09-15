import "./styles/section.css";

export class SectionComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const url = this.getAttribute('data-url');
        if (url) {
            this.fetchData(url);
        } else {
            console.error('No URL provided for fetching data.');
        }
    }

    async fetchData(url: string) { // Especificar el tipo de 'url' como string
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            this.render(data.sections);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    render(sections: any[]) {
        this.innerHTML = sections.map(section => `
            <section class="${section.class}" id="${section.id}">
                <div class="text-container">
                    <header class="title-section">
                        <h3>${section.title}</h3>
                    </header>
                    <article>
                        <p>${section.content}</p>
                    </article>
                    <button-wc>+ info</button-wc>
                </div>
                <div class="image-container">
                    <picture>
                        <img
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
