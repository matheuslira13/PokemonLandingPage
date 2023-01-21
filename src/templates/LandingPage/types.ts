import { Dispatch, SetStateAction } from "react";
export type LandingPageProps = {
  setFindInList: React.Dispatch<React.SetStateAction<string>>;
  pokeData: Promise<Array<{ name: string; url: string }>>;
  getFilter: (arg: any) => any;
  pokemonType: Array<{ name: string; url: string }>;
  buttonState: () => void;
  setUserName: Dispatch<SetStateAction<string>>;
  setEmail: Dispatch<SetStateAction<string>>;
  isDisabled: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  email: string;
  userName: string;
  openModal: boolean;
};

export type PokemonDataProps = {
  id: string;
  name: string;
  url: string;
};
export type TypePokemonProps = {
  name: string;
  url: string;
};
