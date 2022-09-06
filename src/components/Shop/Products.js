import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  { id: "p1", price: 6, title: "My First Book", description: "the first book in this list" },
  { id: "p2", price: 23, title: "My Second Book", description: "the second book in this list" },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => {
          return <ProductItem key={product.id} {...product} />;
        })}
      </ul>
    </section>
  );
};

export default Products;
