<script lang="ts">
	export let game: { id: number; week: string; season: string } | undefined;
	export let onDelete: (id: number) => void; // Event handler for delete action
	import { deletePreGameRow } from '/workspace/Gridiron-Guru/app/src/lib/providers/deleteGameProvider.ts';

	function handleDelete(id: number) {
		deletePreGameRow(id)
			.then(() => {
				console.log('PreGame row deleted successfully');
			})
			.catch((error) => {
				console.error('Error deleting PreGame row:', error);
			});
	}
</script>

{#if game}
	<div class="game-card">
		<h2>{game.week}</h2>
		<p>{game.season}</p>
		<input type="checkbox" on:click={() => handleDelete(game.id)} />
		<button on:click={() => handleDelete(game.id)}>Delete</button>
	</div>
{/if}

<style>
	.game-card {
		border: 1px solid #ccc;
		padding: 1em;
		margin-bottom: 1em;
		border-radius: 5px;
	}

	.game-card h2 {
		margin-top: 0;
	}
</style>
