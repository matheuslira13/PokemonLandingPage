import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { IsEmailValid } from "../utils/functions";
import { client } from "../config/client-graphql";
import { gql, useQuery } from "@apollo/client";

export const useLandingPage = () => {
  useEffect(() => {
    getAllPokemon();
    getTypesPokemon();
  }, []);
  const [search] = useState(["name"]);
  const [findInList, setFindInList] = useState("");
  const [pokeData, setPokeData] = useState<any>([]);
  const [pokemonType, setPokemonType] = useState<any>([]);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [openModal, setOpenModal] = useState(false);

  const getFilter = (items: any) => {
    return items.filter((item: any) => {
      return search.some((newItem) => {
        return (
          item[newItem]
            ?.toString()
            ?.toLowerCase()
            ?.indexOf(findInList.toLowerCase()) > -1
        );
      });
    });
  };

  const getAllPokemon = useCallback(async () => {
    try {
      const result = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=251&offset=0`
      );
      setPokeData(result.data.results);
    } catch (error) {
      console.log("error");
    }
  }, []);
  pokeData.forEach((item: any, index: any) => {
    item.id = index + 1;
  });

  const getTypesPokemon = useCallback(async () => {
    try {
      const pokeType = await axios.get("https://pokeapi.co/api/v2/type/");

      setPokemonType(pokeType.data.results);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const buttonState = () => {
    if (userName.length > 1 && IsEmailValid(email)) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };
  return {
    getFilter,
    pokeData,
    pokemonType,
    setFindInList,
    buttonState,
    setUserName,
    setEmail,
    isDisabled,
    setOpenModal,
    email,
    userName,
    openModal,
  };
};
