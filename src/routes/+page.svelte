<script lang="ts">
	import cookie from 'js-cookie';
	import Spinner from '$lib/components/Spinner.svelte';
	import { getAllExperiments } from '$lib/client/api';
	import ExperimentCard from '$lib/components/ExperimentCard.svelte';
	import { currentUser } from '$lib/stores/user';

	const request = getAllExperiments({}, undefined, {
		headers: {
			Authorization: `Bearer ${$currentUser ? $currentUser.access : ''}`,
			'X-CSRFToken': cookie.get('csrftoken') || '',
			cookies: `csrftoken=${cookie.get('csrftoken')}, sessionid=${cookie.get('sessionid')}`
		}
	});
	const requestReady = request.ready;
</script>

<div class="container">
	<h1>All Experiments</h1>

	<div class="card-wrapper">
		{#await $requestReady}
			<Spinner />
		{:then resp}
			{#if resp !== undefined && resp.ok}
				{#each resp.data as experiment}
					<a href={`/experiments/${experiment.id}`}>
						<ExperimentCard {experiment} />
					</a>
				{/each}
			{:else}
				<p>Error while loading request</p>
			{/if}
		{/await}
	</div>
	<!--<button on:click={() => request.reload()}> Reload Request </button>-->
</div>

<style>
	.container {
		padding: 2rem;
	}
	.card-wrapper {
		display: flex;
		gap: 1em;
		flex-direction: column;
	}
</style>
