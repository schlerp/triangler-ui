<script lang="ts">
	export let name: string;
	export let type = 'text';
	export let label: string = name;
	export let disabled = false;
	export let value: string | number | boolean;
	export let pattern: string | undefined = undefined;

	const groupId = `group_${name}`;
	const labelId = `label_${name}`;
	const controlId = `control_${name}`;
</script>

<div id={groupId}>
	<label id={labelId} for={controlId}>{label}</label>
	{#if type === 'text' && typeof value === 'string'}
		<div class="control">
			<input id={controlId} {name} type="text" bind:value {disabled} {pattern} />
		</div>
	{:else if type === 'password' && typeof value === 'string'}
		<div class="control">
			<input id={controlId} {name} type="password" bind:value {disabled} {pattern} />
		</div>
	{:else if type === 'email' && typeof value === 'string'}
		<div class="control">
			<input id={controlId} {name} type="email" bind:value {disabled} {pattern} />
		</div>
	{:else if type === 'number' && typeof value === 'number'}
		<div class="control">
			<input id={controlId} {name} type="number" bind:value {disabled} {pattern} />
		</div>
	{:else if type === 'checkbox' && typeof value === 'boolean'}
		<div class="control">
			<input id={controlId} {name} type="checkbox" bind:checked={value} {disabled} {pattern} />
		</div>
	{/if}
</div>

<style>
	div.control {
		border: 2px solid black;
		background-color: white;
	}
	input {
		width: calc(100% - calc(2 * 0.5rem));
		margin: 0.5rem;
		border: none;
		outline: none;
	}
	label {
		color: black;
		padding-left: calc(0.5rem / 2);
		padding-right: calc(0.5rem / 2);
	}
	input:invalid {
		color: red;
		border-bottom: 1px solid red;
	}
</style>
