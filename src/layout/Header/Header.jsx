import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../../assets/HeroSeedLogo2.png"

function Header() {

const [returnToHomepage, setReturnToHomepage] = useState(false)
const navigate = useNavigate()

const handleClickReturnToHomepage = () => {
  setReturnToHomepage(true)
  navigate("/")
}


  return (
    <div className="header-container">
      <div className="logo" onClick={handleClickReturnToHomepage}>
        <img src={Logo} alt="" />
      </div>
      <div className="searchbar-container">
        <input
          type="text"
          className="input-searchbar"
          id="input"
          value="Rechercher un produit..."
        />
        <div className="icon-search">
          <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" size="lg" />
        </div>
      </div>
      <div className="mode">
        <FontAwesomeIcon icon="fa-solid fa-moon" size="xl" />
        Dark
      </div>
      <div className="position">
        <FontAwesomeIcon icon="fa-solid fa-location-dot" size="xl" />
        Find a store
      </div>
      <div className="account">
        <FontAwesomeIcon icon="fa-solid fa-user" size="xl" />
        <span>My Account</span>
      </div>
      <div className="cart">
        <FontAwesomeIcon icon="fa-solid fa-cart-shopping" size="xl" />
        My Cart
      </div>
    </div>
  );
}

export default Header;
