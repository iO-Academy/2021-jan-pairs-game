let cardObjectsArray = [
    {
        frontOfCard : 'images/pinkHamster.jpg',
        pairID: 'pairOne'
    },
    {
        frontOfCard : 'images/pinkHamster.jpg',
        pairID: 'pairOne'
    },
    {
        frontOfCard : 'images/wheelHamster.jpg',
        pairID: 'pairTwo'
    },
    {
        frontOfCard : 'images/wheelHamster.jpg',
        pairID: 'pairTwo'
    },
    {
        frontOfCard : 'images/yellowHamster.jpg',
        pairID: 'pairThree'
    },
    {
        frontOfCard : 'images/yellowHamster.jpg',
        pairID: 'pairThree'
    },
    {
        frontOfCard : 'images/coralHamster.jpg',
        pairID: 'pairFour'
    },
    {
        frontOfCard : 'images/coralHamster.jpg',
        pairID: 'pairFour'
    },
    {
        frontOfCard : 'images/greenHamster.jpg',
        pairID: 'pairFive'
    },
    {
        frontOfCard : 'images/greenHamster.jpg',
        pairID: 'pairFive'
    },
    {
        frontOfCard : 'images/tealHamster.jpg',
        pairID: 'pairSix'
    },
    {
        frontOfCard : 'images/tealHamster.jpg',
        pairID: 'pairSix'
    },
    {
        frontOfCard : 'images/handHamster.jpg',
        pairID: 'pairSeven'
    },
    {
        frontOfCard : 'images/handHamster.jpg',
        pairID: 'pairSeven'
    },
    {
        frontOfCard : 'images/smokingHamster.jpg',
        pairID: 'pairEight'
    },
    {
        frontOfCard : 'images/smokingHamster.jpg',
        pairID: 'pairEight'
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

for(let i = 0; i < cardDivArray.length; i++) {
    cardDivArray[i].innerHTML = '<img class="hamster" src="' + shuffledCardsArray[i].frontOfCard + '">'
        + '<img class="sloth" data-pair ="'+ shuffledCardsArray[i].pairID + '" src= "images/cardBack.jpg">';

}




function clickFunction () {
    let firstClick = 0
    let secondClick = 1
    let tally = 0
    let turnCounter = 0
    let slothClickArray = document.querySelectorAll('.sloth');
    slothClickArray.forEach(sloth => {
    sloth.addEventListener('click', (e)=> {
        sloth.classList.add('hide')
        if(tally % 2 === 0)
        {firstClick=sloth.dataset.pair
        console.log("first click: " + firstClick)
        tally++ }
        else {
            turnCounter++
            tally++
            secondClick=sloth.dataset.pair
            console.log("second click: " + secondClick)
            if(firstClick !== secondClick) {
                console.log(firstClick, secondClick)
            }
        }

    })


    }

)}

clickFunction ()