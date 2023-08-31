<script lang="ts">
	import { Card } from 'svelte-chota';
	import type { Experiment } from '$lib/client/types';
	import ExperimentCardDateDisplay from './ExperimentCardDateDisplay.svelte';

	import Fa from 'svelte-fa';
	import { faFlaskVial } from '@fortawesome/free-solid-svg-icons';

	export let experiment: Experiment;
    console.debug(experiment)
</script>

<Card>
	<div class="header">
		<h2>
	        <Fa icon={faFlaskVial} />
            <nbsp/>{experiment.name}
        </h2>
	</div>

	<p>{experiment.description}</p>

	<div class="footer">
		<ExperimentCardDateDisplay
			dateStarted={experiment.date_started}
			dateEnded={experiment.date_ended}
		/>
	</div>
</Card>

<style>
	.header {
        color: darkblue;
	}
	.footer {
        color: grey;
	}
</style>
