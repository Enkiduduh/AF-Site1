import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Product({
  id,
  category,
  name,
  soldBy,
  price,
  quantity,
  description,
  img,
  checkQuantity,
}) {
  return (
    <div className="product-content" key={id}>
      <div className="product-infos">
        <div className="product-img">
          <img src={`/image_products/${img}`} alt={name} />
        </div>
        <span className="product-name">{name}</span>
        <span className="product-category">{category}</span>
        <span className={`product-quantity ${checkQuantity(quantity)}`}>
          Available: {quantity}
        </span>
        <div className="reviews">
          <FontAwesomeIcon icon="fa-solid fa-star" />
          <FontAwesomeIcon icon="fa-solid fa-star" />
          <FontAwesomeIcon icon="fa-solid fa-star" />
          <FontAwesomeIcon icon="fa-solid fa-star" />
          <FontAwesomeIcon icon="fa-solid fa-star" />
          <span>(45)</span>{" "}
        </div>
        <span className="product-price">{price}€</span>
      </div>
      <div className="product-info2">
        <button className="button">ADD TO CART</button>
      </div>
    </div>
  );
}

Product.propTypes = {
  id: PropTypes.number,
  category: PropTypes.string,
  name: PropTypes.string,
  soldBy: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  description: PropTypes.string,
  img: PropTypes.string,
  checkQuantity: PropTypes.func,
};

export default Product;
