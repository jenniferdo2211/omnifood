import "./AppHeader.css";

const AppHeader = () => {
  return (
    <header className="header">
      <img src="img/omnifood-logo.png" alt="Omnifood logo" className="logo" />
      <nav className="main-nav">
        <ul className="main-nav-list">
          <li>
            <a href="#" className="main-nav-link">
              Section
            </a>
          </li>
          <li>
            <a href="#" className="main-nav-link">
              Section
            </a>
          </li>
          <li>
            <a href="#" className="main-nav-link">
              Section
            </a>
          </li>
          <li>
            <a href="#" className="main-nav-link">
              Section
            </a>
          </li>
          <li>
            <a href="#" className="main-nav-link nav-cta">
              Section
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default AppHeader;
