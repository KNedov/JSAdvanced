import {petAdoptionAgency}from '../petAdoptionAgency.js'
import { assert } from 'chai'



describe('petAdoptionAgency', () => {
    describe('isPetAvailable', () => {
        it('should throw an error for invalid input types', () => {
            assert.throws(() => petAdoptionAgency.isPetAvailable(123, 1, true), 'Invalid input');
            assert.throws(() => petAdoptionAgency.isPetAvailable('Dog', 'one', true), 'Invalid input');
            assert.throws(() => petAdoptionAgency.isPetAvailable('Dog', 1, 'yes'), 'Invalid input');
        });

        it('should return a message if no pets are available', () => {
            assert.strictEqual(petAdoptionAgency.isPetAvailable('Dog', 0, true), 'Sorry, there are no Dog(s) available for adoption at the agency.');
        });

        it('should return a message if vaccinated pets are available', () => {
            assert.strictEqual(petAdoptionAgency.isPetAvailable('Dog', 3, true), 'Great! We have 3 vaccinated Dog(s) available for adoption at the agency.');
        });

        it('should return a message if unvaccinated pets are available', () => {
            assert.strictEqual(petAdoptionAgency.isPetAvailable('Dog', 3, false), 'Great! We have 3 Dog(s) available for adoption, but they need vaccination.');
        });
    });

    describe('getRecommendedPets', () => {
        it('should throw an error for invalid input types', () => {
            assert.throws(() => petAdoptionAgency.getRecommendedPets('not an array', 'friendly'), 'Invalid input');
            assert.throws(() => petAdoptionAgency.getRecommendedPets([{ name: 'Buddy', traits: 'friendly' }], 123), 'Invalid input');
        });

        it('should return a message if no pets match the desired traits', () => {
            const petList = [
                { name: 'Buddy', traits: 'friendly' },
                { name: 'Max', traits: 'playful' },
            ];
            assert.strictEqual(petAdoptionAgency.getRecommendedPets(petList, 'quiet'), 'Sorry, we currently have no recommended pets with the desired traits: quiet.');
        });

        it('should return a list of recommended pets with the desired traits', () => {
            const petList = [
                { name: 'Buddy', traits: 'friendly' },
                { name: 'Max', traits: 'friendly' },
                { name: 'Bella', traits: 'playful' },
            ];
            assert.strictEqual(petAdoptionAgency.getRecommendedPets(petList, 'friendly'), 'Recommended pets with the desired traits (friendly): Buddy, Max');
        });
    });

    describe('adoptPet', () => {
        it('should throw an error for invalid input types', () => {
            assert.throws(() => petAdoptionAgency.adoptPet(123, 'John Doe'), 'Invalid input');
            assert.throws(() => petAdoptionAgency.adoptPet('Dog', 123), 'Invalid input');
        });

        it('should return a congratulations message for a valid adoption', () => {
            assert.strictEqual(petAdoptionAgency.adoptPet('Dog', 'John Doe'), 'Congratulations, John Doe! You have adopted Dog from the agency. Enjoy your time with your new furry friend!');
        });
    });
});
