export enum FetchMethod {
	'GET',
	'POST',
	'PUT',
	'DELETE'
}

export interface ExperimentIn {
	name: string;
	description?: string;
	date_started: string;
	date_ended?: string;
}

export interface Experiment extends ExperimentIn {
	id: number;
	p_value: number;
}

export interface ObservationIn {
	experience_level: number;
	chosen_sample: SampleEnum;
	observation_date: string;
}

export interface Observation extends ObservationIn {
	id: number;
	experiment: number;
	correct_sample: SampleEnum;
}

export interface JustId {
	id: number;
}

export interface Success {
	success: boolean;
}

export const SampleEnum = {
	A: 'A',
	B: 'B',
	C: 'C'
} as const;
export type SampleEnum = (typeof SampleEnum)[keyof typeof SampleEnum];
