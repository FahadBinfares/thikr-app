import "./App.css";

export default function App() {
  return (
    <div>
      <NavBar />
    </div>
  );
}

function NavBar() {
  const todayDate = new Date();

  const formattedDate = todayDate
    .toLocaleDateString("ar-EG", {
      weekday: "long",
      day: "numeric",
      month: "long",
    })
    .replace("،", " ·");
  return (
    <>
      <header className="nav-container">
        <nav>
          <ul>
            <li className="Logo">ذِكر</li>
            <li className="date-dkrAllah">
              <span className="today-date">{formattedDate}</span>
              <span className="under-date-dkr">حصن يومك بذكر الله</span>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
