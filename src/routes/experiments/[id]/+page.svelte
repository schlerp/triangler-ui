<script lang="ts">
	import type { PageData } from './$types';

	import Spinner from '$lib/components/Spinner.svelte';
	import ExperimentDateRange from '$lib/components/ExperimentDateRange.svelte';

	type SampleChoice = 'A' | 'B' | 'C';
	interface EnrichedResponse {
		createdAt: Date; // observation
		correctSample: SampleChoice; // observation
		experienceLevel?: string; // response
		chosenSample?: SampleChoice; // response
		responseDate?: Date; // response
		isCorrect?: boolean; // response
	}

	export let data: PageData;

	let experimentRequest = data.experiment;
	const experimentRequestReady = experimentRequest.ready;

	async function enrichResponses() {
		const observationsApiResponse = await data.observations.result;
		const responsesApiResponse = await data.responses.result;

		let enrichedResponses: EnrichedResponse[] = [];

		if (observationsApiResponse.ok) {
			for (let observation of observationsApiResponse.data) {
				let experienceLevel: string | undefined = undefined;
				let chosenSample: SampleChoice | undefined = undefined;
				let responseDate: Date | undefined = undefined;
				let isCorrect: boolean | undefined = undefined;

				if (responsesApiResponse.ok) {
					const thisRepsonse = responsesApiResponse.data.find((response) => {
						return response.observation_id === observation.id;
					});
					if (thisRepsonse !== undefined) {
						experienceLevel = thisRepsonse.experience_level;
						chosenSample = thisRepsonse.chosen_sample as SampleChoice;
						responseDate = new Date(thisRepsonse.response_date);
						isCorrect = thisRepsonse.is_correct;
					}
				}
				enrichedResponses.push({
					createdAt: new Date(observation.created_at),
					correctSample: observation.correct_sample as SampleChoice,
					experienceLevel,
					chosenSample,
					responseDate,
					isCorrect
				});
			}

			return { enrichedResponses, error: undefined };
		} else {
			return { enrichedResponses: [], error: 'Failed to load observations!' };
		}
	}
</script>

<div class="container">
	{#await $experimentRequestReady}
		<Spinner />
	{:then resp}
		{#if resp.ok}
			<div class="header">
				<h2>
					{resp.data.name}
				</h2>
			</div>
			<div class="subheader">
				<ExperimentDateRange
					dateStarted={resp.data.date_started}
					dateEnded={resp.data.date_ended}
				/>
				<h3><em>p</em>-value {resp.data.p_value.toFixed(3)}</h3>
			</div>

			<p>{resp.data.description}</p>
		{:else}
			<p>Error while loading experiment data.</p>
		{/if}
	{/await}
	<!--<button on:click={() => data.experiment.reload()}> Reload Request </button>-->

	<h3>Observations</h3>
	{#await enrichResponses()}
		<Spinner />
	{:then resp}
		{#if resp.error !== undefined}
			<p>{resp.error}</p>
		{:else if resp.enrichedResponses.length > 0}
			<table>
				<thead>
					<tr>
						<th>Served Time</th>
						<th>Correct Sample</th>
						<th>Response Time</th>
						<th>Experience Level</th>
						<th>Chosen Sample</th>
						<th>Is Correct</th>
					</tr>
				</thead>
				<tbody>
					{#each resp.enrichedResponses as observation}
						<tr>
							<td>{observation.createdAt.toLocaleString()}</td>
							<td>{observation.correctSample}</td>
							<td>{observation.responseDate?.toLocaleString() || ''}</td>
							<td>{observation.experienceLevel || ''}</td>
							<td>{observation.chosenSample || ''}</td>
							<td>{observation.isCorrect || ''}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		{:else}
			<p>No observations have been recorded yet.</p>
		{/if}
	{/await}
	<!--<button on:click={() => data.experiment.reload()}> Reload Request </button>-->
</div>

<style>
	h2 {
		margin-bottom: 0.5rem;
		margin-top: 0.5rem;
	}
	h3 {
		padding: 0;
		margin: 0;
	}
	.container {
		padding: 2rem;
	}
	.subheader {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	table {
		background-color: var(--pal-secondary);
		border: 2px solid black;
		border-spacing: 0;
		width: 100%;
		border-radius: 4px;
		box-shadow: 4px 4px 0 black;
	}
	tbody tr:hover {
		background-color: var(--pal-accent);
	}
	td {
		text-align: center;
		border: none;
	}
</style>
