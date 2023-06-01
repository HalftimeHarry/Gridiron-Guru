import { writable } from 'svelte/store';

export const games = writable([]);

export function updateGames(updatedGames) {
  games.set(updatedGames);
}