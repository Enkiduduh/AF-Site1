import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Banner from "../../assets/banner.png"

function Home() {
  const [navToCart, setNavToCart] = useState(false);
  const navigate = useNavigate();

  const handleButtonToCart = () => {
    setNavToCart(true);
    navigate("/cart");
  };

  return (
    <div>
      <nav className="nav-container">
        <div className="nav-button">Seeds</div>
        <div className="nav-button">Plants</div>
        <div className="nav-button">Tools</div>
        <div className="nav-button">Pots</div>
      </nav>
      <div className="banner">
        <img className="banner-img" src={ Banner } alt="" />
      </div>
      
      <div>
        <button onClick={handleButtonToCart}>Cart</button>
      </div>
    </div>
  );
}

export default Home;
