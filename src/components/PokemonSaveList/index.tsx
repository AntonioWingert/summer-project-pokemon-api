import { Pokemon } from '../../@types/pokemonRequestApi';
import PokemonCard from '../PokemonCard';

export type PokemonSaveListProps = {
  pokemons: Pokemon[],
  handleRemovePokemon: (id: number) => void;
};

function PokemonSaveList({ pokemons, handleRemovePokemon }: PokemonSaveListProps) {
  return (
    <div className="cards">
      {
        pokemons.map((pokemon) => (
          <PokemonCard
            key={ pokemon.id }
            { ...pokemon }
            handleRemovePokemon={ handleRemovePokemon }
          />
        ))
      }
    </div>
  );
}

export default PokemonSaveList;
