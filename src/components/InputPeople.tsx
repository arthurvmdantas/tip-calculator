import React from "react";
import { InputPropsType } from "../types/Types";
//@ts-ignore
import styles from "./InputPeople.module.css";
import cx from "classnames";

export default function InputPeople({
  state,
  setState,
  maxValue
}: InputPropsType) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const character = (e.nativeEvent as InputEvent).data;

    if (character && /\d/.test(character)) {
      const currentValue = parseInt(state.toString() + character, 10);

      // limit
      if (currentValue <= maxValue) setState(currentValue);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace") {
      if (state > 0) {
        const newValue = state.toString();
        setState(parseInt(newValue.slice(0, newValue.length - 1) || "0", 10));
      }
    }
  };

  const inputClass = cx({
    [styles["input"]]: true,
    [styles["warning"]]: state === 0
  });

  return (
    <input
      type="text"
      className={inputClass}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      aria-label="People"
      value={state}
    />
  );
}
