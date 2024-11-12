import sortingTheListOfCharacters from '../js/app.js';

const characters = [
    {
        name: 'мечник', health: 10
    },
    {
        name: 'маг', health: 100
    },
    {
        name: 'лучник', health: 80
    },
];

const charactersSorted = [
    {
        name: 'маг', health: 100
    },
    {
        name: 'лучник', health: 80
    },
    {
        name: 'мечник', health: 10
    },
];

describe('function check sortingTheListOfCharacters', () => {
    test('checking sorting by health', () => {
        expect(sortingTheListOfCharacters(characters)).toEqual(charactersSorted);
    });
});