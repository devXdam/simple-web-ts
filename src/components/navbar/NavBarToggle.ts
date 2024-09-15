export const setupNavbarToggle=(buttonId: string)=> {
    const toggleButton = document.getElementById(buttonId);
    const navbar = document.querySelector('.navbar') as HTMLElement;
  
    if (toggleButton && navbar) {
      toggleButton.addEventListener('click', () => {
        navbar.classList.toggle('show');
      });
    } else {
      console.error('Elementos no encontrados');
    }
  }
 
  