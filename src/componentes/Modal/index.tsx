import { IoClose } from "react-icons/io5";
import ReactModal from "react-modal";
import "./styles.scss";
import { ModalNewsLetterProps, ModalPokemonProps } from "./types";

export const ModalPokemon = ({
  name,
  openModal,
  onClose,
  pokemonImg,
  pokemonImgShiny,
  abilitys,
  stats,
  moves,
}: ModalPokemonProps) => {
  return (
    <>
      {openModal && (
        <ReactModal
          isOpen={openModal}
          ariaHideApp={false}
          className="modalContainer"
          style={{
            overlay: {
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.75)",
            },
            content: {
              position: "absolute",
              top: "40px",
              left: "40px",
              right: "40px",
              bottom: "40px",
              border: "1px solid #ccc",
              background: "#fff",
              overflow: "auto",
              WebkitOverflowScrolling: "touch",
              borderRadius: "16px",
              outline: "none",
              padding: "20px",
            },
          }}
        >
          <IoClose
            className="iconCloseModal"
            onClick={() => onClose(!openModal)}
          />
          <h1>{name}</h1>

          <div className="containerImgModal">
            <div className="containerImgPokemon">
              <h3>Normal</h3>
              <img src={pokemonImg} className="pokemonModalImg" />
            </div>
            <div className="containerImgPokemon">
              <h3>Shyne</h3>
              <img src={pokemonImgShiny} className="pokemonModalImg" />
            </div>
          </div>
          <div className="grafico">
            <h2>Base stats</h2>
            {stats?.map((element: any, index: number) => {
              return (
                <div className="containerGrafico" key={index}>
                  <div className="containerStat">
                    <h5>
                      {element?.stat?.name} {element?.base_stat}
                    </h5>
                  </div>
                  <div className="containerDetails">
                    <div
                      className="details"
                      style={{ width: `${element?.base_stat / 3}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="containerAbility">
            <h2>Abilitys </h2>
            <div className="subContainerAbility">
              {abilitys?.map((element: any, index: number) => {
                return (
                  <div key={index} className="abilityName">
                    {element?.ability?.name}
                  </div>
                );
              })}
            </div>

            <div className="containerMoves">
              <div className="containerTitlesModal">
                <h3>Moves</h3>
                <h3>Games</h3>
              </div>
              <div className="subContainerMoves">
                {moves?.map((element: any, index: number) => {
                  return (
                    <div className="containerMoveGame" key={index}>
                      <h3 className="moveTitle">{element?.move?.name}:</h3>
                      <div className="containerMoveName">
                        {element?.version_group_details.map(
                          (element: any, index: number) => {
                            return (
                              <div
                                className="containerMoveNameItem"
                                key={index}
                              >
                                {element?.version_group?.name}
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </ReactModal>
      )}
    </>
  );
};

export const ModalNewsLetter = ({
  email,
  name,
  onClose,
  openModal,
}: ModalNewsLetterProps) => {
  return (
    <ReactModal
      isOpen={openModal}
      ariaHideApp={false}
      className="modalContainerNewsLetter"
      style={{
        overlay: {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.75)",
        },
        content: {
          position: "absolute",
          top: "40px",
          left: "40px",
          right: "40px",
          bottom: "40px",
          border: "1px solid #ccc",
          background: "#fff",
          overflow: "hideen",
          WebkitOverflowScrolling: "touch",
          borderRadius: "16px",
          outline: "none",
          padding: "20px",
        },
      }}
    >
      <IoClose className="iconCloseModal" onClick={() => onClose(!openModal)} />
      <svg
        className="checkmark"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 52 52"
      >
        <circle
          className="checkmark__circle"
          cx="26"
          cy="26"
          r="25"
          fill="none"
        />
        <path
          className="checkmark__check"
          fill="none"
          d="M14.1 27.2l7.1 7.2 16.7-16.8"
        />
      </svg>
      <h2>
        Obrigado <span> {name}</span>, por assinar nossa NewsLetter
      </h2>
      <div className="text">
        Nao sera enviado nem tipo de email para <span>{email}</span> foi feito
        somente o front
      </div>
    </ReactModal>
  );
};
