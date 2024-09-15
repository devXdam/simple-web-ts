export const FadeSections=(()=>{
    // Función para manejar el efecto de fade al hacer scroll
const fadeInSections = () => {
    const sections = document.querySelectorAll('section'); // Selecciona todas las secciones
    const windowHeight = window.innerHeight; // Altura de la ventana

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top; // Posición de la sección respecto a la ventana

        // Si la sección está visible en la ventana
        if (sectionTop < windowHeight * 0.8) { // Ajusta el valor para controlar cuándo aparece
            section.classList.add('visible'); // Añadir la clase visible
        }
    });
};

// Agregar el evento de scroll
window.addEventListener('scroll', fadeInSections);

// Llamar a la función al cargar la página para verificar las secciones visibles
window.addEventListener('load', fadeInSections);
})()