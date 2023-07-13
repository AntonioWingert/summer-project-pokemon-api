import { useState } from 'react';
import { AiOutlineStar, AiFillStar, AiFillSave } from 'react-icons/ai';
import { Pokemon } from '../../@types/pokemonRequestApi';

export type PokemonHeroProps = {
  handleSavePokemon: () => void;
} & Pokemon;

function PokemonHero({
  name, height, weight, sprites: { other: { home } }, types, handleSavePokemon }
: PokemonHeroProps) {
  const [isShiny, setIsShiny] = useState<boolean>(false);

  const handleShiny = () => {
    setIsShiny(!isShiny);
  };

  return (
    <div className="pokemon-card">
      <div className="button-card">
        <button onClick={ handleShiny }>
          { isShiny ? <AiFillStar /> : <AiOutlineStar />}
        </button>
        <button onClick={ handleSavePokemon }>
          <AiFillSave />
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
      <div className="pokemon-infos">
        <h2>
          {`Altura: ${height / 10}m`}
        </h2>
        <h2>{`Peso: ${weight / 10}kg` }</h2>
      </div>
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

export default PokemonHero;
