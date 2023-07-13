import { Pokemon } from '../@types/pokemonRequestApi';

async function getPokemonByNameOrId(idOrName: string) : Promise<Pokemon> {
  const url = `https://pokeapi.co/api/v2/pokemon/${idOrName}`;
  try {
    const data = await fetch(url);
    const pokemon = await data.json();
    return pokemon;
  } catch (error) {
    throw new Error('Pokémon não encontrado');
  }
}

export default getPokemonByNameOrId;
