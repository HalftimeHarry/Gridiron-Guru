<script lang="ts">
	export let game: { id: number; week: string; season: string } | undefined;
</script>

{#if game}
	<div class="game-card">
		<h2>{game.week}</h2>
		<p>{game.season}</p>
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
