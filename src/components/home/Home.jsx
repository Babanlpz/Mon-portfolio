import "./Home.scss";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Navigation } from "swiper/modules";

function Home() {
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
                    Fullstack !
                  </h1>
                  <a href="#" className="btn">
                    Voir burger<i className="bx bx-right-arrow-alt"></i>
                  </a>
                </div>
                <img src="./Burger-01.png" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide slider-container">
                <div className="home-txt">
                  <span>Vous avez le choix</span>
                  <h1>
                    Notre univers
                    <br />
                    Burger vous attend !
                  </h1>
                  <a href="#" className="btn">
                    Voir burger<i className="bx bx-right-arrow-alt"></i>
                  </a>
                </div>
                <img src="./Burger-02.png" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide slider-container">
                <div className="home-txt">
                  <span>Vous avez le choix</span>
                  <h1>
                    Votre bonheur
                    <br />
                    Burger est ici !
                  </h1>
                  <a href="#" className="btn">
                    Voir burger<i className="bx bx-right-arrow-alt"></i>
                  </a>
                </div>
                <img src="./Burger-03.png" alt="" />
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
