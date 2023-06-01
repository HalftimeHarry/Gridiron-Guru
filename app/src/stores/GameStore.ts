import { writable, get } from "svelte/store";

// deleteSnippet
export function deleteGame(index: number) { // if you have a db, delete by ID?
        const { data, error } = await supabase
    .from('pregames')
    .insert([
        { some_column: 'someValue', other_column: 'otherValue' },
    ])
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
