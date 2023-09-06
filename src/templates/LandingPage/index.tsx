import { HashLink as Link } from "react-router-hash-link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useState } from "react";
import logo from "../../../src/assets/logo.svg";
import mil from "../../../src/assets/mil.png";
import {
  Header,
  Carrossel,
  CardPokemon,
  CardPokeType,
  Button,
  TextInput,
  ModalNewsLetter,
} from "../../componentes";
import { LandingPageProps, PokemonDataProps, TypePokemonProps } from "./types";
import "./styles.scss";
import { usePokemonMastersContext } from "../../context/pokemasterContext";

export const LandingPageTemplate = ({
  getFilter,
  pokeData,
  pokemonType,
  setFindInList,
  buttonState,
  email,
  isDisabled,
  openModal,
  setEmail,
  setOpenModal,
  setUserName,
  userName,
}: LandingPageProps) => {
  //@ts-ignore
  const { pokeMasters, addPoke, allrestpokemons, deletePoke } =
    usePokemonMastersContext();
  //const [userID, setUserID] = useState(1);
  const [pokeId, setPokeId] = useState("");
  // voce esta fazendo errado, no inicio sua ideia era simplesmente mostra os
  //pokemons adicionas do usuario um, entao melhor simplesmente mostra todos os pokemos cadastrados e fazer um input direto
  //para cadastra pokemons e consumir a tabela direta de pokemons
  const initialValue = {
    userID: 1,
    pokeId: parseInt(pokeId),
  };
  const handleSubmit = () => {
    addPoke({
      variables: initialValue,
    }).catch((error: any) => {
      console.error("Erro na mutação:", error);
    });
  };
  const handleDelete = (e: any) => {
    deletePoke({
      variables: {
        userID: 1,
        pokeId: parseInt(e),
      },
    }).catch((error: any) => {
      alert("Erro na mutação:");
    });
  };
  return (
    <div className="container" id="home">
      <Header link1="pokedex" link2="relação entre tipos" link3="newsletter" />
      <Carrossel />
      <article className="containerContent">
        {!pokeMasters?.itens.login && (
          <>
            <h3>
              Quer conhecer o treinado master criador desse repo baixe tbm o
              backend
              <a
                target="_blank"
                href="https://github.com/matheuslira13/LearningGraphQl/tree/apiCrudVersion4"
                rel="noreferrer"
              >
                aqui
              </a>
            </h3>
          </>
        )}

        {pokeMasters?.itens.login && (
          <>
            <h3>Treinado master responsavel pelo repo</h3>
            <div
              style={{
                display: "flex",
                gap: 20,
                marginTop: 50,
              }}
            >
              <div>
                <h4>{pokeMasters?.itens.login}</h4>
                <img
                  src={pokeMasters?.itens.avatar_url}
                  width={200}
                  height={200}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                <h4>
                  exemplo de consumo do backend mostrando os seus pokemons
                  favoritos
                </h4>
                <input
                  type="number"
                  placeholder="id escolha o id do pokemon para ser adicionado"
                  onChange={(e) => setPokeId(e.target.value)}
                />
                <button onClick={handleSubmit}>
                  Adicionar pokemon ao banco
                </button>
                <h5>Pokemons</h5>
                <ul>
                  {pokeMasters?.itens.pokemons.map((item: any, index: any) => {
                    return (
                      <li
                        key={index}
                        style={{
                          width: 200,
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        {item?.name} || {item.ability}
                        <span
                          style={{ cursor: "pointer" }}
                          onClick={() => handleDelete(item.pokeId)}
                        >
                          &times;
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div>
                <h4>Pokemons cadastrados no backend</h4>
                <ul>
                  {allrestpokemons?.getAllPokemon.map(
                    (item: any, index: any) => {
                      return (
                        <li key={index}>
                          `id {item.pokeId} : nome :{item.name}`
                        </li>
                      );
                    }
                  )}
                </ul>
              </div>
            </div>
          </>
        )}

        <h3 className="containerContentTitle" id="pokedex">
          Pesquise seu pokemon favorito XD
        </h3>
        <button onClick={() => console.log(allrestpokemons)}>Aqui</button>

        <TextInput
          onChange={setFindInList}
          placeholder={"Pesquise seu pokemon"}
        />
        <div className="subContainerContent">
          {pokeData ? (
            getFilter(pokeData).map(
              (element: PokemonDataProps, index: number) => {
                return (
                  <div className="containerPokedex" key={index}>
                    <CardPokemon
                      key={element.id}
                      title={element.name}
                      img={element.id}
                      url={element.url}
                    />
                  </div>
                );
              }
            )
          ) : (
            <p>Carregando</p>
          )}
        </div>
        <h1 className="containerContentTitle" id="typePokemons">
          Relação entre tipos pokemon
        </h1>
        {pokemonType[0] ? (
          <div className="containerCardPokeType">
            (
            {pokemonType
              .slice(0, -2)
              .map((value: TypePokemonProps, index: number) => {
                return (
                  <CardPokeType
                    key={index}
                    type={value?.name}
                    url={value?.url}
                  />
                );
              })}
            )
          </div>
        ) : (
          <>Carregando</>
        )}
      </article>
      <section className="containerEmailDiv" id="newsletter">
        <div className="InfoEmail">
          <p className="titleNewsLetter">Assine</p>
          <p className="titleNewsLetter"> nossa </p>
          <p className="titleNewsLetter color"> newsletter</p>
          <img src={mil} className="imgNewsLetter" />
        </div>
        <form className="containerForm" action="">
          <TextInput
            placeholder="Nome"
            onChange={(e: string) => {
              buttonState();
              setUserName(e);
            }}
            type="normal"
          />

          <TextInput
            placeholder="Email"
            onChange={(e: string) => {
              buttonState();
              setEmail(e);
            }}
            type="email"
          />
          <Button
            isDisabled={isDisabled}
            onClick={() => {
              setOpenModal(true);
            }}
          />
        </form>
        <ModalNewsLetter
          email={email}
          name={userName}
          onClose={setOpenModal}
          openModal={openModal}
        />
      </section>
      <footer
        className="containerFooter"
        style={{
          background: `linear-gradient(
            to bottom,
            rgba(0, 0, 0, 1) 5%,
            rgba(0, 0, 0, 0) 100%
          )`,
          backgroundColor: "rgb(255,215,0)",
        }}
      >
        <Link to="#home" className="wrapLogoFooter">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
            className="logoFooter"
          />
        </Link>
        <h3 className="emailFooter">matheus_lira13@hotmail.com</h3>
        <div className="socialMidias">
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/matheus-lira-barbosa-b6133438/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="iconFooter" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/matheuslira13"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className="iconFooter" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};
