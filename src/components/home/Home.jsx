import "./Home.scss";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { useEffect, useRef } from "react";
import { Navigation } from "swiper/modules";
import Typed from "typed.js";

function Home() {
  const typedRef = useRef(null);

  useEffect(() => {
    // Créer une nouvelle instance de Typed lorsque le composant est monté
    const typed = new Typed(typedRef.current, {
      strings: ["FrontEnd", "Fullstack"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });

    // Nettoyer lorsque le composant est démonté
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        navigation={true}
        modules={[Navigation]}
      >
        <section id="home" className="home swiper">
          <div className="swiper-wrapper">
            <SwiperSlide>
              <div className="swiper-slide slider-container">
                <div className="home-txt">
                  <span>Esteban Lopez</span>
                  <h1>
                    Intégrateur web
                    <br />
                    <span className="multiple" ref={typedRef}></span>
                  </h1>
                  <a
                    href="./CVESTEBAN.pdf"
                    target="_blank"
                    className="btn"
                    rel="noopener noreferrer"
                  >
                    Voir mon CV <i className="bx bx-right-arrow-alt"></i>
                  </a>
                </div>
                <img src="./ordinateur2.svg" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide slider-container">
                <div className="home-txt">
                  <span>Pour vous</span>
                  <h1>
                    Construisons votre présence
                    <br />
                    en ligne, ensemble.
                  </h1>
                  <a href="#services" className="btn">
                    Mes services <i className="bx bx-right-arrow-alt"></i>
                  </a>
                </div>
                <img src="./ordinateur.svg" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide slider-container">
                <div className="home-txt">
                  <span>Vous avez le choix</span>
                  <h1>
                    Des solutions web sur mesure pour vos
                    <br />
                    besoins uniques.
                  </h1>
                  <a href="#contact" className="btn">
                    Me contacter<i className="bx bx-right-arrow-alt"></i>
                  </a>
                </div>
                <img src="./ordinateur3.svg" alt="" />
              </div>
            </SwiperSlide>
          </div>
          <div className="swiper-button-next" onClick={Swiper}></div>
          <div className="swiper-button-prev" onClick={Swiper}></div>
        </section>
      </Swiper>
    </>
  );
}

export default Home;
