import { writable } from 'svelte/store';
import type { PostgrestResponse } from '@supabase/supabase-js';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey);

export interface Game {
  id: number;
  // Add other properties for the game here
}

const games = writable<Game[]>([]);

// Function to fetch games from the database and update the store
async function fetchGames() {
  const { data, error }: PostgrestResponse<Game> = await supabase.from<Game>('Games').select('*');
  if (error) {
    console.error('Error fetching games:', error);
    return;
  }

  games.set(data || []);
}

// Export the games store and fetchGames function
export { games, fetchGames };
