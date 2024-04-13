import "./Services.scss";

function Services() {
  return (
    <>
      <section id="services" className="services">
        <h2 className="section-title">
          Mes services <span>Pour vous</span>
        </h2>
        <div className="categorie-line"></div>
        <div className="services-content">
          <div className="services-box">
            <i className="bx bx-code-alt"></i>
            <h3>Développement web</h3>
            <p>
              Développe des sites vitrines, e-commerce, applications web, mobile
              ou de bureau.
            </p>
            <a href="#" className="btn">
              Me contacter
            </a>
          </div>
          <div className="services-box">
            <i className="bx bxs-palette"></i>
            <h3>Expérience utilisateur & Design</h3>
            <p>
              Offrez à vos clients une expérience fluide, intuitive et
              visuellement magnifique.
            </p>
            <a href="#" className="btn">
              Me contacter
            </a>
          </div>
          <div className="services-box">
            <i className="bx bxs-graduation"></i>
            <h3>Accessibilité</h3>
            <p>
              Nous avons tous le droit d'explorer le web. HTML sémantique et
              ARIA si pertinent.
            </p>
            <a href="#" className="btn">
              En savoir plus
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
