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

function shuffleCards(array) {
    let startingIndex = array.length;
    let temporaryIndex = 0;
    let randomIndex = 0;

    while (startingIndex !== 0) {
        //This random index is created by multiplying the array length (16 to start) by decimal then flooring to integer
        //15 will be the highest it can go and 0 the lowest, which corresponds to the indexes
        randomIndex = Math.floor(Math.random() * startingIndex);
        startingIndex--;
        temporaryIndex = array[startingIndex];
        array[startingIndex] = array[randomIndex];
        array[randomIndex] = temporaryIndex;
    }
    return array;
}

let shuffledCardsArray = shuffleCards(cardObjectsArray);
let cardDivArray = document.querySelectorAll('.card');

for (let i = 0; i < cardDivArray.length; i++) {
    cardDivArray[i].innerHTML = '<img class="hamster" src="' + shuffledCardsArray[i].frontOfCard + '">'
        + '<img class="sloth" data-pair ="' + shuffledCardsArray[i].pairID + '" src= "images/cardBack.jpg">';

}

let clickCounter = 0
let turnCounter = 0
let firstClickPair = "start"
let secondClickPair = "start"
let slothClickArray = document.querySelectorAll('.sloth');
let matchedPairs = 0

function addClickListener(onClick) {
    slothClickArray.forEach(sloth => {
            sloth.addEventListener('click', onClick )
        })
}

function onClick() {
    this.classList.add('hide');
    this.classList.add('selected');
    if (clickCounter  === 0) {
        firstClickPair = this.dataset.pair
        clickCounter++
    } else {
        clickCounter--
        turnCounter++
        secondClickPair = this.dataset.pair
        evaluateCards(onClick,slothClickArray)
    }
}

    function flipCardsBack() {
        let selectedCards = document.querySelectorAll('.selected');
        selectedCards.forEach(card => {
            card.classList.remove('hide')
            card.classList.remove('selected')
            addClickListener(onClick)
        })
    }

    function evaluateCards(onClick, slothClickArray) {
        if (firstClickPair !== secondClickPair) {
            slothClickArray.forEach(sloth => {
                sloth.removeEventListener('click', onClick)
            })
            setTimeout(flipCardsBack, 2000);
        } else {
            slothClickArray.forEach(sloth => {
                sloth.classList.remove('selected')
            })
            matchedPairs++
        }
    }

addClickListener(onClick)
