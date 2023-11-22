<script lang="ts">
	import Input from '$lib/components/Input.svelte';
	import Button from '$lib/components/Button.svelte';
	import type { PageData } from './$types';
	import type { User } from '$lib/types';
	import { currentUser } from '$lib/stores/user';

	interface LoginResponse {
		success: boolean;
		error: string | undefined;
		user: User;
	}

	//export let data: PageData;

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

	interface CsrfTokenResponse {
		csrfToken: string;
	}

	async function getCsrfToken(): Promise<string> {
		const request = fetch('http://localhost:8000/auth/csrf', { credentials: 'include' });
		const data = await request;
		const json: CsrfTokenResponse = await data.json();
		return json.csrfToken;
	}

	async function handleLogin() {
		fetch('http://localhost:8000/auth/login/', {
			method: 'POST',
			credentials: 'include',
			body: JSON.stringify({ username, password }),
			headers: {
				Accept: 'application/json',
				'X-CSRFToken': await getCsrfToken()
			}
		})
			.then((response) => {
				console.debug(response);
				return response.json();
			})
			.then((data: LoginResponse) => {
				console.log(JSON.stringify(data));
				if (data.error === null) {
					console.debug('returned user:', data.user);
					currentUser.set(data.user);
					isError = false;
					resetForm();
				} else {
					isError = true;
					resetForm(true);
				}
			});
	}

	$: isLoggedIn = $currentUser !== undefined && $currentUser.username !== undefined;
</script>

<div class="container">
	<form on:submit|preventDefault={() => handleLogin()}>
		<Input label="Username" name="username" type="text" bind:value={username} />
		<Input label="Password" name="password" type="password" bind:value={password} />
		<Button>Sign In</Button>
		{#if isError}
			<p class="error">Incorrect username or password! Please try again.</p>
		{/if}
	</form>
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
</style>
