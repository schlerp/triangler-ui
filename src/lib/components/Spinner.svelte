<script lang="ts">
	import Fa from 'svelte-fa';
	import { faSpinner } from '@fortawesome/free-solid-svg-icons';
</script>

<div>
	<Fa icon={faSpinner} size="3x" pulse />
</div>

<style>
	div {
		display: flex;
		margin: auto;
	}
</style>
