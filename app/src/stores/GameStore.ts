import { writable, get } from "svelte/store";
import type { PreGameInput } from "/workspace/Gridiron-Guru/app/src/app.d";

// gameStore
// Code game
// Title, Code, Language, Favorite
export const gameStore = writable<PreGameInput[]>([]); // [codesnippet1,codesnippet2,etc.]

// addSnippet
export function addGame(input: PreGameInput) {
    const games = get(gameStore); // $gameStore -> listen to changes to the value of gameStore
    gameStore.update(() => { // Game[]
        return [ { ...input, favorite: false } , ...games]
    });
}

// deleteSnippet
export function deleteGame(index: number) { // if you have a db, delete by ID?
    const games = get(gameStore);
    games.splice(index, 1); // removes one item from index "index"
    gameStore.update(() => { // Game[]
        return games;
    });
}

// toggleFavorite
export function toggleFavorite(index: number) {
    const games = get(gameStore);
    
    gameStore.update(() => { // [ { favorite: true }, { favorite: false } ]  1
        return games.map((game, snippetIndex) => {
            if(snippetIndex === index) {
                return { ...game, favorite: !game.favorite }
            }
            return game;
        });
    });
}
