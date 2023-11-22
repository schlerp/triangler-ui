<script lang="ts">
	import Fa from 'svelte-fa';
	import { faUser } from '@fortawesome/free-solid-svg-icons';
	import { currentUser } from '$lib/stores/user';
</script>

<div class="wrapper">
	{#if $currentUser !== undefined && $currentUser.username !== undefined}
		<div class="circle"><Fa icon={faUser} /></div>
		<span>{$currentUser.username}</span>
    {:else}
        <span><a href="/auth/login">Login</a></span>
    {/if}
</div>

<style>
	.wrapper {
		display: flex;
		align-content: center;
		justify-content: center;
		margin-inline: 1rem;
	}
	span {
		margin: auto;
		padding: 0.5rem;
		font-size: 1.2rem;
		font-weight: 600;
	}
	.circle {
		margin: auto;
		border-radius: 1rem;
		width: 2rem;
		aspect-ratio: 1;
		background-color: white;
		display: flex;
		flex-direction: column;
		align-content: center;
		justify-content: center;
	}
</style>
