import { fetchGames } from '/workspace/Gridiron-Guru/app/src/providers/gameProvider';

// Example controller function to perform some operations with the games store
function getGameById(id: number) {
  const games = $games;
  return games.find(game => game.id === id);
}

// Export any other controller functions as needed
export { getGameById };
