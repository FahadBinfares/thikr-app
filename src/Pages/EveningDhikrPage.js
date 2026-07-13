import { Link } from "react-router-dom";
import morningAdhkar from "../Data/ar.json";

console.log(morningAdhkar);

export default function EVeningDhikrPage() {
  return (
    <div className="main-Dhikr-Component">
      <DhikrMainComponent />
      <DhikrContent />
      <BtnMoveAndBack />
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
        <h2>اذكار المساء</h2>
        <p>الذكر 1 من 13</p>
      </div>
      <span>8%</span>
    </div>
  );
}

function DhikrContent() {
  return (
    <div className="Dhikr-Content-container">
      <div className="tag-time-to-read">تقال مره واحدة</div>

      <div className="ayah-btn-benfits-container">
        <p className="ayah">
          اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ
          سِنَةٌ وَلَا نَوْمٌ ۖ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ
          مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا
          بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ
          عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ
          وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ
          الْعَظِيمُ
        </p>
        <span className="benefits-of-ayah">
          آية الكرسي — من قالها حين يصبح أُجير من الجن حتى يمسي
        </span>

        <button className="dhikr-repet-times">1</button>
      </div>
    </div>
  );
}

function BtnMoveAndBack() {
  return (
    <div className="move-back-container">
      <button className="back-btn">السابق</button>
      <button className="move-btn">التالي</button>
    </div>
  );
}
