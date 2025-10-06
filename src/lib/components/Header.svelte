<script>
	import { fadeUp } from '$lib/fadeUp';
	import { resolve } from '$app/paths';

	const links = [
		{ name: 'Home', href: '/' },
		// {name:'About',href:'/about'},
		{ name: 'Works', href: '/works' }
		// { name: 'Blogs', href: '/blogs' },
		// { name: 'Contact', href: '/contact' }
	];
</script>

<header class="parent fixed right-0 left-0 z-[1000] h-[80px] bg-porcelain">
	<nav
		class="container-custom flex h-full items-center justify-between"
		use:fadeUp={{ group: true, y: 0 }}
	>
		<div class="fade-item text-xl font-bold">
			<a href={resolve('/')}>K K HARIDEV</a>
		</div>
		<ul class="flex items-center gap-5">
			{#each links as link, i (i)}
				<li class="fade-item font-bold hover:text-charcoal">
					<a
						href={resolve(link.href)}
						class="text-sm text-charcoal uppercase duration-300 ease-in-out hover:underline sm:text-base"
						>{link.name}</a
					>
				</li>
			{/each}
		</ul>
	</nav>
</header>
