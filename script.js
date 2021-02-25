let cardObjectsArray = [
    {
        frontOfCard: 'images/pinkHamster.jpg',
        pairID: 'pairOne'
    },
    {
        frontOfCard: 'images/pinkHamster.jpg',
        pairID: 'pairOne'
    },
    {
        frontOfCard: 'images/wheelHamster.jpg',
        pairID: 'pairTwo'
    },
    {
        frontOfCard: 'images/wheelHamster.jpg',
        pairID: 'pairTwo'
    },
    {
        frontOfCard: 'images/yellowHamster.jpg',
        pairID: 'pairThree'
    },
    {
        frontOfCard: 'images/yellowHamster.jpg',
        pairID: 'pairThree'
    },
    {
        frontOfCard: 'images/coralHamster.jpg',
        pairID: 'pairFour'
    },
    {
        frontOfCard: 'images/coralHamster.jpg',
        pairID: 'pairFour'
    },
    {
        frontOfCard: 'images/greenHamster.jpg',
        pairID: 'pairFive'
    },
    {
        frontOfCard: 'images/greenHamster.jpg',
        pairID: 'pairFive'
    },
    {
        frontOfCard: 'images/tealHamster.jpg',
        pairID: 'pairSix'
    },
    {
        frontOfCard: 'images/tealHamster.jpg',
        pairID: 'pairSix'
    },
    {
        frontOfCard: 'images/handHamster.jpg',
        pairID: 'pairSeven'
    },
    {
        frontOfCard: 'images/handHamster.jpg',
        pairID: 'pairSeven'
    },
    {
        frontOfCard: 'images/smokingHamster.jpg',
        pairID: 'pairEight'
    },
    {
        frontOfCard: 'images/smokingHamster.jpg',
        pairID: 'pairEight'
    }
];

let clickCounter = 0
let turnCounter = 0
let firstClickPair = "start"
let secondClickPair = "start"
let matchedPairs = 0
let shuffledCardsArray = shuffleCards(cardObjectsArray);
let cardDivArray = document.querySelectorAll('.card');

for (let i = 0; i < cardDivArray.length; i++) {
    cardDivArray[i].innerHTML = '<img class="hamster" src="' + shuffledCardsArray[i].frontOfCard + '">'
        + '<img class="sloth" data-pair ="' + shuffledCardsArray[i].pairID + '" src= "images/cardBack.jpg">';
}

addClickListener(onClick)