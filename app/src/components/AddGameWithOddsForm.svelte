<script lang="ts">
	import { createClient } from '@supabase/supabase-js';

	const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
	const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
	const supabase = createClient(supabaseUrl, supabaseKey);

	interface PreGameInput {
		id: number;
		season: string;
		week: string;
		date: string;
		home_team_id: number | undefined;
		away_team_id: number | undefined;
		home_score: number;
		away_score: number;
		home_opening_spread: number;
		home_closing_spread: number;
		away_opening_spread: number;
		away_closing_spread: number;
		away_opening_ml: number;
		opening_o_u_total: number;
	}

	let pregameInput: Partial<PreGameInput> = {};

	const teamMap = new Map([
		['Buffalo Bills', 1],
		['Miami Dolphins', 2],
		['New England Patriots', 3],
		['New York Jets', 4],
		['Cincinnati Bengals', 5],
		['Baltimore Ravens', 6],
		['Pittsburgh Steelers', 7],
		['Cleveland Browns', 8],
		['Jacksonville Jaguars', 9],
		['Tennessee Titans', 10],
		['Indianapolis Colts', 11],
		['Houston Texans', 12],
		['Kansas City Chiefs', 13],
		['Los Angeles Chargers', 14],
		['Las Vegas Raiders', 15],
		['Denver Broncos', 16],
		['Philadelphia Eagles', 17],
		['Dallas Cowboys', 18],
		['New York Giants', 19],
		['Washington Commanders', 20],
		['Minnesota Vikings', 21],
		['Detroit Lions', 22],
		['Green Bay Packers', 23],
		['Chicago Bears', 24],
		['Tampa Bay Buccaneers', 25],
		['Carolina Panthers', 26],
		['New Orleans Saints', 27],
		['Atlanta Falcons', 28],
		['San Francisco 49ers', 29],
		['Seattle Seahawks', 30],
		['Los Angeles Rams', 31],
		['Arizona Cardinals', 32]
	]);

	const submitForm = async () => {
		try {
			const { data, error } = await supabase.from<PreGameInput>('pregames').insert([pregameInput]);

			if (error) throw error;

			alert('Form submitted successfully');
		} catch (error) {
			alert(error.message);
		}
	};
</script>

<form class="max-w-md mx-auto" on:submit|preventDefault={submitForm}>
	<div class="mb-4">
		<label class="block mb-2" for="homeTeam"> Home Team: </label>
		<select
			id="homeTeam"
			class="w-full p-2 border rounded-md text-black"
			bind:value={pregameInput.home_team_id}
			required
		>
			<option value="">Select Home Team</option>
			{#each Array.from(teamMap.entries()) as [teamName, teamId]}
				<option value={teamId}>{teamName}</option>
			{/each}
		</select>
	</div>
	<div class="mb-4">
		<label class="block mb-2" for="awayTeam"> Away Team: </label>
		<select
			id="awayTeam"
			class="w-full p-2 border rounded-md text-black"
			bind:value={pregameInput.away_team_id}
			required
		>
			<option value="">Select Away Team</option>
			{#each Array.from(teamMap.entries()) as [teamName, teamId]}
				<option value={teamId}>{teamName}</option>
			{/each}
		</select>
	</div>
	<div class="mb-4">
		<label class="block mb-2" for="awayOpeningSpread"> Away Opening Spread: </label>
		<input
			id="awayOpeningSpread"
			class="w-full p-2 border rounded-md text-black"
			type="number"
			step="0.5"
			bind:value={pregameInput.away_opening_spread}
			required
		/>
	</div>
	<div class="mb-4">
		<label class="block mb-2" for="week"> Week: </label>
		<input
			id="week"
			class="w-full p-2 border rounded-md text-black"
			type="text"
			bind:value={pregameInput.week}
			required
		/>
	</div>
	<div class="mb-4">
		<label class="block mb-2" for="date"> Date: </label>
		<input
			id="date"
			class="w-full p-2 border rounded-md text-black"
			type="date"
			bind:value={pregameInput.date}
			required
		/>
	</div>
	<div class="mb-4">
		<label class="block mb-2" for="openingOUTotal"> Opening O/U Total: </label>
		<input
			id="openingOUTotal"
			class="w-full p-2 border rounded-md text-black"
			type="number"
			step="0.01"
			bind:value={pregameInput.opening_o_u_total}
			required
		/>
	</div>
	<div class="mb-4">
		<label class="block mb-2" for="awayOpeningML"> Away Opening ML: </label>
		<input
			id="awayOpeningML"
			class="w-full p-2 border rounded-md text-black"
			type="number"
			step="0.01"
			bind:value={pregameInput.away_opening_ml}
			required
		/>
	</div>

	<button class="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600" type="submit">
		Submit
	</button>
</form>
