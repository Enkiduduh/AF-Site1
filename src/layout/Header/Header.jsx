import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../../assets/HeroSeedLogo2.png";
import { clearToken } from "../../components/features/auth/authSlice";

function Header() {
  const isLogged = useSelector((state) => state.auth.isLogged);
  const user = useSelector((state) => state.auth.user);
  const [returnToHomepage, setReturnToHomepage] = useState(false);
  const [clickToHomepage, setClickToHomepage] = useState(false);
  const [clickToAccount, setClickToAccount] = useState(false);
  const [clickToLogOut, setClickToLogOut] = useState(false);
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
    dispatch(clearToken())
  }

  return (
    <div className="header-container">
      <div className="logo icon" onClick={handleClickReturnToHomepage}>
        <img src={Logo} alt="" />
      </div>
      <div className="searchbar-container">
        <input
          type="text"
          className="input-searchbar"
          id="input"
          value="Rechercher un produit..."
        />
        <div className="icon-search icon">
          <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" size="lg" />
        </div>
      </div>
      <div className="mode icon">
        <FontAwesomeIcon icon="fa-solid fa-moon" size="xl" />
        Dark
      </div>
      <div className="position icon" onClick={handleClickToHomepage}>
        <FontAwesomeIcon icon="fa-solid fa-location-dot" size="xl" />
        Find a store
      </div>
      { isLogged ? (
        <>
        <div className="account icon" onClick={handleClickToAccount}>
          <FontAwesomeIcon icon="fa-solid fa-user" size="xl" />
          <span>My Account</span>
        </div>
        <div className="account icon" onClick={handleClickToLogOut}>
        <FontAwesomeIcon icon="fa-solid fa-arrow-right-from-bracket" size="xl" />
          <span>Log Out</span>
        </div>
        </>
      ) : (
        <div className="account icon" onClick={handleClickToAccount}>
          <FontAwesomeIcon icon="fa-solid fa-right-to-bracket" size="xl" />
          <span>Log In</span>
        </div>
      )}
      <div className="cart icon">
        <FontAwesomeIcon icon="fa-solid fa-cart-shopping" size="xl" />
        My Cart
      </div>
    </div>
  );
}

export default Header;
