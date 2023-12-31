/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
	'/api/v1/experiments': {
		/**
		 * Get All Experiments
		 * @description Gets all experiments defined in this application.
		 */
		get: operations['experiments_api_get_all_experiments'];
		/**
		 * Create Experiment
		 * @description Creates a new experiment with the supplied payload, returns the experiment id.
		 */
		post: operations['experiments_api_create_experiment'];
	};
	'/api/v1/experiments/{experiment_id}': {
		/**
		 * Get Experiment By Id
		 * @description Get a specific experiemnt by its experiment ID.
		 */
		get: operations['experiments_api_get_experiment_by_id'];
		/**
		 * Update Experiment
		 * @description Updates the experiment with `experiment id`, using supplied payload
		 */
		put: operations['experiments_api_update_experiment'];
		/**
		 * Delete Experiment
		 * @description Deletes the experiment with a matching id.
		 */
		delete: operations['experiments_api_delete_experiment'];
	};
	'/api/v1/experiments/{experiment_id}/observations': {
		/**
		 * Get All Observations
		 * @description Gets all observations defined for provided experiment id.
		 */
		get: operations['experiments_api_get_all_observations'];
		/**
		 * Create Observation
		 * @description Creates a new observation with the supplied payload, returns the observation id.
		 */
		post: operations['experiments_api_create_observation'];
	};
	'/api/v1/experiments/{experiment_id}/observations/{observation_id}': {
		/**
		 * Get Observation By Id
		 * @description Get a specific observation by its experiment id and observation id.
		 */
		get: operations['experiments_api_get_observation_by_id'];
		/**
		 * Update Observation
		 * @description Updates the observation on experiment, using supplied payload
		 */
		put: operations['experiments_api_update_observation'];
		/**
		 * Delete Observation
		 * @description Deletes the observation on provided experiment with a matching id.
		 */
		delete: operations['experiments_api_delete_observation'];
	};
	'/api/v1/experiments/{experiment_id}/responses': {
		/**
		 * Get All Observation Responses
		 * @description Gets all observations defined for provided experiment id.
		 */
		get: operations['experiments_api_get_all_observation_responses'];
		/**
		 * Create Observation Response
		 * @description Creates a new observation with the supplied payload, returns the observation id.
		 */
		post: operations['experiments_api_create_observation_response'];
	};
	'/api/v1/experiments/{experiment_id}/responses/{observation_id}': {
		/**
		 * Get Observation Response By Id
		 * @description Get a specific observation by its experiment id and observation id.
		 */
		get: operations['experiments_api_get_observation_response_by_id'];
		/**
		 * Update Observation Response
		 * @description Updates the observation on experiment, using supplied payload
		 */
		put: operations['experiments_api_update_observation_response'];
		/**
		 * Delete Observation Response
		 * @description Deletes the observation on provided experiment with a matching id.
		 */
		delete: operations['experiments_api_delete_observation_response'];
	};
}

export type webhooks = Record<string, never>;

export interface components {
	schemas: {
		/** ExperimentOut */
		ExperimentOut: {
			/** Id */
			id?: number;
			/** Name */
			name: string;
			/** Description */
			description: string;
			/**
			 * Date Started
			 * Format: date
			 */
			date_started: string;
			/**
			 * Date Ended
			 * Format: date
			 */
			date_ended: string;
			/** Sample Size */
			sample_size: number;
			/** P Value */
			p_value: number;
		};
		/** JustId */
		JustId: {
			/** Id */
			id: number;
		};
		/** ExperimentIn */
		ExperimentIn: {
			/** Name */
			name: string;
			/** Description */
			description: string;
			/**
			 * Date Started
			 * Format: date
			 */
			date_started: string;
			/**
			 * Date Ended
			 * Format: date
			 */
			date_ended: string;
		};
		/** Success */
		Success: {
			/** Success */
			success: boolean;
		};
		/** ObservationOut */
		ObservationOut: {
			/** Id */
			id?: number;
			/**
			 * Created At
			 * Format: date-time
			 */
			created_at: string;
			/** Correct Sample */
			correct_sample: string;
			/** Token */
			token: string;
		};
		/** ObservationIn */
		ObservationIn: {
			/** Correct Sample */
			correct_sample: string;
		};
		/** ObservationResponseOut */
		ObservationResponseOut: {
			/** Id */
			id?: number;
			/** Chosen Sample */
			chosen_sample: string;
			/**
			 * Response Date
			 * Format: date-time
			 */
			response_date: string;
			/** Experiment */
			experiment: number;
			/** Observation */
			observation: number;
			/** Is Correct */
			is_correct: boolean;
			/** Experience Level */
			experience_level: string;
		};
		/** ObservationResponseIn */
		ObservationResponseIn: {
			/** Chosen Sample */
			chosen_sample: string;
			/**
			 * Response Date
			 * Format: date-time
			 */
			response_date: string;
			/** Experiment */
			experiment_id: number;
			/** Observation */
			observation_id: number;
			/** Experience Level */
			experience_level: string;
			/** Token */
			token: string;
		};
	};
	responses: never;
	parameters: never;
	requestBodies: never;
	headers: never;
	pathItems: never;
}

export type $defs = Record<string, never>;

export type external = Record<string, never>;

export interface operations {
	/**
	 * Get All Experiments
	 * @description Gets all experiments defined in this application.
	 */
	experiments_api_get_all_experiments: {
		responses: {
			/** @description OK */
			200: {
				content: {
					'application/json': components['schemas']['ExperimentOut'][];
				};
			};
		};
	};
	/**
	 * Create Experiment
	 * @description Creates a new experiment with the supplied payload, returns the experiment id.
	 */
	experiments_api_create_experiment: {
		requestBody: {
			content: {
				'application/json': components['schemas']['ExperimentIn'];
			};
		};
		responses: {
			/** @description OK */
			200: {
				content: {
					'application/json': components['schemas']['JustId'];
				};
			};
		};
	};
	/**
	 * Get Experiment By Id
	 * @description Get a specific experiemnt by its experiment ID.
	 */
	experiments_api_get_experiment_by_id: {
		parameters: {
			path: {
				experiment_id: number;
			};
		};
		responses: {
			/** @description OK */
			200: {
				content: {
					'application/json': components['schemas']['ExperimentOut'];
				};
			};
		};
	};
	/**
	 * Update Experiment
	 * @description Updates the experiment with `experiment id`, using supplied payload
	 */
	experiments_api_update_experiment: {
		parameters: {
			path: {
				experiment_id: number;
			};
		};
		requestBody: {
			content: {
				'application/json': components['schemas']['ExperimentIn'];
			};
		};
		responses: {
			/** @description OK */
			200: {
				content: {
					'application/json': components['schemas']['Success'];
				};
			};
		};
	};
	/**
	 * Delete Experiment
	 * @description Deletes the experiment with a matching id.
	 */
	experiments_api_delete_experiment: {
		parameters: {
			path: {
				experiment_id: number;
			};
		};
		responses: {
			/** @description OK */
			200: {
				content: {
					'application/json': components['schemas']['Success'];
				};
			};
		};
	};
	/**
	 * Get All Observations
	 * @description Gets all observations defined for provided experiment id.
	 */
	experiments_api_get_all_observations: {
		parameters: {
			path: {
				experiment_id: number;
			};
		};
		responses: {
			/** @description OK */
			200: {
				content: {
					'application/json': components['schemas']['ObservationOut'][];
				};
			};
		};
	};
	/**
	 * Create Observation
	 * @description Creates a new observation with the supplied payload, returns the observation id.
	 */
	experiments_api_create_observation: {
		parameters: {
			path: {
				experiment_id: number;
			};
		};
		requestBody: {
			content: {
				'application/json': components['schemas']['ObservationIn'];
			};
		};
		responses: {
			/** @description OK */
			200: {
				content: {
					'application/json': components['schemas']['ObservationOut'];
				};
			};
		};
	};
	/**
	 * Get Observation By Id
	 * @description Get a specific observation by its experiment id and observation id.
	 */
	experiments_api_get_observation_by_id: {
		parameters: {
			path: {
				experiment_id: number;
				observation_id: number;
			};
		};
		responses: {
			/** @description OK */
			200: {
				content: {
					'application/json': components['schemas']['ObservationOut'];
				};
			};
		};
	};
	/**
	 * Update Observation
	 * @description Updates the observation on experiment, using supplied payload
	 */
	experiments_api_update_observation: {
		parameters: {
			path: {
				experiment_id: number;
				observation_id: number;
			};
		};
		requestBody: {
			content: {
				'application/json': components['schemas']['ObservationIn'];
			};
		};
		responses: {
			/** @description OK */
			200: {
				content: {
					'application/json': components['schemas']['Success'];
				};
			};
		};
	};
	/**
	 * Delete Observation
	 * @description Deletes the observation on provided experiment with a matching id.
	 */
	experiments_api_delete_observation: {
		parameters: {
			path: {
				experiment_id: number;
				observation_id: number;
			};
		};
		responses: {
			/** @description OK */
			200: {
				content: {
					'application/json': components['schemas']['Success'];
				};
			};
		};
	};
	/**
	 * Get All Observation Responses
	 * @description Gets all observations defined for provided experiment id.
	 */
	experiments_api_get_all_observation_responses: {
		parameters: {
			path: {
				experiment_id: number;
			};
		};
		responses: {
			/** @description OK */
			200: {
				content: {
					'application/json': components['schemas']['ObservationResponseOut'][];
				};
			};
		};
	};
	/**
	 * Create Observation Response
	 * @description Creates a new observation with the supplied payload, returns the observation id.
	 */
	experiments_api_create_observation_response: {
		parameters: {
			path: {
				experiment_id: number;
			};
		};
		requestBody: {
			content: {
				'application/json': components['schemas']['ObservationResponseIn'];
			};
		};
		responses: {
			/** @description OK */
			200: {
				content: {
					'application/json': components['schemas']['JustId'];
				};
			};
		};
	};
	/**
	 * Get Observation Response By Id
	 * @description Get a specific observation by its experiment id and observation id.
	 */
	experiments_api_get_observation_response_by_id: {
		parameters: {
			path: {
				experiment_id: number;
				observation_id: number;
			};
		};
		responses: {
			/** @description OK */
			200: {
				content: {
					'application/json': components['schemas']['ObservationResponseOut'];
				};
			};
		};
	};
	/**
	 * Update Observation Response
	 * @description Updates the observation on experiment, using supplied payload
	 */
	experiments_api_update_observation_response: {
		parameters: {
			path: {
				experiment_id: number;
				observation_id: number;
			};
		};
		requestBody: {
			content: {
				'application/json': components['schemas']['ObservationResponseIn'];
			};
		};
		responses: {
			/** @description OK */
			200: {
				content: {
					'application/json': components['schemas']['Success'];
				};
			};
		};
	};
	/**
	 * Delete Observation Response
	 * @description Deletes the observation on provided experiment with a matching id.
	 */
	experiments_api_delete_observation_response: {
		parameters: {
			path: {
				experiment_id: number;
				observation_id: number;
			};
		};
		responses: {
			/** @description OK */
			200: {
				content: {
					'application/json': components['schemas']['Success'];
				};
			};
		};
	};
}
