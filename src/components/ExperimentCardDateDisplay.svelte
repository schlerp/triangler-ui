<script lang="ts">
	import Fa from 'svelte-fa';
	import { faCalendarWeek } from '@fortawesome/free-solid-svg-icons';

	export let dateStarted: string;
	export let dateEnded: string | undefined;

	const today = new Date();
</script>

<span>
	<Fa icon={faCalendarWeek} />
	{#if dateEnded !== null}
		Ran {dateStarted} to {dateEnded}
	{:else if Date.parse(dateEnded) > Date.parse(`${today}`)}
		Running {dateStarted} until {dateEnded}
	{:else}
		Running since {dateStarted}
	{/if}
</span>
