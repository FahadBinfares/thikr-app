import adhkar from "../Data/ar.json";
import DhikrTemplate from "./DhikrTemplate.js";

const EveningAdhkar = adhkar.filter(
  (item) => item.type === 0 || item.type === 2,
);

export default function EveningDhikr() {
  return (
    <DhikrTemplate
      adhkar={EveningAdhkar}
      adhkarType="اذكار المساء"
      adhkarCount={EveningAdhkar.length - 1}
    />
  );
}
