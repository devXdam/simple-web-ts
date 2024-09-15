import "./styles/sidebar.css";

export class SidebarComponent extends HTMLElement {
  pages: { name: string, url: string }[] = [];

  constructor() {
    super();
  }

  async connectedCallback() {
    const url = this.getAttribute('data-url');
    const ulClass = this.getAttribute('data-ul-class') || '';
    if (url) {
      await this.fetchPages(url);
      this.render(ulClass);
    } else {
      console.error('No URL provided for fetching pages.');
    }
  }

  async fetchPages(url: string) {
    const cachedPages = localStorage.getItem('cachedPages');
    if (cachedPages) {
      this.pages = JSON.parse(cachedPages);
    } else {
      try {
        const response = await fetch(url);
        this.pages = await response.json();
        localStorage.setItem('cachedPages', JSON.stringify(this.pages));
      } catch (error) {
        console.error('Error fetching pages:', error);
      }
    }
  }

  render(ulClass: string) {
    const fragment = document.createDocumentFragment();
    const ul = document.createElement('ul');
    ul.className = `sidebar ${ulClass}`;

    this.pages.map(page => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = page.url;
      a.textContent = page.name;
      a.setAttribute("data-path",page.url)
      li.appendChild(a);
      fragment.appendChild(li);
    });

    ul.appendChild(fragment);
    this.innerHTML = '';
    this.appendChild(ul);
  }
}

customElements.define('sidebar-component', SidebarComponent);
