let popUp = document.getElementById('popUp')
let popRemove = document.getElementById('removePop');

function openPopUp(){
    popUp.classList.add("open-popUp");
}

function closePop(){
    popUp.classList.remove("open-popUp")
}

popRemove.addEventListener('click', closePop);






const cardArray=[
{
    name:'cheeseburger',
    img:'IMages/cheeseburger.png'
},
{
    name:'fries',
    img:'Images/fries.png'
},
{
    name:'hotdog',
    img:'Images/hotdog.png'
},
{
    name:'ice-creame',
    img:'Images/ice-cream.png'
},
{
    name:'milkshake',
    img:'Images/milkshake.png'
},
{
    name:'pizza',
    img:'Images/pizza.png'
},
{
    name:'cheeseburger',
    img:'IMages/cheeseburger.png'
},
{
    name:'fries',
    img:'Images/fries.png'
},
{
    name:'hotdog',
    img:'Images/hotdog.png'
},
{
    name:'ice-creame',
    img:'Images/ice-cream.png'
},
{
    name:'milkshake',
    img:'Images/milkshake.png'
},
{
    name:'pizza',
    img:'Images/pizza.png'
}
]
cardArray.sort(() => 0.5 - Math.random());
const grid = document.querySelector('#grid');
const result = document.querySelector('#result');

let cardsChoosen=[];
let cardsChoosenIDs=[];
const cardsWon =[];


console.log(cardArray)


  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', 'Images/blank.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }


function checkMatch(){
    const cards = document.querySelectorAll('#grid img')
    const optionOneId = cardsChoosenIDs[0];
    const optionTwoId = cardsChoosenIDs[1];
    console.log(optionOneId);
    console.log(optionTwoId);
    if(optionOneId == optionTwoId){
        cards[optionOneId].setAttribute('src','Images/blank.png');
        cards[optionTwoId].setAttribute('src','Images/blank.png');
        alert('Oops, you clicked the same image 🤭🤭!!');
    }
    else if(cardsChoosen[0] == cardsChoosen[1]){
        
        alert("You found a match 😃😃");
        cards[optionOneId].setAttribute('src','Images/tick (Custom).png');
        cards[optionTwoId].setAttribute('src','Images/tick (Custom).png');
        cards[optionOneId].removeAttribute('click', flipCard);
        cards[optionTwoId].removeAttribute('click', flipCard);
        cardsWon.push(cardsChoosen);
    }
    else
    {
        cards[optionOneId].setAttribute('src','Images/blank.png');
        cards[optionTwoId].setAttribute('src','Images/blank.png');
        alert('Sorry, Try again 🥲🥲')
    }
    cardsChoosen=[];
    cardsChoosenIDs=[];
    result.textContent= cardsWon.length
    
    if(cardsWon.length == cardArray.length/2){
        result.textContent = 'Congratulations you found them all!'
        openPopUp();
    }
}


function flipCard(){
    let cardID = this.getAttribute('data-id');
    cardsChoosen.push(cardArray[cardID].name);
    cardsChoosenIDs.push(cardID);
    this.setAttribute('src',cardArray[cardID].img)
    if(cardsChoosen.length == 2){
        setTimeout(checkMatch(),500)
    }

}
createBoard();


