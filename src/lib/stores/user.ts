import { writable } from 'svelte/store';
import { get } from 'svelte/store';
import { browser } from '$app/environment';
import type { User } from '$lib/types';
import { addToast } from './toasts';

function userStore(user: User | null) {
	const storageKey = 'triangler$currentUser';
	const store = writable(user);
	const { subscribe, set } = store;

	browser && localStorage[storageKey] && set(JSON.parse(localStorage[storageKey]));

	return {
		subscribe,
		set: (user: User | null) => {
			browser && (localStorage[storageKey] = JSON.stringify(user));
			set(user);
		},
		update: (callback: (user: User | null) => null) => {
			const updatedStore = callback(get(store));

			browser && (localStorage[storageKey] = JSON.stringify(updatedStore));
			set(updatedStore);
		}
	};
}

export const currentUser = userStore(null);

export const logoutCurrentUser = () => {
	currentUser.set(null);
	addToast({ content: 'Logged out successfully.' });
};
