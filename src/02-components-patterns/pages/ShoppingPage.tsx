import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from '../components';
import { products } from '../data/products';

import { useShoppingCart } from '../hooks/useShoppingCart';

import '../styles/custom-styles.css';

export const ShoppingPage = () => {
  const { onProductChange, ShoppingCart } = useShoppingCart();

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        {products.map((product) => (
          <ProductCard
            className='bg-dark text-white'
            key={product.id}
            product={product}
            onChange={onProductChange}
            value={ShoppingCart[product.id]?.count}
          >
            <ProductImage
              className='custom-image'
              style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}
            />
            <ProductTitle className='text-bold' />
            <ProductButtons className='custom-buttons' />
          </ProductCard>
        ))}
      </div>

      <div className='shopping-card'>
        {Object.entries(ShoppingCart).map(([key, product]) => (
          <ProductCard
            className='bg-dark text-white'
            product={product}
            style={{
              width: '100px',
            }}
            key={key}
            value={product.count}
            onChange={onProductChange}
          >
            <ProductImage
              className='custom-image'
              style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}
            />

            <ProductButtons
              className='custom-buttons'
              style={{ display: 'flex', justifyContent: 'center' }}
            />
          </ProductCard>
        ))}
      </div>

      <div>
        <code>{JSON.stringify(ShoppingCart, null, 5)}</code>
      </div>
    </div>
  );
};
