import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Home() {
  const [navToCart, setNavToCart] = useState(false);
  const navigate = useNavigate();

  const handleButtonToCart = () => {
    setNavToCart(true);
    navigate("/cart");
  };

  return (
    <div>
      <div>
        <button onClick={handleButtonToCart}>Cart</button>
      </div>
    </div>
  );
}

export default Home;
