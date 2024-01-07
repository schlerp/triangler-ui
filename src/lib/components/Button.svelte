<button type="submit">
	<slot />
</button>

<style>
	button {
		color: black;
		background-color: #ffc700;
		padding: 0.5rem;
		text-align: center;
		border: 2px solid black;
		border-radius: 4px;
		box-shadow: 4px 4px 0 black;
		position: relative;
		transition: ease 0.1s;
	}
	button:hover {
		background-color: #fe90e7;
		box-shadow: 5px 5px 0 black;
		transform: translateX(-1px) translateY(-1px);
	}
	button:active {
		box-shadow: 3px 3px 0 black;
		transform: translateX(1px) translateY(1px);
	}
</style>
