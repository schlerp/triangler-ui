import { writable } from 'svelte/store';
import type { Toast, NewToast, ToastType } from '$lib/types';

export const toasts = writable<Toast[]>([]);

export const addToast = (toast: NewToast) => {
	const id = Math.floor(Math.random() * 10000);

	const defaults: Toast = {
		id,
		content: '',
		timeout: 5000,
		type: 'success' as ToastType
	};

	toasts.update((all) => [{ ...defaults, ...toast }, ...all]);
};

export const dismissToast = (id: number) => {
	toasts.update((all) => all.filter((t) => t.id !== id));
};
