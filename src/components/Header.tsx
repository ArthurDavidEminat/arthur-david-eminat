import { useState, useEffect } from "react";
import "../styles/Header.css";
import { NavItem } from "../types";
import { Link, useLocation } from "react-router-dom";

type HeaderProps = {
  navItems: NavItem[];
};

function Header(props: HeaderProps) {
  const { navItems } = props;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    if (location.pathname !== "/") return setActiveSection(""); // not landing page, deactivate all
    const sectionIds = ["home", ...navItems.map((item) => item.id)];
    function onScroll() {
      let current = "home";
      for (let id of sectionIds) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 80) current = id;
        }
      }
      setActiveSection(current);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // initial
    return () => window.removeEventListener("scroll", onScroll);
  }, [location.pathname, navItems]);

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
          <Link to="/">
            <span
              className={`logo-text${
                location.pathname === "/" && activeSection === "home"
                  ? " active"
                  : ""
              }`}
            >
              Arthur David Eminat
            </span>
          </Link>
        </div>

        <ol className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          {navItems.map((item) => {
            let isActive = false;
            if (location.pathname === "/") isActive = activeSection === item.id;
            if (
              location.pathname === "/procurement" &&
              item.label.toLowerCase().includes("procure")
            )
              isActive = true;
            if (
              location.pathname === "/trading" &&
              item.label.toLowerCase().includes("trading")
            )
              isActive = true;
            return (
              <li className="nav-item" key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`nav-link${isActive ? " active" : ""}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
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
