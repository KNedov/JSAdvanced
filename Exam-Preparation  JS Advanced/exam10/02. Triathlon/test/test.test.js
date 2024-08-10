import {Triathlon} from "../triathlonClass.js"
import { assert } from "chai";

describe('Triathlon', () => {
    let contest;

    beforeEach(() => {
        contest = new Triathlon('Dynamos');
    });

    describe('addParticipant', () => {
        it('should add a new participant', () => {
            assert.strictEqual(contest.addParticipant('Peter', 'male'), 'A new participant has been added - Peter');
            assert.strictEqual(contest.participants['Peter'], 'male');
        });

        it('should not add an existing participant', () => {
            contest.addParticipant('Peter', 'male');
            assert.strictEqual(contest.addParticipant('Peter', 'male'), 'Peter has already been added to the list');
        });
    });

    describe('completeness', () => {
        it('should throw an error if the participant does not exist', () => {
            assert.throws(() => contest.completeness('Peter', 100), 'Peter is not in the current participants list');
        });

        it('should throw an error if the participant is not well prepared', () => {
            contest.addParticipant('George', 'male');
            assert.throws(() => contest.completeness('George', 20), 'George is not well prepared and cannot finish any discipline');
        });

        it('should indicate how many disciplines a participant could complete', () => {
            contest.addParticipant('Sasha', 'female');
            assert.strictEqual(contest.completeness('Sasha', 70), 'Sasha could only complete 2 of the disciplines');
        });

        it('should add participant to finalists if they complete all disciplines', () => {
            contest.addParticipant('Peter', 'male');
            assert.strictEqual(contest.completeness('Peter', 100), 'Congratulations, Peter finished the whole competition');
            assert.deepEqual(contest.listOfFinalists, [{ participantName: 'Peter', participantGender: 'male' }]);
        });
    });

    describe('rewarding', () => {
        it('should return a message if the participant is not in the finalists list', () => {
            assert.strictEqual(contest.rewarding('Peter'), 'Peter is not in the current finalists list');
        });

        it('should reward a participant if they are in the finalists list', () => {
            contest.addParticipant('Peter', 'male');
            contest.completeness('Peter', 100);
            assert.strictEqual(contest.rewarding('Peter'), 'Peter was rewarded with a trophy for his performance');
        });
    });

    describe('showRecord', () => {
        it('should return a message if there are no finalists', () => {
            assert.strictEqual(contest.showRecord('all'), 'There are no finalists in this competition');
        });

        it('should return the first male finalist', () => {
            contest.addParticipant('Peter', 'male');
            contest.addParticipant('George', 'male');
            contest.completeness('Peter', 100);
            contest.completeness('George', 90);
            assert.strictEqual(contest.showRecord('male'), 'Peter is the first male that finished the Dynamos triathlon');
        });

        it('should return the first female finalist', () => {
            contest.addParticipant('Sasha', 'female');
            contest.addParticipant('Anna', 'female');
            contest.completeness('Sasha', 90);
            contest.completeness('Anna', 100);
            assert.strictEqual(contest.showRecord('female'), 'Sasha is the first female that finished the Dynamos triathlon');
        });

        it('should return a list of all finalists', () => {
            contest.addParticipant('Peter', 'male');
            contest.addParticipant('Sasha', 'female');
            contest.completeness('Peter', 100);
            contest.completeness('Sasha', 90);
            assert.strictEqual(contest.showRecord('all'), 'List of all Dynamos finalists:\nPeter\nSasha');
        });

        it('should return a message if there are no finalists of the given criteria', () => {
            contest.addParticipant('Peter', 'male');
            contest.completeness('Peter', 100);
            assert.strictEqual(contest.showRecord('female'), 'There are no female\'s that finished the competition');
        });
    });
});
