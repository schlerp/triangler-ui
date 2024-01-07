export interface User {
	username: string;
	access: string;
	refresh: string;
}

export interface NewToast {
	content: string;
	timeout?: number;
}

export interface Toast extends NewToast {
	id: number;
	timeout: number;
}
