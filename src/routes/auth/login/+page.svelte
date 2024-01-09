<script lang="ts">
	import Input from '$lib/components/Input.svelte';
	import Button from '$lib/components/Button.svelte';
	import type { User } from '$lib/types';
	import { currentUser } from '$lib/stores/user';
	import { corsHeaders, getCsrfToken } from '$lib/utils';
	import { addToast } from '$lib/stores/toasts';

	let username = '';
	let password = '';
	let isLoggedIn = false;
	let isError = false;

	function resetForm(onlyPassword = false) {
		if (!onlyPassword) {
			username = '';
		}
		password = '';
	}

	async function handleLogin() {
		fetch('http://localhost:8000/api/v1/token/pair', {
			method: 'POST',
			credentials: 'include',
			body: JSON.stringify({ username, password }),
			headers: {
				Accept: 'application/json',
				'X-CSRFToken': await getCsrfToken(),
				...corsHeaders
			}
		})
			.then((response) => {
				console.debug(response);
				if (response.ok) {
					return response.json();
				} else {
					throw new Error('Username or password incorrect!');
				}
			})
			.then((data: User) => {
				console.debug('returned user:', data.username);
				console.debug(JSON.stringify(data));
				currentUser.set(data);
				isError = false;
				addToast({
					type: 'info',
					content: `Welcome back, ${data.username}!`
				});
				resetForm();
			})
			.catch((error) => {
				console.error('Error:', error);
				isError = true;
				resetForm(true);
			});
	}

	$: isLoggedIn = $currentUser !== null && $currentUser.username !== undefined;
</script>

<div class="container">
	{#if isLoggedIn}
		<h1>Already logged in!</h1>
		<span><a href="/auth/logout">Logout</a></span>
		<span><a href="/">Go to home</a></span>
	{:else}
		<form on:submit|preventDefault={() => handleLogin()}>
			<Input label="Username" name="username" type="text" bind:value={username} />
			<Input label="Password" name="password" type="password" bind:value={password} />
			<Button>Sign In</Button>
			{#if isError}
				<p class="error">Incorrect username or password! Please try again.</p>
			{/if}
		</form>
	{/if}
	<h1>is logged in: {isLoggedIn}</h1>
</div>

<style>
	form {
		display: flex;
		flex-direction: column;
		gap: calc(2 * 0.5rem);
		padding: 0.5rem;
		width: 50%;
		min-width: 20rem;
		margin: auto;
	}
	p.error {
		color: red;
	}
	span {
		border: 2px solid black;
		border-radius: 0.2rem;
		padding: 0.5em;
	}
</style>
