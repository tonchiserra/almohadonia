const Product = ({ product }) => {

  return(
    <article>
      <img src={product.image.url} alt={product.description} />
      <div>
        <h5>{product.name}</h5>
        <p>{product.price.formatted_with_symbol}</p>
      </div>
    </article>
  );
}

export default Product;