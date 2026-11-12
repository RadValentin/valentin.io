// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_AUTHOR = 'Valentin Radulescu';
export const SITE_TITLE = `${SITE_AUTHOR} - Front-End Developer`;
export const SITE_DESCRIPTION =
	'Front-end developer based in Bucharest, with experience at Skype and Hootsuite. Explore my projects, open-source work, writing, and resume.';

export const MOTION_KEY = 'enable-motion';

export function getBlogPostSlug(id: string) {
	return id.replace(/\/index$/, '');
}
