import {movieTheater} from "../03. Movie Theater _Resources.js";
import {assert} from "chai";


describe('movieTheater', () => {
    describe('ageRestrictions', () => {
        it('should return correct message for each rating', () => {
            assert.strictEqual(movieTheater.ageRestrictions('G'), 'All ages admitted to watch the movie');
            assert.strictEqual(movieTheater.ageRestrictions('PG'), 'Parental guidance suggested! Some material may not be suitable for pre-teenagers');
            assert.strictEqual(movieTheater.ageRestrictions('R'), 'Restricted! Under 17 requires accompanying parent or adult guardian');
            assert.strictEqual(movieTheater.ageRestrictions('NC-17'), 'No one under 17 admitted to watch the movie');
            assert.strictEqual(movieTheater.ageRestrictions('XYZ'), 'There are no age restrictions for this movie');
        });
    });

    describe('moneySpent', () => {
        it('should throw an error for invalid input types', () => {
            assert.throws(() => movieTheater.moneySpent(10, [], 'not an array'), 'Invalid input');
            assert.throws(() => movieTheater.moneySpent(10, [], undefined), 'Invalid input');
            assert.throws(() => movieTheater.moneySpent(10, [], 10), 'Invalid input');
            assert.throws(() => movieTheater.moneySpent(10, [], NaN), 'Invalid input');
            assert.throws(() => movieTheater.moneySpent(10, [], true), 'Invalid input');
            assert.throws(() => movieTheater.moneySpent(10, [], {}), 'Invalid input');
            assert.throws(() => movieTheater.moneySpent(10, [10], 2.5), 'Invalid input');
            assert.throws(() => movieTheater.moneySpent(2, true, []), 'Invalid input');
            assert.throws(() => movieTheater.moneySpent(2, 2, []), 'Invalid input');
            assert.throws(() => movieTheater.moneySpent(2, undefined, []), 'Invalid input');
            assert.throws(() => movieTheater.moneySpent(2, 2.5, []), 'Invalid input');
            assert.throws(() => movieTheater.moneySpent(2, {}, []), 'Invalid input');
            assert.throws(() => movieTheater.moneySpent(10, 'not an array', []), 'Invalid input');
            assert.throws(() => movieTheater.moneySpent(10, {}, []), 'Invalid input');
            assert.throws(() => movieTheater.moneySpent(10, [] [10]), 'Invalid input');
            assert.throws(() => movieTheater.moneySpent('10', [10], []), 'Invalid input');
            assert.throws(() => movieTheater.moneySpent('10', [], []), 'Invalid input');
            assert.throws(() => movieTheater.moneySpent('10', ['a'], []), 'Invalid input');
            assert.throws(() => movieTheater.moneySpent('10', -10, []), 'Invalid input');
            assert.throws(() => movieTheater.moneySpent(undefined, [], []), 'Invalid input');
            assert.throws(() => movieTheater.moneySpent(true, [], []), 'Invalid input');
            assert.throws(() => movieTheater.moneySpent({}, [], []), 'Invalid input');
        });

        it('should calculate total cost without discount', () => {
            assert.strictEqual(movieTheater.moneySpent(2, ['Nachos'], ['Soda']), 'The total cost for the purchase is 38.50');
        });

        it('should calculate total cost with discount', () => {
            assert.strictEqual(movieTheater.moneySpent(4, ['Nachos', 'Popcorn'], ['Soda', 'Water']), 'The total cost for the purchase with applied discount is 59.60');
        });
    });

    describe('reservation', () => {
        it('should throw an error for invalid input types', () => {
            assert.throws(() => movieTheater.reservation('not an array', 2), 'Invalid input');
            assert.throws(() => movieTheater.reservation({}, 2), 'Invalid input');
            assert.throws(() => movieTheater.reservation(undefined, 2), 'Invalid input');
            assert.throws(() => movieTheater.reservation(2, 2), 'Invalid input');
            assert.throws(() => movieTheater.reservation(true, 2), 'Invalid input');
            assert.throws(() => movieTheater.reservation([], 'not a number'), 'Invalid input');
            assert.throws(() => movieTheater.reservation([], ['not a number']), 'Invalid input');
            assert.throws(() => movieTheater.reservation([], ['']), 'Invalid input');
            assert.throws(() => movieTheater.reservation([], true), 'Invalid input');
            assert.throws(() => movieTheater.reservation([], undefined), 'Invalid input');
        });

        it('should return the row number with sufficient seats', () => {
            const rows = [
                { rowNumber: 1, freeSeats: 5 },
                { rowNumber: 2, freeSeats: 2 },
                { rowNumber: 3, freeSeats: 6 },
            ];
            assert.strictEqual(movieTheater.reservation(rows, 5), 3);
        });

        it('should return -Infinity if no row has sufficient seats', () => {
            const rows = [
                { rowNumber: 1, freeSeats: 3 },
                { rowNumber: 2, freeSeats: 2 },
            ];
            assert.strictEqual(movieTheater.reservation(rows, 5), -Infinity);
        });
    });
});
