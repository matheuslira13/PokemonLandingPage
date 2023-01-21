import { useState, useEffect, useMemo, useCallback } from "react";
import React from "react";
import { IsEmailValid } from "../../utils/functions";
import "./styles.scss";
import { TextInputProps } from "./types";

export const TextInput = ({ onChange, placeholder, type }: TextInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [text, setText] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [showError, setShowError] = useState(false);
  const [status, setStatus] = useState("default");

  const verifyIsEmailValidTimeout = (e: string) => {
    setIsValidEmail(IsEmailValid(e));
    var highestTimeoutId = setTimeout(";");
    for (var i = 0; i < highestTimeoutId; i++) {
      clearTimeout(i);
    }

    if (isValidEmail) {
      setStatus("success");
    } else if (e.length === 0) {
      setShowError(false);
      setStatus("default");
    } else {
      setStatus("default");
      setTimeout(() => {
        setStatus("error");
        setShowError(true);
      }, 3000);
    }
  };

  const getValue = (e: string) => {
    onChange(e);
    setShowError(false);
    setStatus("default");
    setText(e);
    verifyIsEmailValidTimeout(e);
  };
  const getText = (e: string) => {
    onChange(e);
    setText(e);
    setShowError(false);
    if (e.length < 1) {
      setShowError(true);
    }
    setText(e);
  };

  let statusProps = {
    default: isFocused ? "#FFD700" : "#9C8400",
    success: "green",
    error: "red",
  }[status];

  return (
    <div className="containerTextInput">
      <input
        type={type}
        style={{
          borderColor: `${statusProps}`,
          transition: "border-color 0.5s",
        }}
        className="textInput"
        placeholder={placeholder}
        onChange={(e) =>
          type === "email" ? getValue(e.target.value) : getText(e.target.value)
        }
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {!isValidEmail && type === "email" && showError && (
        <p className="hint">Digite um email valido</p>
      )}
      {text.length <= 1 && type === "normal" && showError && (
        <p className="hint">Campo obrigatorio</p>
      )}
    </div>
  );
};
