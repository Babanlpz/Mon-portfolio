import "./Contact.scss";

function Contact() {
  return (
    <>
      <section className="contact" id="contact">
        <h2 className="section-title">
          Démarrons un projet ensemble, n’hésitez pas à me contacter
          <span>contact</span>
        </h2>
        <div className="categorie-line"></div>
        <form action="#">
          <div className="input-box">
            <input type="text" placeholder="Nom" />
            <input type="text" placeholder="Email" />
          </div>
          <div className="input-box">
            <textarea
              className="contact-message"
              cols="30"
              rows="10"
              placeholder="Message"
            ></textarea>
            <input type="submit" value="Envoyer" className="contact-btn" />
          </div>
        </form>
      </section>
    </>
  );
}

export default Contact;
