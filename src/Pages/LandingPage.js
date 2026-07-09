function Landingpage() {
  return (
    <div className="app-container">
      <NavBar />
      <HeroPart />
      <AdkarComponentsContiner />
      <Footer />
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

function HeroPart() {
  return (
    <div className="hero-container">
      <span className="hero-first-tilte"> لا تنسَ وردك</span>
      <h1 className="main-titel">اطمئنّ قلبُك بذكر الله</h1>
      <h2 className="expalane-theapp">
        اختر وردك اليومي من الأذكار الصحيحة، وعُدّها بهدوء بينما يرافقك العدّاد.
      </h2>
    </div>
  );
}

function AdkarComponentsContiner() {
  return (
    <div className=" Adkar-Components-Continer">
      <AdkarComponents
        adkarName="أذكار الصباح"
        adkarTime="من طلوع الفجر حتى العصر"
        timeLogo="sun-Logo"
      />
      <AdkarComponents
        adkarName="أذكار المساء"
        adkarTime="من صلاة العصر  حتى الفجر"
        timeLogo="moon-logo"
      />
    </div>
  );
}

function AdkarComponents({ adkarName, adkarTime, timeLogo }) {
  return (
    <>
      <div className="adkar-components">
        <div className="first-line-adkar-components">
          <div className={timeLogo}></div>
          <div className="adkar-components-track">
            <span>اكتمل اليوم</span>
            <span>13/2</span>
          </div>
        </div>
        <h3 className="adkar-components-title">{adkarName}</h3>
        <p className="adkar-components-sub-title">{adkarTime}</p>
        <button className="adkar-components-btn">ابدأ الورد </button>
      </div>
    </>
  );
}

function Footer() {
  return (
    <div className="footer">
      ﴿ أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ ﴾
    </div>
  );
}

export default Landingpage;
