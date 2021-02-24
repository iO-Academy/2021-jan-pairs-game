let cardObjectsArray = [
    {
        frontOfCard : 'images/pinkHamster.jpg'
    },
    {
        frontOfCard : 'images/pinkHamster.jpg'
    },
    {
        frontOfCard : 'images/wheelHamster.jpg'
    },
    {
        frontOfCard : 'images/wheelHamster.jpg'
    },
    {
        frontOfCard : 'images/yellowHamster.jpg'
    },
    {
        frontOfCard : 'images/yellowHamster.jpg'
    },
    {
        frontOfCard : 'images/coralHamster.jpg'
    },
    {
        frontOfCard : 'images/coralHamster.jpg'
    },
    {
        frontOfCard : 'images/greenHamster.jpg'
    },
    {
        frontOfCard : 'images/greenHamster.jpg'
    },
    {
        frontOfCard : 'images/tealHamster.jpg'
    },
    {
        frontOfCard : 'images/tealHamster.jpg'
    },
    {
        frontOfCard : 'images/handHamster.jpg'
    },
    {
        frontOfCard : 'images/handHamster.jpg'
    },
    {
        frontOfCard : 'images/smokingHamster.jpg'
    },
    {
        frontOfCard : 'images/smokingHamster.jpg'
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
        + '<img class="sloth" src="images/cardBack.jpg">';
}

let slothClickArray = document.querySelectorAll('.sloth');
slothClickArray.forEach(sloth => {
    sloth.addEventListener('click', (e)=>{
        sloth.classList.add('hide');
    })
})
//matchedPairs is dependent on story-4
let matchedPairs = 0;
if (matchedPairs = 8) {
    // if matchedPairs = 8, display a modal with turns taken
}
// make the score-screen appear when the game is completed
document.querySelector("span").classList.add("score-screen")