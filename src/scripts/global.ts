// Logic for all pages

const root = document.documentElement;

// Mark page as loaded so animations can begin playing either on window event or after 2s.
const addLoadedClass = () => {
	root.classList.add('is-loaded');
};

const loadTimeout = setTimeout(() => {
	addLoadedClass();
}, 2000);

window.addEventListener('load', () => {
	addLoadedClass();
});