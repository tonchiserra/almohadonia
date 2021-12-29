import Product from './Product';

const Products = ({ products }) => {
  return(
    <section>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </section>
  );
}

export default Products;