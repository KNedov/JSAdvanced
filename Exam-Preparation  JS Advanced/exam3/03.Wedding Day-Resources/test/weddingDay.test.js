import { assert } from 'chai';
import { weddingDay } from '../weddingDay.js';

describe('weddingDay', () => {
    describe('pickVenue', () => {
        it('should throw an error for invalid information', () => {
            assert.throws(() => weddingDay.pickVenue('150', 120, 'Varna'), 'Invalid Information!');
            assert.throws(() => weddingDay.pickVenue(150, '120', 'Varna'), 'Invalid Information!');
            assert.throws(() => weddingDay.pickVenue(150, 120, 123), 'Invalid Information!');
            assert.throws(() => weddingDay.pickVenue(150, 120, ''), 'Invalid Information!');
        });

        it('should return the correct message for venues in Varna that meet the requirements', () => {
            assert.strictEqual(weddingDay.pickVenue(150, 120, 'Varna'), 'This venue meets the requirements, with capacity of 150 guests and 120$ cover.');
            assert.strictEqual(weddingDay.pickVenue(200, 100, 'Varna'), 'This venue meets the requirements, with capacity of 200 guests and 100$ cover.');
        });

        it('should return the correct message for venues in Varna that do not meet the requirements', () => {
            assert.strictEqual(weddingDay.pickVenue(100, 120, 'Varna'), 'This venue does not meet your requirements!');
            assert.strictEqual(weddingDay.pickVenue(150, 130, 'Varna'), 'This venue does not meet your requirements!');
        });

        it('should throw an error for venues not in Varna', () => {
            assert.throws(() => weddingDay.pickVenue(150, 120, 'Sofia'), 'The location of this venue is not in the correct area!');
            assert.throws(() => weddingDay.pickVenue(150, 120, 'Burgas'), 'The location of this venue is not in the correct area!');
        });
    });

    describe('otherSpendings', () => {
        it('should throw an error for invalid information', () => {
            assert.throws(() => weddingDay.otherSpendings('flowers', ['pictures'], true), 'Invalid Information!');
            assert.throws(() => weddingDay.otherSpendings(['flowers'], 'pictures', true), 'Invalid Information!');
            assert.throws(() => weddingDay.otherSpendings(['flowers'], ['pictures'], 'yes'), 'Invalid Information!');
        });

        it('should calculate total spendings without discount', () => {
            assert.strictEqual(weddingDay.otherSpendings(['flowers'], ['pictures'], false), 'You spend 1200$ for wedding decoration and photography!');
            assert.strictEqual(weddingDay.otherSpendings(['flowers', 'Fabric drapes and curtains'], ['pictures', 'video'], false), 'You spend 2900$ for wedding decoration and photography!');
        });

        it('should calculate total spendings with discount', () => {
            assert.strictEqual(weddingDay.otherSpendings(['flowers'], ['pictures'], true), 'You spend 1020$ for wedding decoration and photography with 15% discount!');
            assert.strictEqual(weddingDay.otherSpendings(['flowers', 'Fabric drapes and curtains'], ['pictures', 'video'], true), 'You spend 2465$ for wedding decoration and photography with 15% discount!');
        });
    });

    describe('tableDistribution', () => {
        it('should throw an error for invalid information', () => {
            assert.throws(() => weddingDay.tableDistribution('100', 10), 'Invalid Information!');
            assert.throws(() => weddingDay.tableDistribution(100, '10'), 'Invalid Information!');
            assert.throws(() => weddingDay.tableDistribution(-100, 10), 'Invalid Information!');
            assert.throws(() => weddingDay.tableDistribution(100, 0), 'Invalid Information!');
        });

        it('should return correct table distribution for guests less than 6 per table', () => {
            assert.strictEqual(weddingDay.tableDistribution(10, 2), 'There is only 5 people on every table, you can join some tables.');
            assert.strictEqual(weddingDay.tableDistribution(12, 3), 'There is only 4 people on every table, you can join some tables.');
        });

        it('should return correct table distribution for guests 6 or more per table', () => {
            assert.strictEqual(weddingDay.tableDistribution(60, 10), 'You have 10 tables with 6 guests on table.');
            assert.strictEqual(weddingDay.tableDistribution(100, 10), 'You have 10 tables with 10 guests on table.');
        });
    });
});
