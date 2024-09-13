import PropTypes from "prop-types";

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
        <span className="product-name">{name}</span>
        <span className="product-info">Category: {category}</span>
        <span className="product-info">Price: {price}€</span>
        <span className="product-info">Sold {soldBy}</span>

        <span className={`product-info ${checkQuantity(quantity)}`}>
          Available: {quantity}
        </span>
        <span className="product-description">{description}</span>
      </div>
      <div>
        <div className="product-img">
          <img src={`/image_products/${img}`} alt={name} />
        </div>
        <div>
          <button>Add to cart</button>
        </div>
        <div>reviews : 4/5</div>
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
