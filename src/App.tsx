import { useState } from 'react';
import Swal from 'sweetalert2';
import Form from './components/Form';
import PokemonHero from './components/PokemonHero';
import getPokemonByNameOrId from './Api';
import { Pokemon } from './@types/pokemonRequestApi';
import PokemonSaveList from './components/PokemonSaveList';

function App() {
  const [inputSearch, setInputSearch] = useState<string>('');
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputSearch(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!inputSearch) {
      return Swal.fire({
        icon: 'error',
        title: 'Digite um nome ou id válido',
        text: 'Por favor insira os dados corretamente',
      });
    }
    const formattedInput = inputSearch.toLowerCase().trim();
    try {
      const data = await getPokemonByNameOrId(formattedInput);
      setPokemon(data);
    } catch (error) {
      if (error instanceof Error) {
        Swal.fire({
          icon: 'error',
          title: error.message,
          text: 'Tente novamente!',
        });
        return;
      }
    } finally {
      setInputSearch('');
    }
  };

  const handleSavePokemon = () => {
    const pokemonExists = pokemonList.find((poke) => poke.id === pokemon?.id);
    if (pokemonExists) {
      return Swal.fire({
        icon: 'error',
        title: 'Pokémon já salvo',
        text: 'Tente salvar outro pokémon!',
      });
    }
    if (pokemon) { setPokemonList([...pokemonList, pokemon]); }
  };

  const handleRemovePokemon = (id: number) => {
    const newPokemonList = pokemonList.filter((poke) => poke.id !== id);
    setPokemonList(newPokemonList);
  };

  return (
    <>
      <Form
        handleChange={ handleChange }
        handleSubmit={ handleSubmit }
        inputSearch={ inputSearch }
      />
      {pokemon && (
        <PokemonHero { ...pokemon } handleSavePokemon={ handleSavePokemon } />
      )}

      {
        pokemonList.length > 0 && (
          <PokemonSaveList
            pokemons={ pokemonList }
            handleRemovePokemon={ handleRemovePokemon }
          />
        )
      }
    </>
  );
}

export default App;
