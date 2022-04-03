import "./AppHeader.css";
import Logo from "./Logo";

const AppHeader = () => {
  return (
    <header className="header">
      <Logo />
      <nav className="main-nav">
        <ul className="main-nav-list">
          <li>
            <a href="#" className="main-nav-link">
              How it works
            </a>
          </li>
          <li>
            <a href="#" className="main-nav-link">
              Meals
            </a>
          </li>
          <li>
            <a href="#" className="main-nav-link">
              Testimonials
            </a>
          </li>
          <li>
            <a href="#" className="main-nav-link">
              Pricing
            </a>
          </li>
          <li>
            <a href="#" className="main-nav-link nav-cta">
              Try for free
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default AppHeader;
