import type { PageLoadEvent } from './$types';

interface CsrfTokenResponse {
	csrfToken: string;
}

export async function load({ fetch, params }: PageLoadEvent): CsrfToken {
	const request = fetch('http://localhost:8000/auth/csrf', { credentials: 'same-origin' });
	const data = await request;
	return await data.json();
}
