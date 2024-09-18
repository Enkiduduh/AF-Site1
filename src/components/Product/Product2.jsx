import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

function Product2({
  productsName,
  productsCategory,
  productsPrice,
  productsDescription,
  productsQuantity,
  productsImg,
  productSoldBy,
  checkQuantity,
}) {
  return (
    <div className="product-Test">
      {/* <div className="product-up">
        <FontAwesomeIcon icon="fa-solid fa-chevron-left" />
        <div className="return">Back to all products</div>
        <div className="icon"></div>
      </div> */}
      <div className="product-down">
        <div className="product-img">
          <img src={`/image_products/${productsImg}`} alt="" />
          <div className="product-gallery">
            <FontAwesomeIcon icon="fa-solid fa-chevron-left" />
            2 / 4
            <FontAwesomeIcon icon="fa-solid fa-chevron-right" />
          </div>
        </div>
        <div className="product-infos">
          <div className="name">{productsName}</div>
          <div className="category">
            {productsCategory} | Sold {productSoldBy}
          </div>
          <div className="price">{productsPrice}€</div>
          <div className="description">{productsDescription}</div>
          <div className={`product-info ${checkQuantity(productsQuantity)}`}> Available: {productsQuantity}</div>
          <div className="buttons">
            <div className="button">ADD TO CART</div>
            <div className="button">WISHLIST</div>
          </div>
        </div>
      </div>
    </div>
  );
}
Product2.propTypes = {
  productsName: PropTypes.string,
  productsCategory: PropTypes.string,
  productsPrice: PropTypes.number,
  productsDescription: PropTypes.string,
  productsQuantity: PropTypes.number,
  productsImg: PropTypes.string,
  productSoldBy: PropTypes.string,
  checkQuantity: PropTypes.func,
};

export default Product2;
