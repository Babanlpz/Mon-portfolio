import React, { useState } from "react";
import "./Portfolio.scss";

function Portfolio() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Fonction pour ouvrir la modal et définir le projet sélectionné
  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  // Fonction pour fermer la modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Données des projets
  const projects = [
    {
      id: 1,
      title: "Landing page",
      image: "./coffee.png",
      description:
        "Explorez notre landing page café : une création HTML, CSS et JavaScript qui capture l'essence d'une pause café parfaite. Plongez dans une expérience où l'arôme envoûtant du café fraîchement préparé vous accueille dans un univers de saveurs et de détente.",
      link: "https://babanlpz.github.io/Landing-page-coffee/",
    },
    {
      id: 2,
      title: "Clone Airbnb",
      image: "./airbnb.png",
      description:
        "Explorez notre clone Airbnb : une application web réactive créée avec React.js et Tailwind CSS. Plongez dans une expérience immersive pour trouver facilement votre prochain logement.",
      link: "https://cloneairbnb-xi.vercel.app/",
    },
    {
      id: 4,
      title: "Printit",
      image: "./printit.png",
      description:
        "Découvrez notre petite imprimerie : une application simple réalisée en JavaScript. Créez des designs personnalisés, imprimez des documents et explorez une gamme de services d'impression. Une expérience intuitive pour répondre à vos besoins d'impression.",
      link: "https://babanlpz.github.io/Lopez_Esteban_5_code_22112023/",
    },
    {
      id: 4,
      title: "Kasa",
      image: "./kasa.png",
      description:
        "Découvrez notre site de location de logements conçu avec ReactJS et stylisé avec Sass. Parcourez notre sélection, consultez les descriptions détaillées et réservez facilement votre prochain séjour. Une expérience intuitive pour trouver votre hébergement idéal.",
      link: "https://babanlpz.vercel.app/",
    },
    // Ajoutez d'autres projets ici
  ];

  return (
    <>
      <div className={showModal ? "overlay" : ""}></div>
      <section id="portfolio" className="portfolio">
        <h2 className="section-title">
          Mes projets <span>portfolio</span>
        </h2>
        <div className="categorie-line"></div>

        <div className="portfolio-container">
          {/* Affichage des projets */}
          {projects.map((project) => (
            <div
              className="portfolio-box"
              key={project.id}
              onClick={() => handleOpenModal(project)}
            >
              <img src={project.image} alt="Image du projet" />
              <div className="portfolio-layer">
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <a href={project.link} target="_blank">
                  <i className="bx bx-link-external"></i>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {showModal && (
          <div className="modal">
            <div className="modal-content">
              {/* Contenu de la modal */}
              <img
                className="modal-image"
                src={selectedProject.image}
                alt="Image du projet"
              />
              <h2 className="modal-title">{selectedProject.title}</h2>
              <p className="modal-description">{selectedProject.description}</p>
              <a
                className="modal-link"
                href={selectedProject.link}
                target="_blank"
              >
                Voir le projet
              </a>
              <button className="modal-close-btn" onClick={handleCloseModal}>
                Fermer
              </button>
            </div>
          </div>
        )}
      </section>
    </>
  );
}

export default Portfolio;
