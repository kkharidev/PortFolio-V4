<script>
	import Icon from '@iconify/svelte';
	import img from '$lib/assets/footer.webp';
	import { fadeUp } from '$lib/fadeUp';
	import { resolve } from '$app/paths';
	const links = [
		{ href: 'https://instagram.com/kkharidev', icon: 'ri:instagram-fill' },
		{ href: 'https://in.linkedin.com/in/kkharidev', icon: 'mdi:linkedin' },
		{ href: 'https://github.com/kkharidev', icon: 'mdi:github' },
		{ href: 'https://gitlab.com/kkharidev', icon: 'mdi:gitlab' }
	];
</script>

<footer class="parent flex-col">
	<div
		class="container-custom flex-col-reverse gap-5 py-7.5 font-semibold sm:flex-row sm:gap-10 sm:py-12.5"
	>
		<div
			class="fade-item flex w-full flex-col justify-between gap-15 sm:w-1/2"
			use:fadeUp={{ group: true }}
		>
			<div>
				<h1 class="fade-item text-xl uppercase md:text-2xl">Connect</h1>
				<p class="fade-item text-base font-medium capitalize md:text-lg">Lets stay connected</p>
			</div>
			<div class="fade-item flex flex-col gap-7.5">
				<div>
					<h5 class="fade-item text-lg font-semibold">Email</h5>
					<div class="fade-item flex items-center gap-1 text-lg font-normal text-charcoal">
						haridev@gmail.com <button class="cursor-pointer"
							><Icon icon="solar:copy-line-duotone" class="h-6 w-6" /></button
						>
					</div>
				</div>
				<div class="fade-item flex gap-10 md:gap-13.5">
					{#each links as link, i (i)}
						<div class="fade-item">
							<a
								href={link.href}
								target="__blank"
								class="flex items-center gap-2.5 text-lg font-normal text-charcoal duration-300 ease-in-out hover:opacity-80"
							>
								<Icon icon={link.icon} class="h-7 w-7" />
							</a>
						</div>
					{/each}
				</div>
			</div>
		</div>
		<div
			class="flex aspect-video w-full flex-col gap-5 overflow-hidden bg-gray-400 capitalize sm:w-1/2"
			use:fadeUp={{ group: false }}
		>
			<!-- <video
				src={video}
				class="h-full w-full scale-118 object-cover object-center mix-blend-luminosity"
				autoplay
				muted
				loop
				preload="auto"
			></video> -->
			<img
				src={img}
				alt="footer"
				class="h-full w-full object-cover object-center mix-blend-luminosity"
			/>
		</div>
	</div>
</footer>
