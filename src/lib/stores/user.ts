import { writable } from 'svelte/store';
import type { User } from '$lib/types';
import type { Writable } from 'svelte/store';

export const currentUser: Writable<User | undefined> = writable(undefined);
