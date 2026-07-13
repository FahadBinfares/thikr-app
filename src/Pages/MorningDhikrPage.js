import { Link } from "react-router-dom";
import morningAdhkar from "../Data/ar.json";
import { useState } from "react";

console.log(morningAdhkar);

export default function DhikrTemplate() {
  const [process, setprocess] = useState(0);
  const [counter, setCounter] = useState(morningAdhkar[0].count);

  function HandelProcess() {
    if (process < morningAdhkar.length) {
      setprocess((process) => process + 1);
    }
  }

  function HandelProcessBack() {
    if (process > 0) setprocess((process) => process - 1);
  }

  function HandelCountForDhikd() {
    if (counter > 1) {
      setCounter((prev) => prev - 1);
    } else {
      // عندما يكون العداد 1، انتقل مباشرة للذكر التالي
      if (process < morningAdhkar.length - 1) {
        const next = process + 1;
        setprocess(next);
        setCounter(morningAdhkar[next].count);
      }
    }
  }

  return (
    <div className="main-Dhikr-Component">
      <DhikrMainComponent />
      <DhikrContent
        data={morningAdhkar}
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

function DhikrMainComponent() {
  return (
    <div className="Dhikr-first-line">
      <Link to="/">
        <button className="back-main-btn">→</button>
      </Link>
      <div className="Dhikr-type-and-index">
        <h2>اذكار الصباح</h2>
        <p>الذكر 1 من 13</p>
      </div>
      <span>8%</span>
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

        <button onClick={setCounter} className="dhikr-repet-times">
          {counter}
        </button>
      </div>
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
