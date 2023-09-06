import { gql } from "@apollo/client";

export const GET_ALL_POKERMASTERS = gql`
  query {
    user {
      login
      avatar_url
      id
      pokemons {
        pokeId
        name
        ability
      }
    }
  }
`;

export const ADD_POKEMON = gql`
  mutation addPokePersonalList($userID: Int, $pokeId: Int) {
    addPokePersonalList(userID: $userID, pokeId: $pokeId) {
      name
      ability
    }
  }
`;
export const GET_ALL_POKEMONS = gql`
  query {
    getAllPokemon {
      pokeId
      name
      ability
    }
  }
`;
export const DELETE_POKEMON_SELECTED = gql`
  mutation removerPokePersonalList($userID: Int, $pokeId: Int) {
    removerPokePersonalList(userID: $userID, pokeId: $pokeId)
  }
`;
