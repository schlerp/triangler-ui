import { getExperiment, getAllResponses, getAllObservations } from '$lib/client/api';
import type { PageLoadEvent } from './$types';

export async function load({ fetch, params }: PageLoadEvent) {
	return {
		experiment: getExperiment({ experiment_id: params.id }, fetch),
		observations: getAllObservations({ experiment_id: params.id }, fetch),
		responses: getAllResponses({ experiment_id: params.id }, fetch)
	};
}
