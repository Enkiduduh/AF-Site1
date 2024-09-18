import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProductData } from "../../components/features/product/productSlice";
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
  const productsData = useSelector((state) => state.product.products);
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
  const dispatch = useDispatch();

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
        // Vérification de la structure des données reçues
        console.log("Fetched data:", data);
        // Dispatch des produits uniquement si la structure est correcte
        if (data.products && Array.isArray(data.products)) {
          dispatch(setProductData(data.products));
        } else {
          console.error("Invalid data structure:", data);
        }
        console.log(products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [dispatch]);

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
        {Array.isArray(productsData) && productsData.length > 0 ? (
          productsData.map((product) => (
            <Product
              key={product.id}
              id={product.id}
              category={product.category}
              name={product.name}
              soldBy={product.soldBy}
              price={product.price}
              quantity={product.quantity}
              description={product.description}
              img={product.img}
            />
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
      <div>
        <button onClick={handleButtonToCart}>Cart</button>
      </div>
    </div>
  );
}

export default Home;



<div className="nav-products-container">
{products
  .filter((product) => product.category === "seeds") // Filtrer avant le map
  .map((product) => (
    <div key={product.id}>{product.name}</div> // Affichage des produits filtrés
  ))}
</div>
