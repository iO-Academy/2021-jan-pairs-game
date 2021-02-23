

let cardObjectsArray = [
    {
        backOfCard : 'images/cardBack.jpg',
        frontOfCard : 'images/pinkHamster.jpg'
    },
    {
        backOfCard : 'images/cardBack.jpg',
        frontOfCard : 'images/pinkHamster.jpg'
    },
    {
        backOfCard : 'images/cardBack.jpg',
        frontOfCard : 'images/wheelHamster.jpg'
    },
    {
        backOfCard : 'images/cardBack.jpg',
        frontOfCard : 'images/wheelHamster.jpg'
    },
    {
        backOfCard : 'images/cardBack.jpg',
        frontOfCard : 'images/yellowHamster.jpg'
    },
    {
        backOfCard : 'images/cardBack.jpg',
        frontOfCard : 'images/yellowHamster.jpg'
    },
    {
        backOfCard : 'images/cardBack.jpg',
        frontOfCard : 'images/coralHamster.jpg'
    },
    {
        backOfCard : 'images/cardBack.jpg',
        frontOfCard : 'images/coralHamster.jpg'
    },
    {
        backOfCard : 'images/cardBack.jpg',
        frontOfCard : 'images/greenHamster.jpg'
    },
    {
        backOfCard : 'images/cardBack.jpg',
        frontOfCard : 'images/greenHamster.jpg'
    },
    {
        backOfCard : 'images/cardBack.jpg',
        frontOfCard : 'images/tealHamster.jpg'
    },
    {
        backOfCard : 'images/cardBack.jpg',
        frontOfCard : 'images/tealHamster.jpg'
    },
    {
        backOfCard : 'images/cardBack.jpg',
        frontOfCard : 'images/handHamster.jpg'
    },
    {
        backOfCard : 'images/cardBack.jpg',
        frontOfCard : 'images/handHamster.jpg'
    },
    {
        backOfCard : 'images/cardBack.jpg',
        frontOfCard : 'images/smokingHamster.jpg'
    },
    {
        backOfCard : 'images/cardBack.jpg',
        frontOfCard : 'images/smokingHamster.jpg'
    }
]


function shuffleCards(array) {
    let startingIndex = array.length;
    let temporaryIndex = 0;
    let randomIndex = 0;

    while (startingIndex !== 0) {
        randomIndex = Math.floor(Math.random() * startingIndex);
        startingIndex -= 1;
        temporaryIndex = array[startingIndex];
        array[startingIndex] = array[randomIndex];
        array[randomIndex] = temporaryIndex;
    }
    return array;
}

let shuffledArrayOfIndexes = shuffleCards(cardObjectsArray)

console.log(shuffledArrayOfIndexes[0].backOfCard)
console.log(shuffledArrayOfIndexes[0].frontOfCard)


let cardDivArray = document.querySelectorAll('.card')
// console.log(cardDivArray.innerHTML = '<img src="' + shuffledArrayOfIndexes[0].frontOfCard + '">')
//
//
// ///1 query to select array of all card class
// /// for each item in that array the inner html
// ///for
//
// for (let i = 0; i < shuffledArrayOfIndexes.length; i++) {
//     cardDivArray.innerHTML = '<img src="' + shuffledArrayOfIndexes[i].frontOfCard + '">'
//     console.log('running?')
// }

i = 0;
cardDivArray.forEach(card => {
    card.innerHTML = '<img class="hamster" src="' + shuffledArrayOfIndexes[i].frontOfCard + '">'
        + '<img class="sloth" src="' + shuffledArrayOfIndexes[i].backOfCard + '">';
    console.log(i)
    return i++;
})















