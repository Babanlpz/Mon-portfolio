import { useEffect, useState } from "react";
import { BiMoon, BiSun } from "react-icons/bi";
import "./Nav.scss";
/* eslint-disable react/prop-types */
export default function Nav({ toggleTheme }) {
  // Correction ici
  const [isActive, setIsActive] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // const navigation = document.querySelector(".navigation");
    const burger = document.querySelector("#burger-menu");

    const toggleNavigation = () => {
      setIsActive(!isActive);
    };

    const closeNavigation = () => {
      setIsActive(false); // Fermer la navigation
    };

    const linkNavigation = document.querySelectorAll(".navigation a");
    linkNavigation.forEach((link) => {
      link.addEventListener("click", closeNavigation);
    });

    burger.addEventListener("click", toggleNavigation);

    return () => {
      linkNavigation.forEach((link) => {
        link.removeEventListener("click", closeNavigation);
      });
      burger.removeEventListener("click", toggleNavigation);
    };
  }, [isActive]);

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode); // Inverse le mode entre clair et sombre
    toggleTheme(); // Appelle la fonction pour basculer le thème
  };

  return (
    <nav>
      <a href="#" className="logo">
        <i className="bx bx-baguette"></i>
        <span>BABAN.</span>
      </a>

      <i id="burger-menu" className={`bx ${isActive ? "bx-x" : "bx-menu"}`}></i>
      <ul className={`navigation ${isActive ? "active" : ""}`}>
        <li>
          <a href="#home" className="link-active">
            Home
          </a>
        </li>
        <li>
          <a href="#category">Compétences</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#about">Présentation</a>
        </li>
        <li>
          <a href="#reviews">Les avis</a>
        </li>
      </ul>

      <div className="profil">
        <div className="theme-toggle">
          <button onClick={handleThemeToggle} className="theme-button">
            {isDarkMode ? (
              <BiMoon className="moon-icon" />
            ) : (
              <BiSun className="sun-icon" />
            )}
          </button>
        </div>
        <a href="https://github.com/Babanlpz" target="blank">
          <img src="/github.png" target="blank" alt="Logo Github" />
        </a>
        <a href="#" target="blank">
          <img src="/facebook.png" target="blank" alt="Logo Facebook" />
        </a>
        <a href="https://www.instagram.com/babanlpz/" target="blank">
          <img src="/instagram.png" alt="Logo Instagram" />
        </a>
        <a href="#" target="blank">
          <img src="/youtube.png" alt="Logo Youtube" />
        </a>
        <a href="https://www.linkedin.com/in/estebanlopezdev/" target="blank">
          <img src="./linkedin.png" alt="Logo dribble" />
        </a>
      </div>
    </nav>
  );
}
