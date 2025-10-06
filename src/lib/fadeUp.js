// src/lib/actions/fadeUp.js
import { gsap } from '$lib/gsap';

export function fadeUp(
	node,
	{ group = false, y = 40, duration = 1, stagger = 0.15, delay = 0, once = false } = {}
) {
	let animation; // <-- Variable to hold the GSAP animation object

	const commonProps = {
		y,
		opacity: 0,
		duration,
		delay,
		ease: 'power3.out'
	};

	if (group) {
		const items = node.querySelectorAll('.fade-item');
		animation = gsap.from(items, {
			...commonProps,
			stagger,
			scrollTrigger: {
				trigger: node,
				start: 'top 90%',
				toggleActions: once ? 'play none none none' : 'play none none reverse'
			}
		});
	} else {
		animation = gsap.from(node, {
			...commonProps,
			scrollTrigger: {
				trigger: node,
				start: 'top 100%',
				toggleActions: once ? 'play none none none' : 'play none none reverse'
			}
		});
	}

	return {
		destroy() {
			// ✅ Kill only the ScrollTrigger associated with this specific animation
			if (animation && animation.scrollTrigger) {
				animation.scrollTrigger.kill();
			}
		}
	};
}
