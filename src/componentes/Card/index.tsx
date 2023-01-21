import { useEffect, useState } from "react";
import "./styles.scss";
import axios from "axios";
import { TypePokemon } from "../TypePokemon";
import { ColorTypePokemon } from "../../utils/functions";
import pokebola from "../../assets/pokebola.png";
import { ModalPokemon } from "../Modal";
import { CardPokeTypeProps, CardProps } from "./types";

export const CardPokemon = ({ title, img, url }: CardProps) => {
  useEffect(() => {
    res();
  }, []);
  const [pokemon, setPokemon] = useState<any>([]);
  const [openModal, setOpenModal] = useState(false);
  const res = async () => {
    try {
      const response = await axios.get(url);
      const data = response;
      setPokemon(data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  let openCardDetails = () => {
    setOpenModal(!openModal);
  };

  return (
    <div onClick={() => openCardDetails()}>
      <div className="containercard">
        <img
          className="containerImg"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${img}.svg`}
        />
        <div className="containerContent">
          <div className="containerTitle">{title} </div>
          <div className="containerTypes">
            <h3 className="typeTitle">Types : </h3>
            <div className="subContainerTypes">
              {pokemon ? (
                pokemon?.types?.map((item: any, index: string) => {
                  return <TypePokemon key={index} type={item?.type?.name} />;
                })
              ) : (
                <p>Carregando</p>
              )}
            </div>
          </div>
        </div>
        <div
          className="footerContainer"
          style={{ background: `url(${pokebola})`, backgroundSize: "cover" }}
        >
          <img
            src={pokemon?.sprites?.front_default}
            className="footerImgSize"
          />
        </div>
      </div>
      <ModalPokemon
        name={title}
        openModal={openModal}
        onClose={setOpenModal}
        key={pokemon?.id}
        pokemonImg={
          pokemon?.sprites?.other?.["official-artwork"]?.front_default
        }
        pokemonImgShiny={
          pokemon?.sprites?.other?.["official-artwork"]?.front_shiny
        }
        abilitys={pokemon?.abilities}
        stats={pokemon?.stats}
        moves={pokemon?.moves}
      />
    </div>
  );
};

export const CardPokeType = ({ type, url }: CardPokeTypeProps) => {
  useEffect(() => {
    res();
  }, []);
  const [pokemonType, setPokemonType] = useState<any>([]);

  const res = async () => {
    try {
      const pokeType = await axios.get(url);
      const dataType = pokeType;
      setPokemonType(dataType?.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="containercardType">
      <h1>{type.toUpperCase()}</h1>
      <div className="subContainerType">
        <div className="contentContainer">
          <div
            className="iconColor"
            style={{ backgroundColor: `${ColorTypePokemon(type)?.color}` }}
          />
          <div className="leftSide">
            <img src={ColorTypePokemon(type)?.img} className="imgPokeType" />
          </div>
        </div>
        <div className="rightSide">
          {pokemonType?.damage_relations?.double_damage_to[0] && (
            <div className="wrapTypeContainer">
              <h3> Forte contra {}</h3>
              {pokemonType?.damage_relations?.double_damage_to.map(
                (element: any, index: string) => {
                  return <TypePokemon key={index} type={element?.name} />;
                }
              )}
            </div>
          )}
          <div className="wrapTypeContainer">
            <h3> Fraco contra </h3>

            {pokemonType?.damage_relations?.double_damage_from.map(
              (element: any, index: string) => {
                return <TypePokemon key={index} type={element?.name} />;
              }
            )}
          </div>
          {pokemonType?.damage_relations?.no_damage_from[0] && (
            <div className="wrapTypeContainer">
              <h3> No damage </h3>
              {pokemonType?.damage_relations?.no_damage_from.map(
                (element: any, index: string) => {
                  return <TypePokemon key={index} type={element?.name} />;
                }
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
