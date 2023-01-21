import { IoArrowForward } from "react-icons/io5";
import { ButtonProps } from "./types";
import "./styles.scss";

export const Button = ({ onClick, isDisabled = false }: ButtonProps) => {
  return (
    <button
      type="button"
      style={{ opacity: isDisabled ? "0.5" : "1" }}
      className="containerButton"
      onClick={onClick}
      disabled={isDisabled}
    >
      <IoArrowForward className="icon" />
    </button>
  );
};
