import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/HeroSeedLogo2.png";
import LogoSupplier from "../../assets/logo2.png";
function Footer() {
  const [navToHomePage, setNavToHomePage] = useState(false);
  const [navToAccount, setNavToAccount] = useState(false);
  const [navToCart, setNavToCart] = useState(false);
  const [navToFaq, setNavToFaq] = useState(false);
  const navigate = useNavigate();

  const handleButtonToHomePage = () => {
    setNavToHomePage(true);
    navigate("/");
  };

  const handleButtonToAccount = () => {
    setNavToAccount(true);
    navigate("/account");
  };

  const handleButtonToCart = () => {
    setNavToCart(true);
    navigate("/cart");
  };

  const handleButtonToFaq = () => {
    setNavToFaq(true);
    navigate("/faq");
  };

  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-upper">
          <div className="footer-upper-address">
            <div className="footer-upper-title">ADDRESS</div>
            <div>5 rue du Jardin Vert</div>
            <div>14650 Le Beau Jardin</div>
          </div>
          <div className="footer-upper-contact">
            <div className="footer-upper-title">CONTACT</div>
            <div>06 00 00 00 00</div>
            <div>heroseed@contact.fr</div>
          </div>
          <div className="footer-upper-schedules">
            <div className="footer-upper-title">SCHEDULES</div>
            <div>Du lundi au vendredi</div>
            <div>de 9h30 à 12h et de 13h30 à 18h</div>
          </div>
          <div className="footer-upper-form">
            <div className="footer-upper-title">FORM</div>
            <div>Contact</div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-logo">
            <img src={Logo} alt="" />
          </div>
          <div className="footer-bottom-navigation">
            <div className="footer-bottom-title">NAVIGATION</div>
            <div
              className="footer-bottom-link"
              onClick={handleButtonToHomePage}
            >
              Homepage
            </div>
            <div className="footer-bottom-link" onClick={handleButtonToAccount}>
              Account
            </div>
            <div className="footer-bottom-link" onClick={handleButtonToCart}>
              Find a store
            </div>
            <div className="footer-bottom-link" onClick={handleButtonToFaq}>
              F.A.Q
            </div>
          </div>
          <div className="footer-bottom-products">
            <div className="footer-bottom-title">OUR PRODUCTS</div>
            <div className="footer-bottom-link">Seeds</div>
            <div className="footer-bottom-link">Plants</div>
            <div className="footer-bottom-link">Tools</div>
            <div className="footer-bottom-link">Pots</div>
          </div>
          <div className="footer-bottom-supplier">
            <div className="footer-bottom-title">SUPPLIER</div>
            <img className="img-supplier" src={LogoSupplier} alt="" />
          </div>
          <div className="footer-bottom-network">
            <div className="footer-bottom-title">NETWORKS</div>
            <div className="footer-bottom-link">Facebook</div>
            <div className="footer-bottom-link">X (ex-Twitter)</div>
            <div className="footer-bottom-link">LinkedIn</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
