<script lang="ts">
	import { toasts, dismissToast } from '$lib/stores/toasts';
	import Toast from '$lib/components/Toast.svelte';
	import { flip } from 'svelte/animate';
	import { fade } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';

	function handleDismiss(id: number) {
		dismissToast(id);
	}
</script>

<section class="toastContainer">
	{#each $toasts as toast (toast.id)}
		<div
            animate:flip={{ delay: 200, duration: 200, easing: cubicInOut }}
            transition:fade={{ duration: 200 }}
			class="toastWrapper"
			id={`wrapper-${toast.id}`}
		>
			<Toast on:dismiss={() => handleDismiss(toast.id)} type={toast.type} timeout={toast.timeout}>
				{toast.content}
			</Toast>
		</div>
	{/each}
</section>

<style>
	section {
        position: absolute;
		height: 100%;
		overflow-y: hidden;
		bottom: 0;
		right: 0;
		display: flex;
		margin: 1rem;
		justify-content: end;
		flex-direction: column;
        z-index: 1000;
	}
</style>
