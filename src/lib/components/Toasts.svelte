<script lang="ts">
	import { toasts, dismissToast } from '$lib/stores/toasts';
	import Toast from '$lib/components/Toast.svelte';
</script>

{#if $toasts}
	<section class="toastContainer">
		{#each $toasts as toast (toast.id)}
			<Toast on:dismiss={() => dismissToast(toast.id)} timeout={toast.timeout}>
				{toast.content}
			</Toast>
		{/each}
	</section>
{/if}

<style>
	section {
		position: fixed;
		bottom: 0;
		right: 0;
		display: flex;
		margin: 1rem;
		justify-content: center;
		flex-direction: column;
		z-index: 1000;
	}
</style>
