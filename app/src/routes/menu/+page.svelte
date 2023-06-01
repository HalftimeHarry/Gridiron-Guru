<script>
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';
	import { games } from '/workspace/Gridiron-Guru/app/src/lib/providers/gameProvider';
	import GameCard from '/workspace/Gridiron-Guru/app/src/components/GameCard.svelte';

	let gameList;

	onMount(async () => {
		gameList = get(games);
		console.log(gameList);
	});
</script>

{#if gameList && gameList.length > 0}
	{#each gameList as game (game.id)}
		<GameCard {game} />
	{/each}
{/if}
