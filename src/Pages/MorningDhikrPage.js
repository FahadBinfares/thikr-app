import adhkar from "../Data/ar.json";
import DhikrTemplate from "./DhikrTemplate.js";

const morningAdhkar = adhkar.filter(
  (item) => item.type === 0 || item.type === 1,
);

export default function MorningDhikr() {
  return (
    <DhikrTemplate
      adhkar={morningAdhkar}
      adhkarType="اذكار الصباح"
      adhkarCount={morningAdhkar.length - 1}
    />
  );
}
