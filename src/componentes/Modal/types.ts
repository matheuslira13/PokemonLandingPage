export type PokemonStats = {
  base_stat: number;
  stats: {
    stat: {
      name: string;
    };
  };
};

export type ModalPokemonProps = {
  name: string;
  openModal: boolean;
  onClose: (arg: boolean) => void;
  pokemonImg: string;
  pokemonImgShiny: string;
  abilitys: Array<string>;
  stats: Array<PokemonStats>;
  moves: Array<{
    move: {
      name: string;
      version_group_details: Array<{ version_group: string }>;
    };
  }>;
};

export type ModalNewsLetterProps = {
  name: string;
  email: string;
  openModal: boolean;
  onClose: (arg: boolean) => void;
};

export type GetPokemonDetailsStatsProps = {
  base_stat: number;
  stat: {
    name: string;
  };
};
