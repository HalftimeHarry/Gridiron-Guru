import { get } from 'svelte/store';
import { games } from '../providers/gameProvider';

// Example controller function to perform some operations with the games store
function getGameById(id: number) {
  // Use get(games) to access the value of the store synchronously
  const gameList = get(games);
  // Find and return the game with the matching id
  return gameList.find(game => game.id === id);
}

// Export any other controller functions as needed
export { getGameById };
