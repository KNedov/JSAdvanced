//          88/100
import {planYourTrip}from "../planYourTrip.js"
import{assert} from 'chai'

describe('planYourTrip', () => {
    describe('choosingDestination', () => {
        it('should throw an error for invalid year', () => {
            assert.throws(() => planYourTrip.choosingDestination('Ski Resort', 'Winter', 2023), 'Invalid Year!');
            assert.throws(() => planYourTrip.choosingDestination('Ski Resort', 'Winter', 2023), 'Invalid Year!');
           
        });

        it('should return correct message for Ski Resort during Winter', () => {
            assert.strictEqual(planYourTrip.choosingDestination('Ski Resort', 'Winter', 2024), 'Great choice! The Winter is the perfect time to visit the Ski Resort.');
        });

        it('should return correct message for Ski Resort not during Winter', () => {
            assert.strictEqual(planYourTrip.choosingDestination('Ski Resort', 'Summer', 2024), 'Consider visiting during the Winter for the best experience at the Ski Resort.');
        });

        it('should throw an error for destinations other than Ski Resort', () => {
            assert.throws(() => planYourTrip.choosingDestination('Beach', 'Summer', 2024), 'This destination is not what you are looking for.');
        });
    });

    describe('exploreOptions', () => {
        it('should throw an error for invalid input', () => {
            assert.throws(() => planYourTrip.exploreOptions('skiing, hiking', 1), 'Invalid Information!');
            assert.throws(() => planYourTrip.exploreOptions(['skiing', 'hiking'], -1), 'Invalid Information!');
            assert.throws(() => planYourTrip.exploreOptions(['skiing', 'hiking'], 2), 'Invalid Information!');
            assert.throws(() => planYourTrip.exploreOptions(['skiing', 'hiking'], 100), 'Invalid Information!');
            assert.throws(() => planYourTrip.exploreOptions(['skiing', 'hiking'], 'one'), 'Invalid Information!');
            assert.throws(() => planYourTrip.exploreOptions(['skiing', 'hiking'], 1.5), 'Invalid Information!');
        });

        it('should return correct activities excluding the specified index', () => {
            assert.strictEqual(planYourTrip.exploreOptions(['skiing', 'hiking', 'swimming'], 1), 'skiing, swimming');
            assert.strictEqual(planYourTrip.exploreOptions(['skiing', 'hiking', 'swimming'], 0), 'hiking, swimming');
        });
    });

    describe('estimateExpenses', () => {
        it('should throw an error for invalid input', () => {
            assert.throws(() => planYourTrip.estimateExpenses('100', 1.5), 'Invalid Information!');
            assert.throws(() => planYourTrip.estimateExpenses(100, '1.5'), 'Invalid Information!');
            assert.throws(() => planYourTrip.estimateExpenses(-100, 1.5), 'Invalid Information!');
            assert.throws(() => planYourTrip.estimateExpenses(100, -1.5), 'Invalid Information!');
            assert.throws(() => planYourTrip.estimateExpenses(0, 1.5), 'Invalid Information!');
            assert.throws(() => planYourTrip.estimateExpenses(100, 0), 'Invalid Information!');
        });

        it('should return budget-friendly message for costs <= 500', () => {
            assert.strictEqual(planYourTrip.estimateExpenses(100, 4), 'The trip is budget-friendly, estimated cost is $400.00.');
            assert.strictEqual(planYourTrip.estimateExpenses(200, 2.5), 'The trip is budget-friendly, estimated cost is $500.00.');
        });

        it('should return plan accordingly message for costs > 500', () => {
            assert.strictEqual(planYourTrip.estimateExpenses(200, 3), 'The estimated cost for the trip is $600.00, plan accordingly.');
            assert.strictEqual(planYourTrip.estimateExpenses(300, 2), 'The estimated cost for the trip is $600.00, plan accordingly.');
        });
    });
});
