<script>
	import { onMount } from 'svelte';

	let teamInput = '';
	let numOfGames = 1;

	// Placeholder function for handling form submission
	function handleSubmit() {
		// Perform the necessary logic for handling the form submission
		// You can use the selected team and number of games in your backend API calls or processing
		// You can also emit an event to the parent component to handle the form submission
		console.log('Selected team:', teamInput);
		console.log('Number of games:', numOfGames);
	}

	// Placeholder function for handling team selection
	function handleTeamSelection(event) {
		teamInput = event.target.value;
		// Perform any necessary logic for team selection
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
		<label for="teamInput" class="block mb-1">Select Team:</label>
		<input
			type="text"
			id="teamInput"
			placeholder="Enter team name"
			value={teamInput}
			on:input={handleTeamSelection}
			autocomplete="off"
			class="border border-gray-300 rounded px-3 py-2 w-full text-black"
		/>
	</div>

	<div class="mb-4">
		<label for="numOfGamesInput" class="block mb-1">Number of Games to Refer to:</label>
		<select
			id="numOfGamesInput"
			bind:value={numOfGames}
			class="border border-gray-300 rounded px-3 py-2 w-full text-black"
		>
			{#each Array.from({ length: 16 }, (_, i) => i + 1) as num}
				<option value={num}>{num}</option>
			{/each}
		</select>
	</div>

	<button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
		Predict
	</button>
</form>
