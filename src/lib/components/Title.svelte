<script lang="ts">
	import { fadeUp } from '$lib/fadeUp';

	let {
		title,
		desc,
		class: className
	}: {
		title: string;
		desc: string;
		class?: string;
	} = $props();
</script>

<!-- <div class="parent"> -->
<div
	class="container-custom flex-col border-b-1 py-6 font-semibold md:py-8 lg:py-10 {className}"
	use:fadeUp={{ group: true }}
>
	<h1 class="fade-item text-xl uppercase md:text-2xl">{title}</h1>
	<p class="fade-item text-base font-medium capitalize md:text-lg">{desc}</p>
</div>
<!-- </div> -->
