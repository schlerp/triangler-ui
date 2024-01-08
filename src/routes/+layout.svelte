<script lang="ts">
	import Fa from 'svelte-fa';
	import { faCircleNodes } from '@fortawesome/free-solid-svg-icons';
	import UserBadge from '$lib/components/UserBadge.svelte';
	import Toasts from '$lib/components/Toasts.svelte';
</script>

<div>
	<h1>
		<a href="/"
			><Fa icon={faCircleNodes} />
			<nbsp />Triangler</a
		>
	</h1>
	<nav>
		<UserBadge />
		<a class="nav-link" href="/">Home</a>
		<a class="nav-link" href="/about">About</a>
	</nav>
</div>

<Toasts />

<slot />

<style>
	:global(:root) {
		/* Colors */
		--pal-primary: #b9e7dd;
		--pal-secondary: #ffc700;
		--pal-tertiary: #fe90e7;

		--pal-success: var(--pal-primary);
		--pal-warning: var(--pal-secondary);
		--pal-error: var(--pal-tertiary);
	}
	h1 {
		padding: 0 1rem;
		margin: auto 0;
		line-height: 1;
		font-size: 2rem;
	}
	div {
		border-bottom: 2px solid black;
		display: flex;
		justify-content: space-between;
		/*background-color: white;*/
		background-color: var(--pal-primary);
	}
	nav {
		display: flex;
		/*background-color: white;*/
	}
	a.nav-link {
		padding: 1rem;
		border-left: 2px solid black;
	}
	a.nav-link:hover {
		color: white;
		background-color: black;
	}
</style>
