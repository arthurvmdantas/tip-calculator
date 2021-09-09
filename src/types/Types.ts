type InputPropsType = {
  state: number;
  setState: (value: number) => void;
  maxValue: number;
  title?: string;
};

type InputTipPropsType = {
  state: TipType;
  setState: (value: TipType) => void;
  maxValue: number;
  title?: string;
};

type ButtonPropsType = {
  state: TipType;
  setState: (value: TipType) => void;
  text: string;
  value: number;
};

type TipType = {
  value: number;
  custom: boolean;
};

export type { InputPropsType, ButtonPropsType, TipType, InputTipPropsType };
