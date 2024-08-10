import {recipeSelection} from "../recipeSelection.js"
import {assert} from 'chai'
describe('recipeSelection', () => {
    describe('isTypeSuitable', () => {
        it('should throw an error for invalid input types', () => {
            assert.throws(() => recipeSelection.isTypeSuitable(123, 'Vegetarian'), 'Invalid input');
            assert.throws(() => recipeSelection.isTypeSuitable('Meat', 123), 'Invalid input');
        });

        it('should return not suitable for vegetarians if type is Meat', () => {
            assert.strictEqual(recipeSelection.isTypeSuitable('Meat', 'Vegetarian'), 'This recipe is not suitable for vegetarians');
        });

        it('should return not suitable for vegans if type is Meat or Dairy', () => {
            assert.strictEqual(recipeSelection.isTypeSuitable('Meat', 'Vegan'), 'This recipe is not suitable for vegans');
            assert.strictEqual(recipeSelection.isTypeSuitable('Dairy', 'Vegan'), 'This recipe is not suitable for vegans');
        });

        it('should return suitable for other dietary restrictions', () => {
            assert.strictEqual(recipeSelection.isTypeSuitable('Vegetable', 'Vegetarian'), 'This recipe is suitable for your dietary restriction');
            assert.strictEqual(recipeSelection.isTypeSuitable('Vegetable', 'Vegan'), 'This recipe is suitable for your dietary restriction');
            assert.strictEqual(recipeSelection.isTypeSuitable('Fruit', 'None'), 'This recipe is suitable for your dietary restriction');
        });
    });

    describe('isItAffordable', () => {
        it('should throw an error for invalid input types', () => {
            assert.throws(() => recipeSelection.isItAffordable('10', 20), 'Invalid input');
            assert.throws(() => recipeSelection.isItAffordable(10, '20'), 'Invalid input');
        });

        it('should return a message if the budget is not enough', () => {
            assert.strictEqual(recipeSelection.isItAffordable(30, 20), "You don't have enough budget to afford this recipe");
        });

        it('should return a message with remaining budget if affordable', () => {
            assert.strictEqual(recipeSelection.isItAffordable(10, 20), 'Recipe ingredients bought. You have 10$ left');
            assert.strictEqual(recipeSelection.isItAffordable(20, 20), 'Recipe ingredients bought. You have 0$ left');
        });
    });

    describe('getRecipesByCategory', () => {
        it('should throw an error for invalid input types', () => {
            assert.throws(() => recipeSelection.getRecipesByCategory('not an array', 'Dessert'), 'Invalid input');
            assert.throws(() => recipeSelection.getRecipesByCategory([{ title: 'Cake', category: 'Dessert' }], 123), 'Invalid input');
        });

        it('should return an empty array if no recipes match the category', () => {
            const recipes = [
                { title: 'Cake', category: 'Dessert' },
                { title: 'Salad', category: 'Appetizer' },
            ];
            assert.deepEqual(recipeSelection.getRecipesByCategory(recipes, 'Main Course'), []);
        });

        it('should return a list of recipe titles that match the category', () => {
            const recipes = [
                { title: 'Cake', category: 'Dessert' },
                { title: 'Ice Cream', category: 'Dessert' },
                { title: 'Salad', category: 'Appetizer' },
            ];
            assert.deepEqual(recipeSelection.getRecipesByCategory(recipes, 'Dessert'), ['Cake', 'Ice Cream']);
        });
    });
});
