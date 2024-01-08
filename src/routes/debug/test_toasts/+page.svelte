<script lang="ts">
	import { addToast } from '$lib/stores/toasts';
	import type { ToastType } from '$lib/types';

	let toastContent = 'This is a test toast!';
	let toastType: ToastType = 'success';
	let toastTimeout = 5000;

	function handleAddToast() {
		addToast({
			content: toastContent,
			type: toastType,
			timeout: toastTimeout
		});
	}
</script>

<div class="container">
	<h1>Test Toasts</h1>
	<p>Click the button below to add a test toast.</p>
	<input type="text" bind:value={toastContent} />
	<select bind:value={toastType}>
		<option value="info">Info</option>
		<option value="success">Success</option>
		<option value="warning">Warning</option>
		<option value="error">Error</option>
	</select>
	<input type="number" bind:value={toastTimeout} />
	<button on:click={handleAddToast}>Add Toast</button>
</div>
