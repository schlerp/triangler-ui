<script lang="ts">
	import 'chota';
	import { Container } from 'svelte-chota';
    import Spinner from '../components/Spinner.svelte';
	import { getAllExperiments } from '$lib/client/api';
	import ExperimentCard from '../components/ExperimentCard.svelte';

	const request = getAllExperiments({});
	const requestReady = request.ready;
</script>

<Container>
	<h1>All Experiments</h1>

	<div class="card-wrapper">
		{#await $requestReady}
			<Spinner />
		{:then resp}
			{#if resp.ok}
				{#each resp.data as experiment}
					<ExperimentCard {experiment} />
				{/each}
			{:else}
				<p>Error while loading request</p>
			{/if}
		{/await}
	</div>
	<button on:click={() => request.reload()}> Reload Request </button>
</Container>

<style>
	.card-wrapper {
		display: flex;
		gap: 1em;
		margin: 1em;
	}
</style>
