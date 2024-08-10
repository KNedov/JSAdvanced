import {FashionRetailInventory} from '../fashionRetailManagement.js'
import { assert } from 'chai'
import{expect}from 'chai'



describe('FashionRetailInventory', () => {
  let inventory;

  beforeEach(() => {
    inventory = new FashionRetailInventory('Main', 'New York');
  });

  describe('addProduct', () => {
    it('should add a new product to the inventory', () => {
      const result = inventory.addProduct('T-shirt', 'M', 10, 20);
      assert.strictEqual(result, 'The product T-shirt, size M was successfully added to the inventory');
      assert.strictEqual(inventory.productStock.length, 1);
      assert.deepEqual(inventory.productStock[0], { productName: 'T-shirt', size: 'M', quantity: 10, price: 20 });
    });

    it('should update the quantity if the product already exists', () => {
      inventory.addProduct('T-shirt', 'M', 10, 20);
      const result = inventory.addProduct('T-shirt', 'M', 5, 20);
      assert.strictEqual(result, 'You added 5 more pieces of product T-shirt size M');
      assert.strictEqual(inventory.productStock.length, 1);
      assert.deepEqual(inventory.productStock[0], { productName: 'T-shirt', size: 'M', quantity: 15, price: 20 });
    });
  });

  describe('sendProduct', () => {
    it('should throw an error if the product does not exist', () => {
      assert.throws(() => inventory.sendProduct('T-shirt', 'M'), 'The product T-shirt, size M is not in the inventory');
    });

    it('should remove the product from the inventory if it exists', () => {
      inventory.addProduct('T-shirt', 'M', 10, 20);
      const result = inventory.sendProduct('T-shirt', 'M');
      assert.strictEqual(result, 'The product T-shirt, size M was successfully removed from the inventory');
      assert.strictEqual(inventory.productStock.length, 0);
    });
  });

  describe('findProductsBySize', () => {
    it('should return a message if no products match the specified size', () => {
      assert.strictEqual(inventory.findProductsBySize('M'), 'There are no products available in that size');
    });

    it('should return a list of products that match the specified size', () => {
      inventory.addProduct('T-shirt', 'M', 10, 20);
      inventory.addProduct('Jeans', 'M', 5, 50);
      const result = inventory.findProductsBySize('M');
      assert.strictEqual(result, 'T-shirt-10 pieces, Jeans-5 pieces');
    });
  });

  describe('listProducts', () => {
    it('should return a message if there are no products in stock', () => {
      assert.strictEqual(inventory.listProducts(), 'Main storehouse is empty');
    });

    it('should return a list of products sorted by name if there are products in stock', () => {
      inventory.addProduct('Jeans', 'M', 5, 50);
      inventory.addProduct('T-shirt', 'M', 10, 20);
      const result = inventory.listProducts();
      assert.strictEqual(result, 'Main storehouse in New York available products:\nJeans/Size:M/Quantity:5/Price:50$\nT-shirt/Size:M/Quantity:10/Price:20$');
    });
  });
});
