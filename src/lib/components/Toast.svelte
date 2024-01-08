<script lang="ts">
	import Fa from 'svelte-fa';
	import { onMount } from 'svelte';
	import { faInfo, faCheck, faExclamation } from '@fortawesome/free-solid-svg-icons';
	import { createEventDispatcher } from 'svelte';
	import type { ToastType } from '$lib/types';

	const dispatch = createEventDispatcher();

	export let timeout = 3000;
	export let type: ToastType = 'success';

	function closeToast() {
		dispatch('dismiss');
	}

	onMount(() => {
		setTimeout(() => {
			closeToast();
		}, timeout);
	});
</script>

<article class={`toast ${type}`}
>
	<div class="circle">
		{#if type === 'error'}
			<Fa icon={faExclamation} />
        {:else if type === 'warning'}
			<Fa icon={faExclamation} />
        {:else if type === 'success'}
            <Fa icon={faCheck} />
		{:else}
			<Fa icon={faInfo} />
		{/if}
	</div>
	<p class="content"><slot /></p>
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
	.close {
		border: 2px solid black;
		border-radius: 0.2rem;
		background-color: #fafafa;
		margin-bottom: auto;
	}
	.close:hover {
		cursor: pointer;
	}
	.content {
		width: 15rem;
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
		background-color: var(--pal-success);
	}
    .success {
		background-color: var(--pal-success);
	}
	.warning {
		background-color: var(--pal-warning);
	}
	.error {
		background-color: var(--pal-error);
	}
</style>
