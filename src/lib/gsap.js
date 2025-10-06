import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin.js';

if (typeof window !== 'undefined') {
	gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
}

export * from 'gsap';
export { ScrollToPlugin, ScrollTrigger };
