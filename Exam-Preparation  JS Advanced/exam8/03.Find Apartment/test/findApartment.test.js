import {findNewApartment}from "../findApartment.js"
import { assert } from "chai"

describe('findNewApartment', () => {
    describe('isGoodLocation', () => {
        it('should throw an error for invalid input types', () => {
            assert.throws(() => findNewApartment.isGoodLocation(123, true), 'Invalid input!');
            assert.throws(() => findNewApartment.isGoodLocation('Sofia', 'true'), 'Invalid input!');
        });

        it('should return not suitable for invalid city', () => {
            assert.strictEqual(findNewApartment.isGoodLocation('Burgas', true), 'This location is not suitable for you.');
        });

        it('should return suitable message if near public transportation', () => {
            assert.strictEqual(findNewApartment.isGoodLocation('Sofia', true), 'You can go on home tour!');
        });

        it('should return no public transport message if not near public transportation', () => {
            assert.strictEqual(findNewApartment.isGoodLocation('Sofia', false), 'There is no public transport in area.');
        });
    });

    describe('isLargeEnough', () => {
        it('should throw an error for invalid input types', () => {
            assert.throws(() => findNewApartment.isLargeEnough('not an array', 50), 'Invalid input!');
            assert.throws(() => findNewApartment.isLargeEnough([60, 70], '50'), 'Invalid input!');
            assert.throws(() => findNewApartment.isLargeEnough([], 50), 'Invalid input!');
        });

        it('should return an empty string if no apartments are large enough', () => {
            assert.strictEqual(findNewApartment.isLargeEnough([30, 40], 50), '');
        });

        it('should return a list of apartments that are large enough', () => {
            assert.strictEqual(findNewApartment.isLargeEnough([50, 60, 70], 50), '50, 60, 70');
            assert.strictEqual(findNewApartment.isLargeEnough([30, 50, 60], 50), '50, 60');
        });
    });

    describe('isItAffordable', () => {
        it('should throw an error for invalid input types', () => {
            assert.throws(() => findNewApartment.isItAffordable('100', 1000), 'Invalid input!');
            assert.throws(() => findNewApartment.isItAffordable(100, '1000'), 'Invalid input!');
            assert.throws(() => findNewApartment.isItAffordable(-100, 1000), 'Invalid input!');
            assert.throws(() => findNewApartment.isItAffordable(100, -1000), 'Invalid input!');
        });

        it('should return not enough money message if price exceeds budget', () => {
            assert.strictEqual(findNewApartment.isItAffordable(1500, 1000), "You don't have enough money for this house!");
        });

        it('should return can afford message if budget is sufficient', () => {
            assert.strictEqual(findNewApartment.isItAffordable(1000, 1500), 'You can afford this home!');
            assert.strictEqual(findNewApartment.isItAffordable(1000, 1000), 'You can afford this home!');
        });
    });
});
