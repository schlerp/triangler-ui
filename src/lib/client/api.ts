import { Apity } from '@cocreators-ee/apity';
import type { paths } from './backend';

const apity = Apity.for<paths>();

apity.configure({
	baseUrl: 'http://localhost:8000',
	init: {
		mode: 'cors',
		headers: {
			'Content-Type': 'application/json'
		}
	}
});

// experiments
export const getAllExperiments = apity.path('/api/v1/experiments').method('get').create();
export const getExperiment = apity
	.path('/api/v1/experiments/{experiment_id}')
	.method('get')
	.create();
export const createExperiment = apity.path('/api/v1/experiments').method('post').create();
export const updateExperiment = apity
	.path('/api/v1/experiments/{experiment_id}')
	.method('put')
	.create();
export const deleteExperiment = apity
	.path('/api/v1/experiments/{experiment_id}')
	.method('delete')
	.create();

// observations
export const getAllObservations = apity
	.path('/api/v1/experiments/{experiment_id}/observations')
	.method('get')
	.create();
export const getObservation = apity
	.path('/api/v1/experiments/{experiment_id}/observations/{observation_id}')
	.method('get')
	.create();
export const createObservation = apity
	.path('/api/v1/experiments/{experiment_id}/observations')
	.method('post')
	.create();
export const updateObservation = apity
	.path('/api/v1/experiments/{experiment_id}/observations/{observation_id}')
	.method('put')
	.create();
export const deleteObservation = apity
	.path('/api/v1/experiments/{experiment_id}/observations/{observation_id}')
	.method('delete')
	.create();

// responses
export const getAllResponses = apity
	.path('/api/v1/experiments/{experiment_id}/responses')
	.method('get')
	.create();
export const getResponse = apity
	.path('/api/v1/experiments/{experiment_id}/responses/{observation_id}')
	.method('get')
	.create();
export const createObservations = apity
	.path('/api/v1/experiments/{experiment_id}/responses')
	.method('post')
	.create();
export const updateObservations = apity
	.path('/api/v1/experiments/{experiment_id}/responses/{observation_id}')
	.method('put')
	.create();
export const deleteObservations = apity
	.path('/api/v1/experiments/{experiment_id}/responses/{observation_id}')
	.method('delete')
	.create();
