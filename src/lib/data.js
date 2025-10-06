import mso from '$lib/assets/works/MSO.webp';
import sristi from '$lib/assets/works/sristi.webp';
import bharatham from '$lib/assets/works/bharatham.webp';
import brahma from '$lib/assets/works/brahma.webp';
import grootland from '$lib/assets/works/grootland.webp';

export const works = [
	{
		title: 'Make Some Ochha',
		desc: 'Developed makesomeochha.com for Algata.in — implementing event booking, payment integration, and smooth site performance.',
		image: mso,
		link: 'https://makesomeochha.com/'
	},
	{
		title: 'Bharatham',
		desc: 'Built the Bharatham event website for Algata, designed to showcase event details and schedules with a clean, responsive interface.',
		image: bharatham,
		link: 'https://bharatham.dev.algata.in/'
	},
	{
		title: 'Srishti',
		desc: 'Developed the Sristi event site for Algata, focused on presenting event highlights and information through a fast, responsive layout.',
		image: sristi,
		link: 'https://srishti.demo.algata.in/'
	},
	{
		title: 'Grootland India',
		desc: 'Created GrootlandIndia.in, building an informative, client-facing site that highlights company services and identity with clean UI and polished responsiveness.',
		image: grootland,
		link: 'https://grootland.in/'
	},
	{
		title: 'Brahma',
		desc: 'Developed the Brahma event site for ASIET Techno cultural fest, focused on presenting event highlights and information through a fast, responsive layout.',
		image: brahma,
		link: 'https://brahma24-idh5.vercel.app//'
	}
];

export const experience = [
	{
		company: 'Algata',
		designation: 'Front End Developer',
		from: '2024',
		to: 'Present',
		desc: 'As a Front-End Developer in my freelance team, I’ve contributed to multiple projects, building responsive and efficient user interfaces. This experience enhanced my technical skills, taught me project management and collaboration, and allowed me to deliver tailored solutions for clients while supporting my education.'
	},
	{
		company: 'Suyati Technologies',
		designation: 'Front End Developer - Intern',
		from: 'Feb 2023',
		to: 'Aug 2023',
		desc: 'Completed an internship at Suyati Technologies as Front-End Developer and UI Designer for their Taxi Office Management System. Built intuitive, responsive interfaces using React, collaborating with the Django backend. Gained insights into system architecture while focusing on front-end development and UI design within a complex project environment.'
	}
];

export const skills = [
	{
		title: 'Frontend',
		skills: ['HTML/CSS', 'Svelte', 'SvelteKit', 'TailwindCSS', 'React', 'Next.js', 'GSAP']
	},
	{
		title: 'Backend',
		skills: ['Pocketbase', 'Strapi', 'Firebase']
	},
	{
		title: 'Tools',
		skills: ['VS Code', 'Git', 'GitHub', 'Figma']
	}
];
