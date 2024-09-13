import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Banner from "../../assets/banner.png";
import Product from "../../components/Product/Product";

function Home() {
  const [navToCart, setNavToCart] = useState(false);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const handleButtonToCart = () => {
    setNavToCart(true);
    navigate("/cart");
  };

  const checkQuantity = (productQuantity) => {
    return productQuantity <= 12 ? "low-quantity" : "";
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/products`);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    console.log(products);
    fetchData();
  }, []);

  return (
    <div>
      <div className="banner">
        <img className="banner-img" src={Banner} alt="" />
        <div className="banner-text">
          <span>Gardening ?</span>
          <span>Muscles ?</span>
          <span>Become a Hero Seed !</span>
        </div>
      </div>
      <div className="products-container">
        {products.length > 0 && (
          <>
            {products.map((products) => (
              <>
              < Product
              id={products.id}
              category={products.category}
              name={products.name}
              soldBy={products.soldBy}
              price={products.price}
              quantity={products.quantity}
              description={products.description}
              img={products.img}
              checkQuantity={checkQuantity}
              />
              </>
            ))}
          </>
        )}
      </div>
      <div>
        <button onClick={handleButtonToCart}>Cart</button>
      </div>
    </div>
  );
}

export default Home;
