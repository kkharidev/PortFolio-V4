import { experience, works, skills } from '$lib/data.js';

export const load = () => {
	return {
		works: works.slice(0, 2),
		experience: experience,
		skills: skills
	};
};
