import { Apity } from '@cocreators-ee/apity';
import type { paths } from './backend';

const apity = Apity.for<paths>();

apity.configure({
	baseUrl: 'http://localhost:8000/api/v1'
});

export const getAllExperiments = apity.path('/experiments').method('get').create();
export const getExperiment = apity.path('/experiments/{experiment_id}').method('get').create();
export const createExperiment = apity.path('/experiments').method('post').create();
export const updateExperiment = apity.path('/experiments/{experiment_id}').method('put').create();
export const deleteExperiment = apity
	.path('/experiments/{experiment_id}')
	.method('delete')
	.create();

export const getAllObservations = apity
	.path('/experiments/{experiment_id}/observations')
	.method('get')
	.create();
export const getObservations = apity
	.path('/experiments/{experiment_id}/observations/{observation_id}')
	.method('get')
	.create();
export const createObservations = apity
	.path('/experiments/{experiment_id}/observations')
	.method('post')
	.create();
export const updateObservations = apity
	.path('/experiments/{experiment_id}/observations/{observation_id}')
	.method('put')
	.create();
export const deleteObservations = apity
	.path('/experiments/{experiment_id}/observations/{observation_id}')
	.method('delete')
	.create();
