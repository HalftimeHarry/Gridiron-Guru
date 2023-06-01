import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// Define the table name
const tableName = 'pregames';

// Function to delete a PreGame row from the table
export async function deletePreGameRow(rowId: number): Promise<void> {
  try {
    const { data, error } = await supabase.from(tableName).delete().eq('id', rowId);
    if (error) {
      console.error('Error deleting PreGame row:', error);
      return;
    }
    console.log('PreGame row deleted successfully:', data);
  } catch (error) {
    console.error('Error deleting PreGame row:', error);
  }
}
