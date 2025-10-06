<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { blur } from 'svelte/transition';
	import { page } from '$app/state';
	import { onMount } from 'svelte';
	import { lenisScrollInstance } from '$lib/lenis';
	import { fadeUp } from '$lib/fadeUp';

	onMount(() => {
		lenisScrollInstance();
	});

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

<Header />
{#key page.url}
	<div in:blur={{ amount: 15 }}>
		{@render children?.()}
	</div>
{/key}
<!-- {#if page.url.pathname != '/contact'} -->
<Footer />
<!-- {/if} -->
<div class="parent overflow-hidden">
	<div class="container-custom font-sm justify-center border-t-0! py-5 text-center font-medium">
		<div use:fadeUp>
			<p>Copyright © {new Date().getFullYear()} K K Haridev All rights reserved.</p>
		</div>
	</div>
</div>
