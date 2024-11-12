export default function sortingTheListOfCharacters(list) {
    const sortedCharacters = list.sort((a, b) => b.health - a.health);
    return sortedCharacters;
}