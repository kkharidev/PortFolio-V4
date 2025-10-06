<script>
	import hero from '$lib/assets/6.webm';
	import Experience from '$lib/components/Experience.svelte';
	import Title from '$lib/components/Title.svelte';
	import { fadeUp } from '$lib/fadeUp';
	import { resolve } from '$app/paths';
	import WorkCard from '../lib/components/WorkCard.svelte';

	let { data } = $props();
</script>

<main class="parent pt-[80px]">
	<div
		class="container-custom flex h-full flex-col justify-between gap-10 py-14 md:gap-12 md:py-16 lg:gap-15 lg:py-20"
		use:fadeUp={{ group: true }}
	>
		<div class="flex flex-col justify-between gap-5 min-[992px]:flex-row">
			<div class="flex flex-col items-start justify-start gap-2 font-semibold">
				<h1 class="fade-item text-3xl uppercase md:text-4xl lg:text-5xl">K K Haridev</h1>
				<p class="fade-item max-w-[45ch] text-justify text-base capitalize sm:text-left md:text-lg">
					I’m a Front-End Developer with 3+ years of experience creating seamless, user-focused
					interfaces that bridge design and technology.
				</p>
			</div>
			<div class="fade-item flex flex-col items-end justify-end gap-[1px] font-semibold uppercase">
				<p class="ssm:text-base fade-item text-sm">Based in Kerala, India</p>
				<p class="ssm:text-base fade-item text-sm">Currently at Algata llp</p>
				<a
					href={resolve('/works')}
					class="mt-3 flex cursor-pointer items-center justify-center border-[1.3px] border-charcoal px-4 py-1 text-sm uppercase duration-300 ease-in-out hover:bg-charcoal hover:text-white sm:text-base md:px-6"
				>
					Works
				</a>
			</div>
		</div>
		<div class="fade-item aspect-video max-h-[500px] w-full overflow-hidden bg-gray-400">
			<video
				src={hero}
				class="h-full w-full scale-118 object-cover object-center mix-blend-luminosity"
				autoplay
				muted
				loop
				preload="auto"
			></video>
		</div>
	</div>
</main>

<section class="parent flex-col">
	<Title title="Works" desc="Building Ideas into Reality" />
	{#each data.works as work, i (i)}
		<WorkCard
			title={work.title}
			desc={work.desc}
			image={work.image}
			link={work.link}
			direction={i % 2 === 0 ? 'right' : 'left'}
		/>
	{/each}

	<div class="container-custom flex-col items-center border-b-0 py-10 font-semibold">
		<a
			href={resolve('/works')}
			class="flex cursor-pointer items-center border-[1.3px] border-charcoal bg-transparent px-4 py-1 text-sm text-charcoal uppercase duration-300 ease-in-out hover:bg-charcoal hover:text-white sm:px-6 sm:text-base"
		>
			View ALL Work
		</a>
	</div>
</section>

<section class="parent flex-col">
	<Title title="Experience" desc="Where I’ve Contributed and Grown" class="md:hidden" />

	<div
		class="container-custom flex-col gap-10 border-y-0 px-0 py-0 font-semibold max-md:border-b-0! md:flex-row"
	>
		<div
			class="box-border hidden w-min_c flex-col border-x-[1.3px] border-mist px-6 pt-10 md:flex md:w-2/5 md:flex-col md:border-0 md:pr-8 lg:pt-10 lg:pr-10 xl:pr-12"
			use:fadeUp={{ group: true }}
		>
			<h1 class="fade-item text-xl uppercase md:text-2xl">Experience</h1>
			<p class="fade-item text-base font-medium capitalize md:text-lg">
				Where I’ve Contributed and Grown
			</p>
		</div>
		<div
			class="flex w-full flex-col px-0 pt-0 capitalize md:w-3/5 md:items-end md:gap-5 md:px-8 md:py-10 lg:px-10 lg:pt-10 xl:px-12"
		>
			{#each data.experience as experience, i (i)}
				<Experience
					company={experience.company}
					designation={experience.designation}
					from={experience.from}
					to={experience.to}
					desc={experience.desc}
				/>
			{/each}
		</div>
	</div>
</section>

<section class="parent flex-col">
	<Title title="skills" desc="Crafting Solutions with These Skills" />
	<div class="container-custom grid grid-cols-2 px-0 sm:grid-cols-3" use:fadeUp={{ group: true }}>
		{#each data.skills as skill, i (i)}
			<div
				class="fade-item flex w-full flex-col gap-1 border-r-[1.3px] border-b-1 border-mist p-7.5 sm:border-b-0 md:p-12.5"
			>
				<h2 class="text-xl font-medium uppercase">{skill.title}</h2>
				<ul class="text-sm font-normal capitalize">
					{#each skill.skills as item, i (i)}
						<li>{item}</li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
</section>
