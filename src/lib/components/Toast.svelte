<script lang="ts">
	import Fa from 'svelte-fa';
	import { onMount } from 'svelte';
	import { faInfo } from '@fortawesome/free-solid-svg-icons';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let timeout = 3000;

	function closeToast() {
		dispatch('dismiss');
	}

	onMount(() => {
		setTimeout(() => {
			closeToast();
		}, timeout);
	});
</script>

<article class="toast">
	<div class="circle"><Fa icon={faInfo} /></div>
	<slot />
	<button class="close" on:click={closeToast}>X</button>
</article>

<style>
	.toast {
		display: flex;
		gap: 0.5em;
		padding: 0.5em;
		border: 2px solid black;
		background-color: #b9e7dd;
		border-radius: 0.2rem;
		align-items: center;
		margin: 0 auto 0.5rem auto;
		width: 20rem;
	}
	.circle {
		margin: auto;
		border-radius: 1rem;
		width: 2rem;
		aspect-ratio: 1;
		background-color: white;
		display: flex;
		flex-direction: column;
		align-content: center;
		justify-content: center;
	}
</style>
