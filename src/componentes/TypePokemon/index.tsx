import "./styles.scss";
import { ColorTypePokemon } from "../../utils/functions";
import { TypePokemonProps } from "./types";

export const TypePokemon = ({ type }: TypePokemonProps) => {
  const { color } = ColorTypePokemon(type);
  return (
    <div className="conatinerType" style={{ backgroundColor: `${color}` }}>
      <h4 className="typeTitle">{type}</h4>
    </div>
  );
};
