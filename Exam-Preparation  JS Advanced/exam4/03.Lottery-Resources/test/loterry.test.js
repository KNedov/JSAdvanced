import {lottery}from '../Lottery.js'
import { assert } from 'chai'

describe('lottery', () => {
    describe('buyLotteryTicket', () => {
        it('should throw an error if buy is false', () => {
            assert.throws(() => lottery.buyLotteryTicket(10, 2, false), 'Unable to buy lottery ticket!');
        });

        it('should throw an error for invalid input', () => {
            assert.throws(() => lottery.buyLotteryTicket(-10, 2, true), 'Invalid input!');
            assert.throws(() => lottery.buyLotteryTicket(10, 0, true), 'Invalid input!');
            assert.throws(() => lottery.buyLotteryTicket('10', 2, true), 'Invalid input!');
            assert.throws(() => lottery.buyLotteryTicket(10, '2', true), 'Invalid input!');
            assert.throws(() => lottery.buyLotteryTicket(10, 2, 'yes'), 'Invalid input!');
        });

        it('should return the correct message for valid input', () => {
            assert.strictEqual(lottery.buyLotteryTicket(10, 2, true), 'You bought 2 tickets for 20$.');
            assert.strictEqual(lottery.buyLotteryTicket(5, 3, true), 'You bought 3 tickets for 15$.');
        });
    });

    describe('checkTicket', () => {
        it('should throw an error for invalid input', () => {
            assert.throws(() => lottery.checkTicket('123456', [1, 2, 3, 4, 5, 6]), 'Invalid input!');
            assert.throws(() => lottery.checkTicket([1, 2, 3, 4, 5], [1, 2, 3, 4, 5, 6]), 'Invalid input!');
            assert.throws(() => lottery.checkTicket([1, 2, 3, 4, 5, 6], '123456'), 'Invalid input!');
            assert.throws(() => lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5]), 'Invalid input!');
        });

        it('should return correct message for winning numbers', () => {
            assert.strictEqual(lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 7, 8, 9]), 'Congratulations you win, check your reward!');
            assert.strictEqual(lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6]), 'You win the JACKPOT!!!');
        });

        it('should return undefined for less than 3 winning numbers', () => {
            assert.isUndefined(lottery.checkTicket([1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12]));
        });
    });

    describe('secondChance', () => {
        it('should throw an error for invalid input', () => {
            assert.throws(() => lottery.secondChance('123', [123, 456]), 'Invalid input!');
            assert.throws(() => lottery.secondChance(123, '123456'), 'Invalid input!');
        });

        it('should return the correct message for winning second chance', () => {
            assert.strictEqual(lottery.secondChance(123, [123, 456]), 'You win our second chance prize!');
        });

        it('should return the correct message for losing second chance', () => {
            assert.strictEqual(lottery.secondChance(789, [123, 456]), "Sorry, your ticket didn't win!");
        });
    });
});

