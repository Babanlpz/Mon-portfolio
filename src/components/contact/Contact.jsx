import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import "./Contact.scss";

function Contact() {
  const form = useRef();
  const [sent, setSent] = useState(false); // État pour gérer l'affichage du message de confirmation
  const [error, setError] = useState(false); // État pour gérer l'affichage du message d'erreur

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ca832as", "template_envz6z9", form.current, {
        publicKey: "UEjbGjZTOsC7gUOAZ",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setSent(true); // Définit l'état à true pour afficher le message de confirmation
          setError(false); // Réinitialise l'état de l'erreur à false
          setTimeout(() => {
            setSent(false); // Remet l'état à false après quelques secondes
          }, 3000); // Changez la valeur 3000 pour ajuster la durée du message
        },
        (error) => {
          console.log("FAILED...", error.text);
          setError(true); // Définit l'état à true pour afficher le message d'erreur
        }
      );

    // Réinitialisation des valeurs des champs du formulaire
    form.current.reset();
  };

  return (
    <>
      <section className="contact" id="contact">
        <h2 className="section-title">
          Démarrons un projet ensemble, n’hésitez pas à me contacter
          <span>contact</span>
        </h2>
        <div className="categorie-line"></div>
        <form action="#" ref={form} onSubmit={sendEmail}>
          <div className="input-box">
            <input type="text" required placeholder="Nom" name="nom" />
            <input
              type="email"
              required
              placeholder="test@gmail.com"
              name="email"
            />
          </div>
          <div className="input-box">
            <textarea
              className="contact-message"
              cols="30"
              rows="10"
              placeholder="Entrer un message ici..."
              name="message"
            ></textarea>
            <input type="submit" value="Envoyer" className="contact-btn" />
          </div>
        </form>
      </section>

      {/* Affichage du message de confirmation */}
      {sent && (
        <div className="popup success">
          <i className="bx bx-check-circle"></i> Message envoyé avec succès!
        </div>
      )}

      {/* Affichage du message d'erreur */}
      {error && (
        <div className="popup error">
          <i className="bx bx-error-circle "></i> Erreur lors de l'envoi du
          message.
        </div>
      )}
    </>
  );
}

export default Contact;
