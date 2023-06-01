<script>
	import { createClient } from '@supabase/supabase-js';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

	// Initialize the Supabase client
	const supabase = createClient(
		import.meta.env.VITE_SUPABASE_URL,
		import.meta.env.VITE_SUPABASE_KEY
	);

	// Create a writable store to hold the Supabase client instance
	const supabaseStore = writable(supabase);

	// Set the Supabase client instance as the context value
	setContext('supabase', supabaseStore);
</script>

<!-- Render the component's children -->
<slot />
