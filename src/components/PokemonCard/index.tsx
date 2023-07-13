import { MdOutlineRemoveCircle } from 'react-icons/md';
import { useState } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { Pokemon } from '../../@types/pokemonRequestApi';

export type PokemonCardProps = {
  handleRemovePokemon: (id: number) => void;
} & Pokemon;

function PokemonCard({
  id, name, sprites: { other: { home } }, types, handleRemovePokemon }:
PokemonCardProps) {
  const [isShiny, setIsShiny] = useState<boolean>(false);

  const handleShiny = () => {
    setIsShiny(!isShiny);
  };

  return (
    <div className="card">
      <div className="button-card">
        <button onClick={ handleShiny }>
          { isShiny ? <AiFillStar /> : <AiOutlineStar />}
        </button>
        <button onClick={ () => handleRemovePokemon(id) }>
          <MdOutlineRemoveCircle />
        </button>
      </div>
      <h1 className="pokemon-name">{ name }</h1>
      <img
        src={
            isShiny ? home.front_shiny : home.front_default
            }
        alt={ name }
        className="pokemon-image"
      />
      <p>Tipos:</p>
      <ul className="pokemon-type-list">
        {
          types.map(({ type }, indice) => (
            <li className={ `li-${type.name}` } key={ type.name }>
              { type.name }
              { types.length - 1 === indice ? '.' : ';' }
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default PokemonCard;
