import "./About.scss";

function About() {
  return (
    <>
      <section className="about" id="about">
        <img src="./img-about.png" alt="" />
        <div className="about-txt">
          <span>Présentation</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            praesentium ab iste, repellat maiores sapiente labore dolores illum
            facilis dolore asperiores quidem quasi maxime ea, ducimus vel qui
            sit eos. Autem, id est. Vitae, quibusdam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
            vitae!
          </p>
          <a href="#" className="btn">
            En savoir plus
            <i className="bx bx-right-arrow-alt"></i>
          </a>
        </div>
      </section>
    </>
  );
}

export default About;
