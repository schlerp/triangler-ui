<script lang="ts">
	import Fa from 'svelte-fa';
	import { onMount } from 'svelte';
	import { faInfo, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let timeout = 3000;
    export let type: "info" | "error" = "info";

	function closeToast() {
		dispatch('dismiss');
	}

	onMount(() => {
		setTimeout(() => {
			closeToast();
		}, timeout);
	});
</script>

<article class={`toast ${type}`}>
	<div class="circle">
        {#if type === "error"}
            <Fa icon={faExclamationTriangle} />
        {:else}
            <Fa icon={faInfo} />
        {/if}
    </div>
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
        justify-content: space-between;
		margin: 0 auto 0.5rem auto;
		width: 20rem;
	}
	.circle {
		border-radius: 1rem;
		width: 2rem;
		aspect-ratio: 1;
		background-color: white;
		display: flex;
		flex-direction: column;
		align-content: center;
		justify-content: center;
	}
    .info {
		background-color: #ffc700;
    }
    .error {
		background-color: #fe90e7;
    }
</style>
