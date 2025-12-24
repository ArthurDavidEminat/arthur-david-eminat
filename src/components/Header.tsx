import { useState } from "react";
import "../styles/Header.css";

type NavItem = {
  id: string;
  label: string;
};

type HeaderProps = {
  navItems: NavItem[];
};

function Header(props: HeaderProps) {
  const { navItems } = props;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false); // Close mobile menu after clicking
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="navigation">
      <div className="nav-container">
        <div className="nav-logo">
          <span className="logo-text">Arthur David Eminat</span>
        </div>

        <ol className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          {navItems.map((item) => (
            <li className="nav-item" key={item.id}>
              <a
                href={`#${item.id}`}
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ol>
        <div
          className={`nav-toggle ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </header>
  );
}

export default Header;
