<script>
	import { onMount } from 'svelte';

	let parlayType = 'default';
	let numOfGames = 2;

	// Placeholder function for handling form submission
	function handleSubmit() {
		// Perform the necessary logic for handling the form submission
		// You can use the selected parlay type and number of games in your backend API calls or processing
		// You can also emit an event to the parent component to handle the form submission
		console.log('Selected parlay type:', parlayType);
		console.log('Number of games:', numOfGames);
	}

	// Placeholder function for handling parlay type selection
	function handleParlayTypeSelection(event) {
		parlayType = event.target.value;
		// Perform any necessary logic for parlay type selection
	}

	// Placeholder function for handling number of games selection
	function handleNumOfGamesSelection(event) {
		numOfGames = parseInt(event.target.value);
		// Perform any necessary logic for handling the number of games selection
	}

	onMount(() => {
		// Perform any initialization or setup logic when the component mounts
	});
</script>

<form on:submit|preventDefault={handleSubmit} class="max-w-md mx-auto">
	<div class="mb-4">
		<label for="parlayTypeInput" class="block mb-1">Select Parlay Type:</label>
		<select
			id="parlayTypeInput"
			bind:value={parlayType}
			class="border border-gray-300 rounded px-3 py-2 w-full text-black"
		>
			<option value="moneyline">Moneyline</option>
			<option value="game">Game</option>
			<option value="total">Total</option>
			<option value="default">Default</option>
		</select>
	</div>

	<div class="mb-4">
		<label for="numOfGamesInput" class="block mb-1">Amount of Games (2-5):</label>
		<select
			id="numOfGamesInput"
			bind:value={numOfGames}
			class="border border-gray-300 rounded px-3 py-2 w-full text-black"
		>
			{#each Array.from({ length: 4 }, (_, i) => i + 2) as num}
				<option value={num}>{num}</option>
			{/each}
		</select>
	</div>

	<button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
		Predict
	</button>
</form>
