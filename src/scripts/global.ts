// Logic for all pages

const root = document.documentElement;

// Allow animations after the window loads or a 2-second fallback, whichever comes first.
const allowAnimations = () => {
	root.classList.add('can-animate');
};

setTimeout(allowAnimations, 2000);

window.addEventListener('load', allowAnimations);
