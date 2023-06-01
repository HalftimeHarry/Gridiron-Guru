<script>
	import { onMount } from 'svelte';
	import { games, updateGames } from '/workspace/Gridiron-Guru/app/src/stores/ManageGameStore';

	let gameList = [];

	onMount(async () => {
		gameList = $games;
	});

	async function handleDeleteGame(index) {
		await deleteGame(index);
		gameList = $games;
	}
</script>

<h1>Manage Games</h1>

<table>
	<thead>
		<tr>
			<th>Date</th>
			<th>Home Team</th>
			<th>Away Team</th>
			<th>Spread</th>
			<th>Total</th>
			<th>Money Line</th>
			<th>Actions</th>
		</tr>
	</thead>
	<tbody>
		{#each gameList as game, index}
			<tr>
				<td>{game.date}</td>
				<td>{game.homeTeam}</td>
				<td>{game.awayTeam}</td>
				<td>{game.spread}</td>
				<td>{game.total}</td>
				<td>{game.moneyLine}</td>
				<td>
					<button type="button" on:click={() => handleDeleteGame(index)}>Delete</button>
				</td>
			</tr>
		{/each}
	</tbody>
</table>
