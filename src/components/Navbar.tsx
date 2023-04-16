import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            قناة مسجد الموسوي الكبير
            <i className="fas fa-mosque" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                الرئيسية
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/live" className="nav-links" onClick={closeMobileMenu}>
                البث المباشر
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/dvr" className="nav-links" onClick={closeMobileMenu}>
                البث المسجل
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/audio" className="nav-links" onClick={closeMobileMenu}>
                الراديو
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/player"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Player
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/video" className="nav-links" onClick={closeMobileMenu}>
                Video
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
