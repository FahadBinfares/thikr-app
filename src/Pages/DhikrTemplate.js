import { Link } from "react-router-dom";
import { useState } from "react";

// MorningPage.js

export default function DhikrTemplate({ adhkar, adhkarType, adhkarCount }) {
  const [process, setprocess] = useState(0);
  const [counter, setCounter] = useState(adhkar[0].count);
  const [Progress, setProgress] = useState(0);

  function HandelPeogress(currentProcess) {
    setProgress(Math.round((currentProcess / adhkarCount) * 100));
  }

  function HandelProcess() {
    if (process < adhkar.length - 1) {
      setprocess((process) => process + 1);
      const next = process + 1;
      setCounter(adhkar[next].count);
      HandelPeogress(next);
    }
  }

  function HandelProcessBack() {
    if (process > 0) {
      setprocess((process) => process - 1);
      const prev = process - 1;
      setCounter(adhkar[prev].count);
      HandelPeogress(prev);
    }
  }

  function HandelCountForDhikd() {
    if (counter > 1) {
      setCounter((prev) => prev - 1);
    } else {
      if (process < adhkar.length - 1) {
        const next = process + 1;
        setprocess(next);
        setCounter(adhkar[next].count);
      }
    }
  }

  return (
    <div className="main-Dhikr-Component">
      <DhikrMainComponent
        adhkarType={adhkarType}
        adhkarCount={adhkarCount}
        process={process}
        Progress={Progress}
      />
      <DhikrContent
        data={adhkar}
        process={process}
        setCounter={HandelCountForDhikd}
        counter={counter}
      />
      <BtnMoveAndBack
        HandelProcess={HandelProcess}
        HandelProcessBack={HandelProcessBack}
      />
    </div>
  );
}

function DhikrMainComponent({ adhkarType, adhkarCount, process, Progress }) {
  return (
    <div className="Dhikr-first-line">
      <Link to="/">
        <button className="back-main-btn">→</button>
      </Link>
      <div className="Dhikr-type-and-index">
        <h2>{adhkarType}</h2>
        <p>
          {process} من {adhkarCount}
        </p>
      </div>
      <span>{Progress}%</span>
    </div>
  );
}

function DhikrContent({ data, process, setCounter, counter }) {
  return (
    <div className="Dhikr-Content-container">
      <div className="tag-time-to-read">{data[process].count_description}</div>

      <div className="ayah-btn-benfits-container">
        <p className="ayah">{data[process].content}</p>
        <span className="benefits-of-ayah">{data[process].fadl}</span>
      </div>

      <button onClick={setCounter} className="dhikr-repet-times">
        {counter}
      </button>
    </div>
  );
}

function BtnMoveAndBack({ HandelProcess, HandelProcessBack }) {
  return (
    <div className="move-back-container">
      <button onClick={HandelProcessBack} className="back-btn">
        السابق
      </button>
      <button onClick={HandelProcess} className="move-btn">
        التالي
      </button>
    </div>
  );
}
