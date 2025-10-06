<script>
	import { resolve } from '$app/paths';
	import { fadeUp } from '$lib/fadeUp';

	let { title, desc, image, link, direction } = $props();
</script>

<!-- <div class="card-parent"> -->
<div class="card-container group border-b">
	<div
		class="flex w-full flex-col-reverse items-center gap-5 py-7.5 sm:flex-row sm:gap-10 sm:py-12.5 {direction ===
		'left'
			? 'sm:flex-row-reverse '
			: ''}"
	>
		<div
			class="flex h-full w-full flex-col items-start justify-center gap-4 sm:w-1/2"
			use:fadeUp={{ group: true }}
		>
			<div class="flex flex-col gap-1">
				<h2 class="fade-item text-lg font-medium uppercase md:text-xl">{title}</h2>
				<p class="fade-item line-clamp-3 max-w-[55ch] text-justify text-sm capitalize md:text-base">
					{desc}
				</p>
			</div>
			<div class="fade-item">
				<a
					href={resolve(link)}
					target="__blank"
					class="flex cursor-pointer items-center border-[1.3px] border-charcoal bg-charcoal px-4 py-1 text-sm text-white uppercase duration-300 ease-in-out hover:bg-transparent hover:text-charcoal sm:px-6 sm:text-base"
				>
					View Work
				</a>
			</div>
		</div>
		<div
			class="fade-item aspect-video w-full bg-gray-200 grayscale duration-300 group-hover:grayscale-0 sm:w-1/2"
			use:fadeUp={{ group: false }}
		>
			<img
				src={image}
				alt="work"
				class="h-full w-full object-cover object-top transition-all duration-[4000ms] ease-in-out group-hover:object-bottom"
			/>
		</div>
	</div>
</div>
<!-- </div> -->
