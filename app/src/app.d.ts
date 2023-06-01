// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Locals {}
	// interface PageData {}
	// interface Error {}
	// interface Platform {}
}

export interface PreGame {
  id: number;
  season?: string;
  week?: string;
  date?: Date;
  homeTeam?: number;
  homeScore?: number;
  homeOpeningSpread?: number;
  homeClosingSpread?: number;
  homeOpeningML?: number;
  homeOpeningMLDecimal?: number;
  homeClosingML?: number;
  homeClosingMLDecimal?: number;
  awayTeam?: number;
  awayScore?: number;
  awayOpeningSpread?: number;
  awayClosingSpread?: number;
  awayOpeningML?: number;
  awayOpeningMLDecimal?: number;
  awayClosingML?: number;
  awayClosingMLDecimal?: number;
  openingOUTotal?: number;
  closingOUTotal?: number;
  pregame?: boolean;
}

export interface PredictionInput {
  selectedTeam: 'home' | 'away';
  pastGameAmount: number;
}

export interface SpreadPrediction {
  homeTeam: string;
  awayTeam: string;
  predictedWinner: 'home' | 'away';
  spread: number;
}

export interface TotalPrediction {
  homeTeam: string;
  awayTeam: string;
  predictedWinner: 'over' | 'under';
  total: number;
}

export interface MoneyLinePrediction {
  homeTeam: string;
  awayTeam: string;
  predictedWinner: 'home' | 'away';
  moneyLine: number;
}

export interface Prediction {
  spreadPrediction: SpreadPrediction;
  totalPrediction: TotalPrediction;
  moneyLinePrediction: MoneyLinePrediction;
}