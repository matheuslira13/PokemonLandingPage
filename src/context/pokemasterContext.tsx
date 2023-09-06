import { useQuery, useMutation } from "@apollo/client";
import { ReactNode, createContext, useContext, useState } from "react";
import {
  GET_ALL_POKERMASTERS,
  ADD_POKEMON,
  GET_ALL_POKEMONS,
  DELETE_POKEMON_SELECTED,
} from "../graphql";

export const PokemonContext = createContext({});

type ExerciseProvideProps = {
  children: ReactNode;
};

export const PokemonProvide = ({ children }: ExerciseProvideProps) => {
  const { data, loading } = useQuery(GET_ALL_POKERMASTERS);
  const { data: pokemons, loading: carregando } = useQuery(GET_ALL_POKEMONS);

  const [addPoke] = useMutation(ADD_POKEMON, {
    update(cache, { data }) {
      const newPokemonAdd = data?.addPokePersonalList; // essa aqui e o retorno do novo pokemon
      const existiingPokemon = cache.readQuery({ query: GET_ALL_POKERMASTERS });
      cache.writeQuery({
        query: GET_ALL_POKERMASTERS,
        data: {
          user: {
            //@ts-ignore
            pokemons: [...existiingPokemon?.user.pokemons, newPokemonAdd],
          },
        },
      });
    },
  });
  const [deletePoke] = useMutation(DELETE_POKEMON_SELECTED, {
    refetchQueries: [GET_ALL_POKERMASTERS],
  });
  return (
    <PokemonContext.Provider
      value={{
        pokeMasters: {
          itens: data ? data.user : [],
          loading,
        },
        allrestpokemons: pokemons,
        addPoke,
        deletePoke,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemonMastersContext = () => {
  return useContext(PokemonContext);
};
