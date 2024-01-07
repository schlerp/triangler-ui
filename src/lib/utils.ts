export const corsHeaders = {
	'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
	'Access-Control-Allow-Origin': 'localhost, 127.0.0.1',
	'Access-Control-Allow-Headers': 'Content-Type, X-CSRFToken, Set-Cookie'
};

export interface CsrfTokenResponse {
	csrfToken: string;
}

export async function getCsrfToken(): Promise<string> {
	const request = fetch('http://localhost:8000/csrf', {
		credentials: 'include',
		headers: corsHeaders
	});
	const data = await request;
	const json: CsrfTokenResponse = await data.json();
	return json.csrfToken;
}

export async function makeAuthorisedRequest(
	requestHander: (requestHandlerOptions: object) => Promise<Response>,
	requestHandlerOptions: object
): Promise<Response> {
	const request = requestHander(requestHandlerOptions);
	const data = await request;
	return await data.json();
}
