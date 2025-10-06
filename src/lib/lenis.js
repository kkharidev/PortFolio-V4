import Lenis from 'lenis';
import { gsap, ScrollTrigger } from '$lib/gsap';

let lenisInstance = null;

export const lenisScrollInstance = () => {
	if (!lenisInstance) {
		const lenis = new Lenis();
		lenis.on('scroll', ScrollTrigger.update);
		gsap.ticker.add((time) => {
			lenis.raf(time * 1000);
		});
		gsap.ticker.lagSmoothing(0);

		lenisInstance = lenis;
	}

	return lenisInstance;
};
