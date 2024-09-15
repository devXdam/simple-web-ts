import { showSpinner } from "../utils/Spinner";
import router from '../router/Router.js';
import { homeView } from './pages/home.js';
import { aboutView } from './pages/about.js';
import { servicesView } from './pages/services.js';
import { galleryView } from './pages/gallery.js';
import { testimonialsView } from './pages/testimonials.js';
import { pricesView } from './pages/prices.js';
import { blogView } from './pages/blog.js';
import { contactView } from './pages/contact.js';
import { notFoundView } from './pages/notFound.js';

export const Pages = (() => {

        // Add routes
        router.addRoute('/', homeView);
        router.addRoute('/home', homeView);
        router.addRoute('/about', aboutView);
        router.addRoute('/services', servicesView);
        router.addRoute('/gallery', galleryView);
        router.addRoute('/testimonials', testimonialsView);
        router.addRoute('/prices', pricesView);
        router.addRoute('/blog', blogView);
        router.addRoute('/contact', contactView);
        router.addRoute('/404', notFoundView);

        // Initial load
        router.loadRoute();
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', event => {
                event.preventDefault();
                const path = link.getAttribute('data-path');
                if (path) {
                    showSpinner();
                    router.navigate(path);
                }
            });
        });

    }
)()