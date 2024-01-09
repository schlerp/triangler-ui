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
		<a class="nav-link first" href="/">Home</a>
		<a class="nav-link" href="/about">About</a>
		<UserBadge />
	</nav>
</div>

<Toasts />

<slot />

<style>
	:global(:root) {
		/* Colors */
		/*
        --pal-primary: #b9e7dd;
		--pal-secondary: #ffc700;
		--pal-tertiary: #fe90e7;
        */
		--pal-primary: #0affc2;
		--pal-accent: #00ccf5;
		--pal-secondary: #ffcf00;

		--pal-info: #00ccf5;
		--pal-success: #0affc2;
		--pal-warning: #ff7700;
		--pal-error: #f50076;
	}
	h1 {
		padding: 0 1rem;
		margin: auto 0;
		line-height: 1;
		font-size: 2rem;
	}
	div {
		position: relative;
		border-bottom: 2px solid black;
		display: flex;
		justify-content: space-between;
		/*background-color: white;*/
		background-color: var(--pal-primary);
		z-index: 1000;
	}
	nav {
		display: flex;
		/*background-color: white;*/
	}
	a.nav-link {
		padding: 1rem;
		border-right: 2px solid black;
	}
	a.first {
		border-left: 2px solid black;
	}
	a.nav-link:hover {
		color: white;
		background-color: black;
	}
</style>
