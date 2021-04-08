let cardObjectsArray = [
    {
        frontOfCard: 'images/pinkHamster.jpg',
        pairId: 1
    },
    {
        frontOfCard: 'images/pinkHamster.jpg',
        pairId: 1
    },
    {
        frontOfCard: 'images/wheelHamster.jpg',
        pairId: 2
    },
    {
        frontOfCard: 'images/wheelHamster.jpg',
        pairId: 2
    },
    {
        frontOfCard: 'images/yellowHamster.jpg',
        pairId: 3
    },
    {
        frontOfCard: 'images/yellowHamster.jpg',
        pairId: 3
    },
    {
        frontOfCard: 'images/coralHamster.jpg',
        pairId: 4
    },
    {
        frontOfCard: 'images/coralHamster.jpg',
        pairId: 4
    },
    {
        frontOfCard: 'images/greenHamster.jpg',
        pairId: 5
    },
    {
        frontOfCard: 'images/greenHamster.jpg',
        pairId: 5
    },
    {
        frontOfCard: 'images/tealHamster.jpg',
        pairId: 6
    },
    {
        frontOfCard: 'images/tealHamster.jpg',
        pairId: 6
    },
    {
        frontOfCard: 'images/handHamster.jpg',
        pairId: 7
    },
    {
        frontOfCard: 'images/handHamster.jpg',
        pairId: 7
    },
    {
        frontOfCard: 'images/smokingHamster.jpg',
        pairId: 8
    },
    {
        frontOfCard: 'images/smokingHamster.jpg',
        pairId: 8
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
        + '<img class="sloth" data-pair ="' + shuffledCardsArray[i].pairId + '" src= "images/cardBack.jpg">';
}

addClickListener(onClick)
