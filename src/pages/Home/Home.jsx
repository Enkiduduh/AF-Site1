import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Banner from "../../assets/banner.png";
import Product from "../../components/Product/Product";
import img from "/public/image_products/tomato_seeds.png";
function Home() {
  const [navToCart, setNavToCart] = useState(false);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const handleButtonToCart = () => {
    setNavToCart(true);
    navigate("/cart");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/products.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
    console.log(products);
  }, []);

  return (
    <div>
      <nav className="nav-container">
        <div className="nav-button">Seeds</div>
        <div className="nav-button">Plants</div>
        <div className="nav-button">Tools</div>
        <div className="nav-button">Pots</div>
      </nav>
      <div className="banner">
        <img className="banner-img" src={Banner} alt="" />
        <div className="banner-text">
          <span>Gardening ?</span>
          <span>Muscles ?</span>
          <span>Become a Hero Seed !</span>
        </div>
      </div>
      <div className="products-container">
        {products && (
          <>
            {products.map((product) => (
              <>
                <div className="product-content" key={product.id}>
                  <div className="product-infos">
                    <span>{product.name}</span>
                    <span>{product.category}</span>
                    <span>{product.price}</span>
                    <span>{product.quantity}</span>
                    <span className="product-description">
                      {product.description}
                    </span>
                  </div>
                  <div>
                    <div className="product-img">
                      <img
                        src={`/image_products/${product.img}`}
                        alt={product.name}
                      />
                    </div>
                    <div>
                      <button>Add to cart</button>
                    </div>
                    <div>reviews : 4/5</div>
                  </div>
                </div>
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
