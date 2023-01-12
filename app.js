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

const cardsChoosen=[];
const cardsChoosenIDs=[];

cardArray.sort(() => 0.5 - Math.random());
console.log(cardArray)
const grid = document.querySelector('#grid');

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
    if(cardsChoosen[0] == cardsChoosen[1]){
        
        alert("You found a match 😃😃");
        cards[cardsChoosenIDs[0]].setAttribute('src','Images/white.png');
        cards[cardsChoosenIDs[1]].setAttribute('src','Images/white.png');
        cards[cardsChoosenIDs[0]].removeAttribute('click', flipCard);
        cards[cardsChoosenIDs[1]].removeAttribute('click', flipCard);
    }
    else{
        alert('Try again 🥲🥲')
    }
}


function flipCard(){
    const cardID = this.getAttribute('data-id');
    cardsChoosen.push(cardArray[cardID].name);
    cardsChoosenIDs.push(cardID);
    this.setAttribute('src',cardArray[cardID].img)
    if(cardsChoosen.length == 2){
        setTimeout(checkMatch(),700)
    }

}

createBoard();