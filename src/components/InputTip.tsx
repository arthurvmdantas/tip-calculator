import React from "react";
import { InputTipPropsType } from "../types/Types";
//@ts-ignore
import styles from "./InputTip.module.css";

export default function InputTip({
  state,
  setState,
  maxValue
}: InputTipPropsType) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const character = (e.nativeEvent as InputEvent).data;

    if (character && /\d/.test(character)) {
      let currentValue = parseInt(character, 10);
      if (state.custom)
        currentValue = parseInt(state.value.toString() + character, 10);

      // limit
      if (currentValue <= maxValue)
        setState({ value: currentValue, custom: true });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace") {
      if (state.value > 0) {
        const newValue = state.value.toString();
        setState({
          ...state,
          value: parseInt(newValue.slice(0, newValue.length - 1) || "0", 10)
        });
      }
    }
  };

  return (
    <input
      type="text"
      placeholder="Custom"
      className={styles["input"]}
      value={state.custom ? state.value + "%" : ""}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
  );
}
