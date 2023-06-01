import { writable } from 'svelte/store';
import type { PostgrestResponse } from '@supabase/supabase-js';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import type { Game } from '../../app';

// Initialize Supabase client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey);


const games = writable<Game[]>([]);


// Function to fetch games from the database and update the store
async function fetchGames() {
  const { data, error }: PostgrestResponse<Game> = await supabase.from<Game>('pregames').select('*');
  if (error) {
    console.error('Error fetching games:', error);
    return;
  }

  if (data) {
    games.set(data);
  }
}

// Fetch games when the store is created
fetchGames();

// Export the games store
export { games };
