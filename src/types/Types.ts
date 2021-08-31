import React from "react";

type InputPropsType = {
  state: number;
  setState: React.Dispatch<React.SetStateAction<number>>;
  maxValue: number;
  title?: string;
};

type InputTipPropsType = {
  state: TipType;
  setState: React.Dispatch<React.SetStateAction<TipType>>;
  maxValue: number;
  title?: string;
};

type ButtonPropsType = {
  state: TipType;
  setState: React.Dispatch<React.SetStateAction<TipType>>;
  text: string;
  value: number;
};

type TipType = {
  value: number;
  custom: boolean;
};

export type { InputPropsType, ButtonPropsType, TipType, InputTipPropsType };
