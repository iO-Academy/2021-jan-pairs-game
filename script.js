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
]

function shuffleCards(array) {
    let startingIndex = array.length;
    let temporaryIndex = 0;
    let randomIndex = 0;

    while (startingIndex !== 0) {
        //This random index is created by multiplying the
        randomIndex = Math.floor(Math.random() * startingIndex);
        temporaryIndex = array[startingIndex];
        array[startingIndex] = array[randomIndex];
        array[randomIndex] = temporaryIndex;
        startingIndex--;
    }
    return array;
}

let shuffledCardsArray = shuffleCards(cardObjectsArray)
let cardDivArray = document.querySelectorAll('.card')
i = 0;
cardDivArray.forEach(card => {
    card.innerHTML = '<img class="hamster" src="' + shuffledCardsArray[i].frontOfCard + '">'
    console.log(i)
    i++;
})

let slothClickArray = document.querySelectorAll('.sloth');
slothClickArray.forEach(sloth => {
    sloth.addEventListener('click', (e)=>{
        sloth.classList.add('hide')
    })
})
