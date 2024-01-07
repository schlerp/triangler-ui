import { writable } from 'svelte/store';
import type { Toast, NewToast } from '$lib/types';

export const toasts = writable<Toast[]>([]);

export const addToast = (toast: NewToast) => {
	console.debug('Adding toast:', toast);
	// Create a unique ID so we can easily find/remove it
	// if it is dismissible/has a timeout.
	const id = Math.floor(Math.random() * 10000);

	// Setup some sensible defaults for a toast.
	const defaults = {
		id,
		timeout: 5000
	};

	// Push the toast to the top of the list of toasts
	toasts.update((all) => [{ ...defaults, ...toast }, ...all]);
};

export const dismissToast = (id: number) => {
	toasts.update((all) => all.filter((t) => t.id !== id));
};
