import React, { useRef, useState, useEffect, useCallback } from "react";
import "./styles.scss";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import background1 from "../../assets/pokemon1.jpg";
import background2 from "../../assets/pokemon2.jpg";
import background3 from "../../assets/pokemon3.jpg";

export const Carrossel = () => {
  const dataCarrossel = [
    {
      title: "Novidades de pokemon",
      subTitle:
        "Aqui uma nova maneira de você enxerga as vantangens de usar o tipo fairy em suas lutas",
      backgroundImg: background1,
    },
    {
      title: "Adeus Ash",
      subTitle:
        "Depois de 25 temporadas Ash finalmente se torna mestre pokemon e Nintendo pensa em substituição do seu personagen consagrado",
      backgroundImg: background2,
    },
    {
      title: "Novo jogo de Pokemon ",
      subTitle:
        "Pokemon Sword and Shild chega ao nintendo Swich e traz uma nova dinaminca mais realista nas batalhas pokemon!",
      backgroundImg: background3,
    },
  ];

  const carousel = useRef(null);

  const rightClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    //@ts-ignore
    carousel.current.scrollLeft += carousel.current.offsetWidth;
    //@ts-ignore
  };
  const leftClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    //@ts-ignore
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };
  return (
    <div className="mainContainerCarrosel" ref={carousel}>
      {dataCarrossel.map((item, index) => {
        return (
          <div
            key={index}
            className="containerCarrosel"
            style={{
              background: `linear-gradient(
        to top,
        rgba(0, 0, 0, 1) 5%,
        rgba(0, 0, 0, 0) 100%
      ),url(${item.backgroundImg})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="containerText">
              <span className="titleCarrosel">{item.title}</span>
              <span className="subTitleCarrosel">{item.subTitle}</span>
            </div>
            <div className="containerControlerCarrosel">
              <button onClick={leftClick}>
                <IoArrowBack className="controlerCarrosel" />
              </button>
              <button onClick={rightClick}>
                <IoArrowForward className="controlerCarrosel" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
