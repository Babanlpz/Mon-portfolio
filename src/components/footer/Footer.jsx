import "./Footer.scss";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-txt">
          <p>Copyright &copy; 2024 by Baban Dev | Tous droits réservés</p>
        </div>

        <div className="footer-iconTop">
          <a href="#home" className="btn-home">
            <i className="bx bx-up-arrow-alt"></i>
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
