import React from "react";
import type { ButtonPropsType } from "../types/Types";
//@ts-ignore
import styles from "./TipButton.module.css";
import cx from "classnames";

export default function TipButton({
  text,
  value,
  state,
  setState
}: ButtonPropsType) {
  function onClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    setState({
      value,
      custom: false
    });
  }

  /*
    The 'tip-active' class will be used when the tip is not custom (input)
    and the value of the tip is the same of the button's value
  */
  const btnClass = cx({
    [styles["button"]]: true,
    [styles["button_active"]]: !state.custom && state.value === value
  });

  return (
    <button className={btnClass} onClick={onClick}>
      {text}
    </button>
  );
}
