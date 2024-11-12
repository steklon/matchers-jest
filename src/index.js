import './styles/style.css';
import sortingTheListOfCharacters from './js/app.js';

const heroesList = [
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

console.log(sortingTheListOfCharacters(heroesList));