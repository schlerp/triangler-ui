export interface User {
	username: string;
	access: string;
	refresh: string;
}

export type ToastType = 'info' | 'success' | 'warning' | 'error';

export interface NewToast {
	content: string;
	type?: ToastType;
	timeout?: number;
}

export interface Toast extends NewToast {
	id: number;
	timeout: number;
	type: ToastType;
}
