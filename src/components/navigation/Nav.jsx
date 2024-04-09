import "boxicons";
import "./Nav.scss";

export default function Nav() {
  return (
    <nav>
      <a href="#" className="logo">
        <i className="bx bx-baguette"></i>
        <span>BABAN.</span>
      </a>

      <i id="burger-menu" className="bx bx-menu"></i>
      <ul className="navigation">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#categories">Categories</a>
        </li>
        <li>
          <a href="#produits">Produits</a>
        </li>
        <li>
          <a href="#about">À propos</a>
        </li>
        <li>
          <a href="#reviews">Les avis</a>
        </li>
      </ul>
      <div className="profil">
        <img src="./avis-01.jpg" alt="" />
        <span>Soraya Does</span>
        <i className="bx bx-caret-down"></i>
      </div>
    </nav>
  );
}
