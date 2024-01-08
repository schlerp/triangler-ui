import type { Experiment, ExperimentIn, JustId, Success, FetchMethod } from './types';

class ApiClient {
	baseUrl: URL;

	constructor(baseUrl: URL) {
		this.baseUrl = baseUrl;
	}

	async makeRequest(
		path: string,
		method: FetchMethod,
		payload?: ExperimentIn
	): Experiment | JustId | Success {
		const requestOpts = {
			method,
			body: string,
			headers: {}
		};
		if (typeof payload !== undefined) {
			requestOpts.body = JSON.stringify(payload);
			requestOpts.headers = {
				'Content-Type': 'application/json'
			};
		}
		return fetch(path, requestOpts);
	}

	getAllExperiments(): Experiment[] {
		return [];
	}

	getExperiment(id: number): Experiment {
		return {
			id: 1,
			name: 'test experiment',
			dateStarted: new Date('01/01/2001'),
			correctSample: 'A'
		};
	}

	createExperiment(payload: ExperimentIn): JustId {
		return { id: 1 };
	}

	updateExperiment(id: number, payload: ExperimentIn): Success {
		return { success: true };
	}
}
