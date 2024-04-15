import "./About.scss";

function About() {
  return (
    <>
      <section className="about" id="about">
        {/* <img src="./logo.png" alt="" /> */}
        <div className="about-txt">
          <h2 className="section-title">
            Présentation <span>Qui suis-je?</span>
          </h2>
          <div className="categorie-line"></div>

          <p>
            Bonjour, je suis Esteban Lopez, intégrateur web. Actuellement en
            formation chez OpenClassrooms en tant qu'intégrateur web, je suis
            passionné par la création de sites web fonctionnels et esthétiques.
            Avec une expertise en HTML, CSS, JavaScript et ReactJS, je crée des
            expériences utilisateur optimales, adaptées à tous les appareils.
            Que vous ayez besoin d'une refonte de site, d'une création de site
            vitrine ou d'une application web, je suis là pour transformer votre
            vision en réalité. Contactez-moi pour discuter de votre projet web
            et ensemble, donnons vie à votre présence en ligne.
          </p>
          <p>Construisons votre présence en ligne, ensemble.</p>
          <a href="#" className="btn-about">
            Voir mon CV
            <i className="bx bx-right-arrow-alt"></i>
          </a>
        </div>
      </section>
    </>
  );
}

export default About;
