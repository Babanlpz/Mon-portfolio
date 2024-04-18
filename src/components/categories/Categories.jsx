import "./Categories.scss";

function Categories() {
  return (
    <section className="categories" id="category">
      <div className="section-heading">
        <h2>
          Decouvrez mes compétences <span>technologies</span>
        </h2>
        <div className="categorie-line"></div>
        {/*<a href="#" className="btn">
          <i className="bx bx-right-arrow-alt"></i>
        </a>*/}
      </div>
      <div className="categories-content">
        <div className="categorie-box categorie-box-1">
          <img src="./react.svg" alt="Logo react" />
          <h3>React js</h3>
          <span>10 projets</span>
          {/* <i className="bx bx-right-arrow-alt"></i> */}
        </div>
        <div className="categorie-box categorie-box-2">
          <img src="./html.svg" alt="logo html" />
          <h3>Html 5</h3>
          <span>7 projets</span>
          {/* <i className="bx bx-right-arrow-alt"></i> */}
        </div>
        <div className="categorie-box categorie-box-3">
          <img src="./css.svg" alt="logo css" />
          <h3>Css</h3>
          <span>20 projets</span>
          {/* <i className="bx bx-right-arrow-alt"></i> */}
        </div>
        <div className="categorie-box categorie-box-4">
          <img src="./js.svg" alt="logo javascript" />
          <h3>Javascript</h3>
          <span>6 projets</span>
          {/* <i className="bx bx-right-arrow-alt"></i> */}
        </div>
        <div className="categorie-box categorie-box-5">
          <img src="./wordpress.svg" alt="logo wordpress" />
          <h3>Wordpress</h3>
          <span>4 projets</span>
          {/* <i className="bx bx-right-arrow-alt"></i> */}
        </div>
      </div>
    </section>
  );
}

export default Categories;
