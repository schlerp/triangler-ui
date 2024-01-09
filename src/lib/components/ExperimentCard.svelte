<script lang="ts">
	import type { Experiment } from '$lib/client/types';
	import ExperimentDateRange from '$lib/components/ExperimentDateRange.svelte';

	import Fa from 'svelte-fa';
	import { faFlaskVial } from '@fortawesome/free-solid-svg-icons';

	export let experiment: Experiment;
</script>

<div class="wrapper">
	<div class="left">
		<Fa icon={faFlaskVial} size="3rem" style="margin: auto;" />
	</div>
	<div class="right">
		<div class="header">
			<h2>{experiment.name}</h2>
			<span class="metadata">
				<h3><em>p</em>-value {experiment.p_value.toFixed(3)}</h3>
				<ExperimentDateRange
					dateStarted={experiment.date_started}
					dateEnded={experiment.date_ended}
				/>
			</span>
		</div>
		<div class="subheader" />
		<!--<p>{experiment.description}</p>-->
	</div>
</div>

<style>
	div.wrapper {
		border: 2px solid black;
		padding: 1em;
		background-color: white;
		margin: 0;
		background-color: var(--pal-secondary);
		border-radius: 4px;
		box-shadow: 4px 4px 0 black;
		position: relative;
		transition: ease 0.1s;
		display: flex;
		flex-direction: row;
		gap: 1rem;
	}
	div.wrapper:hover {
		background-color: var(--pal-accent);
		box-shadow: 5px 5px 0 black;
		transform: translateX(-1px) translateY(-1px);
	}
	div.wrapper:active {
		box-shadow: 1px 1px 0 black;
		transform: translateX(1px) translateY(1px);
	}
	div.left {
		display: flex;
		justify-content: space-around;
		align-content: space-around;
	}
	h3 {
		text-align: right;
	}

	h2,
	h3 {
		margin: 0;
	}
	.header {
		color: black;
		display: flex;
		justify-content: space-between;
	}
	.subheader {
		text-align: right;
		color: grey;
	}
</style>
