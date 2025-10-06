<script>
	import { fadeUp } from '$lib/fadeUp';

	let { company, designation, from, to, desc } = $props();
</script>

<div
	class="flex w-full flex-col gap-2.5 border-[1.3px] border-mist px-5 py-7.5 md:max-w-[651px]"
	use:fadeUp={{ group: true }}
>
	<div class="fade-item flex flex-col">
		<h3 class="fade-item text-lg font-semibold uppercase">{company}</h3>
		<h2 class="fade-item text-xl font-semibold">{designation}</h2>
		<span class="fade-item text-lg font-semibold">{from} - {to}</span>
	</div>
	<p class="fade-item text-sm font-normal sm:text-base">
		{desc}
	</p>
</div>
