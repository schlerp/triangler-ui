import type { Handle } from '@sveltejs/kit';
import cookie from 'js-cookie';

export const handle: Handle = async ({ resolve, event }) => {
	// Apply CORS header for API routes
	if (event.url.pathname.startsWith('/api')) {
		// Required for CORS to work
		if (event.request.method === 'OPTIONS') {
			return new Response(null, {
				headers: {
					'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
					'Access-Control-Allow-Origin': 'localhost, 127.0.0.1',
					'Access-Control-Allow-Headers': '*'
				}
			});
		} else {
			event.request.headers.append(
				'Cookie',
				`csrftoken=${cookie.get('csrftoken')}, sessionid=${cookie.get('sessionid')}`
			);
		}
	}

	const response = await resolve(event);
	if (event.url.pathname.startsWith('/api')) {
		response.headers.append('Access-Control-Allow-Origin', `*`);
	}
	return response;
};
