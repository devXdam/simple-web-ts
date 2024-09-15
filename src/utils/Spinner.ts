import "./spinner.css";

export const showSpinner = () => {
    const spinner = document.getElementById('loading-spinner');
    if (spinner) {
        spinner.style.display = 'flex';
    }
};

export const hideSpinner = () => {
    const spinner = document.getElementById('loading-spinner');
    if (spinner) {
        spinner.style.display = 'none';
    }
};

export const Spinner = (() => {
    window.addEventListener('load', hideSpinner);
    window.addEventListener('popstate', () => {
        showSpinner();
        setTimeout(hideSpinner, 1000); // Simulate loading time
    });
})();
