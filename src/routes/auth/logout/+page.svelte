<script lang="ts">
	import { logoutCurrentUser } from '$lib/stores/user';
	import { onMount } from 'svelte';

	onMount(() => {
		logoutCurrentUser();
	});
</script>

<div class="container">
	<h2>Thanks for using Triangler!</h2>
</div>

<style>
	.container {
		padding: 2rem;
	}
</style>
