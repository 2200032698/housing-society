import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <a href="#home" className="logo-link" onClick={closeMenu}>
          <img
            src="/assets/housing_society.png"
            alt="Housing Society"
            className="logo"
          />
        </a>

        {/* Navigation */}
        <nav
          className={`nav-links ${menuOpen ? "mobile-open" : ""}`}
          aria-label="Main navigation"
        >
          <a href="#home" onClick={closeMenu}>
            HOME
          </a>

          <a href="#about" onClick={closeMenu}>
            B06 TOWER
          </a>

          <a href="#floor-plans" onClick={closeMenu}>
            FLOOR PLANS
          </a>

          <a href="#contact" onClick={closeMenu}>
            CONTACT
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="menu-button"
          onClick={() => setMenuOpen((previous) => !previous)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </header>
  );
}

export default Navbar;