import { writable } from 'svelte/store';
import type { Toast, NewToast } from '$lib/types';

export const toasts = writable<Toast[]>([]);

export const addToast = (toast: NewToast) => {
	const id = Math.floor(Math.random() * 10000);

	const defaults = {
		id,
		timeout: 50000
	};

	toasts.update((all) => [{ ...defaults, ...toast }, ...all]);
};

export const dismissToast = (id: number) => {
	toasts.update((all) => all.filter((t) => t.id !== id));
};
