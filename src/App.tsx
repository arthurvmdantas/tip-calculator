import { useState, useEffect } from "react";

import "./styles.css";
import Logo from "./media/logo.svg";

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

export default function App() {
  const [bill, setBill] = useState(0);
  const [people, setPeople] = useState(1);
  const [tip, setTip] = useState<TipType>({ value: 5, custom: false });

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
    <div className="App">
      <picture>
        <img src={Logo} alt="Logo" />
      </picture>
      <main>
        <section className="controls">
          <div>
            <p className="topZero">Bill</p>
            <InputBill
              state={bill}
              setState={setBill}
              maxValue={1_000_000}
              title="Max value: 1.000.000"
            />
          </div>
          <div>
            <p>Select Tip %</p>
            <div className="tips">
              <TipButton text="5%" value={5} state={tip} setState={setTip} />
              <TipButton text="10%" value={10} state={tip} setState={setTip} />
              <TipButton text="15%" value={15} state={tip} setState={setTip} />
              <TipButton text="25%" value={25} state={tip} setState={setTip} />
              <TipButton text="50%" value={50} state={tip} setState={setTip} />
              <InputTip state={tip} setState={setTip} maxValue={100} />
            </div>
          </div>
          <div>
            <div className="labelPeople">
              <p>Number of People</p>
              <p className="errorMessage">Can't be zero</p>
            </div>
            <InputPeople
              state={people}
              setState={setPeople}
              maxValue={1_000}
              title="Max value: 1.000"
            />
          </div>
        </section>
        <section className="result">
          <div className="tip-label">
            Tip Amount<span>/ person</span>
          </div>
          <div className="tip-result" id="amount-person">
            ${tipAmount(bill, tip.value, people).toFixed(2)}
          </div>
          <div className="total-label">
            Total<span>/ person</span>
          </div>
          <div className="total-result" id="total-person">
            ${totalPerPerson(bill, tip.value, people).toFixed(2)}
          </div>
          <button className="button-reset" onClick={handleReset}>
            RESET
          </button>
        </section>
      </main>
    </div>
  );
}
