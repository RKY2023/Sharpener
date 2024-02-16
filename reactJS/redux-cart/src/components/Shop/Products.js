import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    title: 'TEst',
    price: 10,
    description: 'est desc11',
  },
  {
    id: 'p2',
    title: 'TEst 2',
    price: 20,
    description: 'est desc22',
  },
  {
    id: 'p3',
    title: 'TEst 3 ',
    price: 30,
    description: 'est desc 33',
  },
]

const Products = (props) => {

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map(item => (
          <ProductItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
