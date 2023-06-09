import { Pokemon } from "./pokemon";

interface PokemonShortData {
  name: string;
  url: string;
}

export interface IResPokeApi {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonShortData[];
}

export interface IDataPokeApi {
  count: number;
  next: string | null;
  previous: string | null;
  pokemons: Pokemon[];
}

