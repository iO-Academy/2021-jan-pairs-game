

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
