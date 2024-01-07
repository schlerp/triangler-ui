<script lang="ts">
	import Fa from 'svelte-fa';
	import { faUser, faSignOut } from '@fortawesome/free-solid-svg-icons';
	import { currentUser } from '$lib/stores/user';
</script>

<div class="wrapper">
	{#if $currentUser !== null && $currentUser.username !== undefined}
		<span>{$currentUser.username}</span>
		<div class="circle"><Fa icon={faUser} /></div>
		<a class="circle" href="/auth/logout" aria-label="Log out"><Fa icon={faSignOut} /></a>
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
