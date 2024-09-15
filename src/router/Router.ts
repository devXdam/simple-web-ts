import { hideSpinner, showSpinner } from "../utils/Spinner";

export class Router {
    routes: { [key: string]: () => Promise<string> };

    constructor() {
        this.routes = {};
        window.addEventListener('popstate', () => this.loadRoute());
    }

    addRoute(path: string, view: () => Promise<string>) {
        this.routes[path] = view;
    }

    navigate(path: string) {
        showSpinner();
        window.history.pushState({}, path, window.location.origin + path);
        this.loadRoute();
    }

    async loadRoute() {
        const path = window.location.pathname;
        const view = this.routes[path] || this.routes['/404'];
        if (view) {
            showSpinner();
            const content = await view();
            document.querySelector('main')!.innerHTML = content;
            hideSpinner();
        } else {
            console.error(`No view found for path: ${path}`);
            hideSpinner(); // Asegúrate de ocultar el spinner si no se encuentra la vista
        }
    }
}

const router = new Router();
export default router;
