import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo1 from "/public/image_products/icons/heroseed.png";
import cart from "/image_products/icons/color_cart.png";
import store from "/image_products/icons/color_shop.png";
import login from "/image_products/icons/color_login1.png";
import logout from "/image_products/icons/color_logout1.png";
import account from "/image_products/icons/color_account.png";
import dark from "/image_products/icons/color_on.png";
import light from "/image_products/icons/color_off.png";
import moon from "/image_products/icons/color_mode_dark.png";
import sun from "/image_products/icons/color_mode_light.png";
import { clearToken } from "../../components/features/auth/authSlice";

function Header() {
  const isLogged = useSelector((state) => state.auth.isLogged);
  const user = useSelector((state) => state.auth.user);
  const [returnToHomepage, setReturnToHomepage] = useState(false);
  const [clickToHomepage, setClickToHomepage] = useState(false);
  const [clickToAccount, setClickToAccount] = useState(false);
  const [clickToLogOut, setClickToLogOut] = useState(false);
  const [toogleDarkMode, setToogleDarkMode] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClickReturnToHomepage = () => {
    setReturnToHomepage(true);
    navigate(`/`);
  };

  const handleClickToHomepage = () => {
    setClickToHomepage(true);
    navigate(`/location-store`);
  };

  const handleClickToAccount = () => {
    setClickToHomepage(true);
    navigate(`/login`);
  };

  const handleClickToLogOut = () => {
    setClickToLogOut(true);
    dispatch(clearToken());
  };

  const handleToogle = () => {
    setToogleDarkMode(!toogleDarkMode);
    console.log("heya");
  };

  return (
    <div
      className={`header-container ${
        toogleDarkMode ? "background-light" : "background-dark"
      }`}
    >
      <div className="logo-icon" onClick={handleClickReturnToHomepage}>
        <h1>HERO</h1>
        <img src={Logo1} alt="Logo HeroSeed" className="img-logo" />
        <h1>SEED</h1>
      </div>
      <div className= {`searchbar-container ${
        toogleDarkMode ? "border-light " : "border-dark"
      }`} >
        <input
          type="text"
          className="input-searchbar"
          id="input"
          defaultValue="Rechercher un produit..."
        />
        <div className="icon-search icon">
          <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" size="lg" />
        </div>
      </div>
      <div className="mode" onClick={handleToogle}>
        {!toogleDarkMode ? (
          <div>
            <img src={moon} alt="" className="icon" />
            <img src={dark} alt="" className="icon" />
          </div>
        ) : (
          <div>
            <img src={sun} alt="" className="icon" />
            <img src={light} alt="" className="icon" />
          </div>
        )}
      </div>
      <div className="position" onClick={handleClickToHomepage}>
        <img src={store} alt="" className="icon" />
        Find a store
      </div>
      {isLogged ? (
        <>
          <div className="account" onClick={handleClickToAccount}>
            <img src={account} alt="" className="icon" />
            <span>My Account</span>
          </div>
          <div className="account" onClick={handleClickToLogOut}>
            <img src={logout} alt="" className="icon" />
          </div>
        </>
      ) : (
        <div className="account" onClick={handleClickToAccount}>
          <img src={login} alt="" className="icon" />
        </div>
      )}
      <div className="cart">
        <img src={cart} alt="" className="icon" />
        My Cart
      </div>
    </div>
  );
}

export default Header;
