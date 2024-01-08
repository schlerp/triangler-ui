<script lang="ts">
	import Fa from 'svelte-fa';
	import { faCalendarWeek } from '@fortawesome/free-solid-svg-icons';

	export let dateStarted: string;
	export let dateEnded: string | undefined;

	const ds = new Date(dateStarted).toLocaleDateString();
	const de = new Date(dateEnded).toLocaleDateString();

	let dateText: string;

	if (ds !== de) {
		dateText = `${ds} - ${de}`;
	} else if (de === 'Invalid Date') {
		dateText = `${ds} - ongoing`;
	} else {
		dateText = ds;
	}
</script>

<span><Fa icon={faCalendarWeek} /> {dateText}</span>

<style>
	span {
		color: black;
	}
</style>
