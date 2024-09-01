function Product({
  productName,
  productCategory,
  productPrice,
  productQuantity,
  productDescription,
}) {
  return (
    <>
      <div className="product-container">
        <div className="product-content">
          <span>{productName}</span>
          <span>{productCategory}</span>
          <span>{productPrice}</span>
          <span>{productQuantity}</span>
        </div>
        <div className="product-img"></div>
      </div>
      <span>{productDescription}</span>
    </>
  );
}

export default Product;
