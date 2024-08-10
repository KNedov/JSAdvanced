import {onlineStore}from '../onlineStore.js'
import { assert } from 'chai'

describe('onlineStore', () => {
    describe('isProductAvailable', () => {
        it('should throw an error for invalid input', () => {
           
            assert.throws(() => onlineStore.isProductAvailable(NaN, 2) , 'Invalid input');
            assert.throws(() => onlineStore.isProductAvailable(undefined, 2), 'Invalid input');
            assert.throws(() => onlineStore.isProductAvailable(2, 1), 'Invalid input');
            assert.throws(() => onlineStore.isProductAvailable(2.5, 1), 'Invalid input');
            assert.throws(() => onlineStore.isProductAvailable([2], 1), 'Invalid input');
            assert.throws(() => onlineStore.isProductAvailable([], 1), 'Invalid input');
            assert.throws(() => onlineStore.isProductAvailable({}, 1), 'Invalid input');
            assert.throws(() => onlineStore.isProductAvailable(true, 1), 'Invalid input');
            

        });

        it('should return a message If the stockQuantity is less than or equal to 0', () => {
            let product='string'
            let stockQuantity=-1
            assert.strictEqual(onlineStore.isProductAvailable(product,-1), `Sorry, ${product} is currently out of stock.`);
            assert.strictEqual(onlineStore.isProductAvailable(product,0), `Sorry, ${product} is currently out of stock.`);
        });

        it('should return a message If the stockQuantity is greater than 0', () => {
             let product='apple'
            assert.strictEqual(onlineStore.isProductAvailable(product, 2), `Great! ${product} is available for purchase.`);
        });
    });

    describe('canAffordProduct', () => {
        it('should throw an error for invalid input types', () => {
            assert.throws(() => onlineStore.canAffordProduct('not an number', 10), 'Invalid input');
            assert.throws(() => onlineStore.canAffordProduct(true,10), 'Invalid input');
            assert.throws(() => onlineStore.canAffordProduct(undefined,10), 'Invalid input');
           
            assert.throws(() => onlineStore.canAffordProduct([],10), 'Invalid input');
            assert.throws(() => onlineStore.canAffordProduct({},10), 'Invalid input');
           
            assert.throws(() => onlineStore.canAffordProduct(10,undefined), 'Invalid input');
            assert.throws(() => onlineStore.canAffordProduct(10,true), 'Invalid input');
            assert.throws(() => onlineStore.canAffordProduct(10,'not an number'), 'Invalid input');
            assert.throws(() => onlineStore.canAffordProduct(10,[]), 'Invalid input');
            assert.throws(() => onlineStore.canAffordProduct(10,{}), 'Invalid input');
        });

        it('should return a message If the result is less than 0 ', () => {
           
            assert.strictEqual(onlineStore.canAffordProduct(20, 10), "You don't have sufficient funds to buy this product.");
        });

        it('If the result is greater than or equal to 0', () => {
            
            assert.strictEqual(onlineStore.canAffordProduct(10, 20), `Product purchased. Your remaining balance is $10.`);
        });
    });

    describe('getRecommendedProducts', () => {
        it('should throw an error for invalid input types', () => {
            assert.throws(() => onlineStore.getRecommendedProducts({}, 'category'), 'Invalid input');
            assert.throws(() => onlineStore.getRecommendedProducts('', 'category'), 'Invalid input');
            assert.throws(() => onlineStore.getRecommendedProducts(NaN, 'category'), 'Invalid input');
            assert.throws(() => onlineStore.getRecommendedProducts(true, 'category'), 'Invalid input');
            assert.throws(() => onlineStore.getRecommendedProducts(2, 'category'), 'Invalid input');
            assert.throws(() => onlineStore.getRecommendedProducts(-2, 'category'), 'Invalid input');
            assert.throws(() => onlineStore.getRecommendedProducts([], 2), 'Invalid input');
            assert.throws(() => onlineStore.getRecommendedProducts([], NaN), 'Invalid input');
            assert.throws(() => onlineStore.getRecommendedProducts([], undefined), 'Invalid input');
            assert.throws(() => onlineStore.getRecommendedProducts([], {}), 'Invalid input');
            assert.throws(() => onlineStore.getRecommendedProducts([], []), 'Invalid input');
        });

        it('should return If there are recommended products in the specified category', () => {
            assert.strictEqual(onlineStore.getRecommendedProducts([{name:'Camera',category:"Photography"}], 'Photography'), "Recommended products in the Photography category: Camera")
        });
        it('should return If there are no recommended products in the specified category', () => {
            assert.strictEqual(onlineStore.getRecommendedProducts([{name:'Camera',category:"Photography"}], 'swiming'), "Sorry, we currently have no recommended products in the swiming category.")
        });
    });
});
