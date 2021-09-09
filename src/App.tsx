import { useState, useEffect } from "react";

import "./styles.css";
import Logo from "./assets/logo.svg";

import InputPeople from "./components/InputPeople";
import InputBill from "./components/InputBill";
import TipButton from "./components/TipButton";
import InputTip from "./components/InputTip";

import type { TipType } from "./types/Types";

function tipAmount(bill: number, tip: number, people: number): number {
  if (people === 0) return 0;

  const totalTip = (bill * tip) / 100;
  const tipPerPerson = totalTip / people;

  return tipPerPerson;
}

function totalPerPerson(bill: number, tip: number, people: number): number {
  if (people === 0) return 0;

  let totalPerPerson = bill + bill * (tip / 100);
  totalPerPerson = totalPerPerson / people;

  return totalPerPerson;
}

const tips = [
  {
    text: "5%",
    value: 5
  },
  {
    text: "10%",
    value: 10
  },
  {
    text: "15%",
    value: 15
  },
  {
    text: "25%",
    value: 25
  },
  {
    text: "50%",
    value: 50
  }
]

export default function App() {
  const [bill, setBill] = useState(0);
  const [people, setPeople] = useState(1);
  const [tip, setTip] = useState<TipType>({ value: 5, custom: false });

  const handlerSetBill = (value: number) => setBill(value);
  const handlerSetPeople = (value: number) => setPeople(value);
  const handlerSetTip = (value: TipType) => setTip(value);

  const handleReset = () => {
    setBill(0);
    setPeople(1);
    setTip({ value: 5, custom: false });
  };

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--errorMessageDisplay",
      !people ? "block" : "none"
    );
  }, [people]);

  return (
    <div className="app">
      <header>
        <h1>
          <picture>
            <img src={Logo} alt="Logo" />
          </picture>
        </h1>
      </header>
      <main className="main-container">
        <section className="controls">
          <div className="control-bill">
            <p className="control-bill__label">Bill</p>
            <InputBill
              state={bill}
              setState={handlerSetBill}
              maxValue={1_000_000}
              title="Max value: 1.000.000"
            />
          </div>
          <div className="control-tip">
            <p className="control-tip__label">Select Tip %</p>
            <div className="control-tip__buttons">
              { tips.map(t => <TipButton key={t.value} state={tip} setState={handlerSetTip} {...t} />) }
              <InputTip state={tip} setState={handlerSetTip} maxValue={100} />
            </div>
          </div>
          <div className="control-people">
            <div className="control-people__container">
              <p className="control-people__label">Number of People</p>
              <p className="control-people__error">Can't be zero</p>
            </div>
            <InputPeople
              state={people}
              setState={handlerSetPeople}
              maxValue={1_000}
              title="Max value: 1.000"
            />
          </div>
        </section>
        <section className="result">
          <div className="result__tip-label-container">
            Tip Amount<span className="result__per-person">/ person</span>
          </div>
          <div className="result__tip-result-container" id="amount-person">
            ${tipAmount(bill, tip.value, people).toFixed(2)}
          </div>
          <div className="result__total-label">
            Total<span className="result__per-person">/ person</span>
          </div>
          <div className="result__total-result-container" id="total-person">
            ${totalPerPerson(bill, tip.value, people).toFixed(2)}
          </div>
          <button className="result__button-reset" onClick={handleReset}>
            RESET
          </button>
        </section>
      </main>
    </div>
  );
}
