import propTypes from "prop-types";

function NavButton({
  onMouseEnter,
  onMouseLeave,
  categoryText,
  category,
  productsData,
  isCondition,
  field,
}) {
  const functionFilter = (objects) => {
    return objects.filter((object) => object.category === `${categoryText}`);
  };

  return (
    <div
      className="nav-button"
      onMouseEnter={() => onMouseEnter(field)}
      onMouseLeave={() => onMouseLeave(field)}
      >
      <img src={`/image_products/icons/color_${category}.png`} alt="Seeds icon" className="img-icon" />
      <div className="text">{categoryText}</div>
      <div className={`nav-dropdown ${isCondition ? "displayOn" : "displayOff"} `}>
        <div className="nav-products-container">
          {productsData &&
            functionFilter(productsData).map((product) => (
              <div key={product.id} className="product">{product.name}</div> // Affichage des produits filtrés
            ))}
        </div>
      </div>
    </div>
  );
}
NavButton.propTypes = {
  onMouseEnter: propTypes.func.isRequired,
  onMouseLeave: propTypes.func.isRequired,
  categoryText: propTypes.string.isRequired,
  category: propTypes.string.isRequired,
  productsData: propTypes.array.isRequired,
  isCondition: propTypes.bool.isRequired,
  field: propTypes.string.isRequired,
};

export default NavButton;
