import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Banner from "/image_products/bg_banners/bannerHeroSeed.png";
import Product from "../../components/Product/Product";
import Logo1 from "/public/image_products/icons/heroseed.png";
import Banners from "../../components/Banner/Banner";
import {
  soilsIntroFr,
  seedsIntroFr,
  plantsIntroFr,
  toolsIntroFr,
  potsIntroFr,
} from "../../data/categoriesFR";
function Home() {
  const [navToCart, setNavToCart] = useState(false);
  const [products, setProducts] = useState([]);
  const [isBannerGrown, setIsBannerGrown] = useState({
    soils: false,
    seeds: false,
    plants: false,
    tools: false,
    pots: false,
  });
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

  // Handles the click to modify
  const handleClickToOpenBanner = (field) => {
    setIsBannerGrown((prevState) => ({
      ...prevState,
      [field]: true,
    }));
  };

  // Handles the click to cancel modification
  const handleClickToCloseBanner = (field) => {
    setIsBannerGrown((prevState) => ({
      ...prevState,
      [field]: false,
    }));
  };

  return (
    <div>
      <div
        className="banner"
        style={{
          backgroundImage: `url('/image_products/bg_banners/bannerHeroSeed.png')`,
        }}
      >
        <div className="banner-text">
          <h1>HERO</h1>
          <img src={Logo1} alt="Logo HeroSeed" className="img-logo" />
          <h1>SEED</h1>
        </div>
      </div>

      <div className="products-categories">
        <Banners
          text="Seeds"
          imgName="seeds"
          textIntro={seedsIntroFr}
          funcClickToOpen={handleClickToOpenBanner}
          funcClickToClose={handleClickToCloseBanner}
          isTrue={isBannerGrown.seeds}
          field="seeds"
        />
        <Banners
          text="Plants"
          imgName="plants"
          textIntro={plantsIntroFr}
          funcClickToOpen={handleClickToOpenBanner}
          funcClickToClose={handleClickToCloseBanner}
          isTrue={isBannerGrown.plants}
          field={"plants"}
        />
        <Banners
          text="Soil"
          imgName="soils"
          textIntro={soilsIntroFr}
          funcClickToOpen={handleClickToOpenBanner}
          funcClickToClose={handleClickToCloseBanner}
          isTrue={isBannerGrown.soils}
          field="soils"
        />
        <Banners
          text="Tools"
          imgName="tools"
          textIntro={toolsIntroFr}
          funcClickToOpen={handleClickToOpenBanner}
          funcClickToClose={handleClickToCloseBanner}
          isTrue={isBannerGrown.tools}
          field="tools"
        />
        <Banners
          text="Pots"
          imgName="pots"
          textIntro={potsIntroFr}
          funcClickToOpen={handleClickToOpenBanner}
          funcClickToClose={handleClickToCloseBanner}
          isTrue={isBannerGrown.pots}
          field="pots"
        />
      </div>

      <div className="products-container">
        {products.length > 0 && (
          <>
            {products.map((products) => (
              <>
                <Product
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
