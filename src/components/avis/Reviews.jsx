import "./Reviews.scss";

function Reviews() {
  return (
    <>
      <section className="reviews" id="reviews">
        <h2 className="section-title">
          Ils ont étaient satisfait <span>avis clients</span>
        </h2>
        <div className="categorie-line"></div>
        <div className="avis-content">
          <div className="avis-box">
            <i className="bx bxs-quote-alt-left"></i>
            <div className="stars">
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              illum quisquam totam quibusdam, quidem reprehenderit odit officia
              ea, saepe nesciunt nulla eligendi voluptas, unde numquam nemo
              laboriosam cupiditate inventore repellendus.
            </p>
            <div className="avis-profil">
              <img src="./avatar-1.svg" alt="Photo de profil client" />
              <h6>Justine Zoé</h6>
            </div>
          </div>
          <div className="avis-box">
            <i className="bx bxs-quote-alt-left"></i>
            <div className="stars">
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              illum quisquam totam quibusdam, quidem reprehenderit odit officia
              ea, saepe nesciunt nulla eligendi voluptas, unde numquam nemo
              laboriosam cupiditate inventore repellendus.
            </p>
            <div className="avis-profil">
              <img src="./avatar-2.svg" alt="Photo de profil client" />
              <h6>Lea Pourrel</h6>
            </div>
          </div>
          <div className="avis-box">
            <i className="bx bxs-quote-alt-left"></i>
            <div className="stars">
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              illum quisquam totam quibusdam, quidem reprehenderit odit officia
              ea, saepe nesciunt nulla eligendi voluptas, unde numquam nemo
              laboriosam cupiditate inventore repellendus.
            </p>
            <div className="avis-profil">
              <img src="./avatar-3.svg" alt="Photo de profil client" />
              <h6>Margerite Plata</h6>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Reviews;
