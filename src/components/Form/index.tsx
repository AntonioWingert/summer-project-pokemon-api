import { FormTypes } from '../../@types/Form';

function Form({ handleChange, handleSubmit, inputSearch }: FormTypes) {
  return (
    <form onSubmit={ handleSubmit } className="form">
      <input
        type="text"
        placeholder="Pesquise seu pokémon favorito!"
        onChange={ (e) => handleChange(e) }
        value={ inputSearch }
        className="input-search"
      />
      <button type="submit" className="button-input">
        Pesquisar
      </button>
    </form>
  );
}

export default Form;
