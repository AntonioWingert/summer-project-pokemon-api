export type Pokemon = {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: {
    other: {
      home: {
        front_default: string;
        front_shiny: string;
      }
    }
  },
  types: PokemonType[];
};

export type PokemonType = {
  type: {
    name: string;
  }
};
