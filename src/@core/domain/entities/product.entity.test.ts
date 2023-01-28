import { describe, it, expect } from 'vitest'
import { Product } from './';

describe('Product Entity', () => {
  
  it('should create a product', () => {
    const product = Product.create({
      id: '1',
      name: 'Product 1',
      description: 'Product 1 description',
      price: 10
    });
    expect(product).toBeInstanceOf(Product);
  })

  it('should return a product id', () => {
    const product = Product.create({
      id: '1',
      name: 'Product 1',
      description: 'Product 1 description',
      price: 10
    });
    expect(product.getId()).toBe('1');
  })
});