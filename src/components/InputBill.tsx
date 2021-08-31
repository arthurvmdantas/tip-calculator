import React from "react";
import { InputPropsType } from "../types/Types";
//@ts-ignore
import styles from "./InputBill.module.css";

export default function InputBill({
  state,
  setState,
  maxValue,
  ...rest
}: InputPropsType) {
  const handleBillInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const character = (e.nativeEvent as InputEvent).data;

    if (character && /\d/.test(character)) {
      let newValue = (state * 10).toFixed(2);
      newValue = newValue.slice(0, newValue.length - 1) + character;

      if (parseFloat(newValue) <= maxValue) setState(parseFloat(newValue));
    }
  };

  const handleBillBackspace = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace") {
      if (state > 0) {
        let newValue = state.toString();

        newValue =
          newValue.slice(0, newValue.length - 3) +
          newValue[newValue.length - 2];

        setState(parseFloat(newValue) / 100);
      }
    }
  };

  return (
    <input
      type="text"
      className={styles["input"]}
      onChange={handleBillInput}
      onKeyDown={handleBillBackspace}
      value={state.toFixed(2)}
      {...rest}
    />
  );
}
