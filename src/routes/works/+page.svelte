<script>
	import Title from '$lib/components/Title.svelte';
	import WorkCard from '$lib/components/WorkCard.svelte';
	let { data } = $props();
</script>

<section class="parent flex-col pt-[80px]">
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
</section>
