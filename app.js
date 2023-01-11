const cardArray=[{
    name:'blank',
    img:'Images/blank.png'
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
    img:'Images/ice-creame.png'
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
    name:'white',
    img:'Images/white.png'
},
{
    name:'blank',
    img:'Images/blank.png'
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
    img:'Images/ice-creame.png'
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
    name:'white',
    img:'Images/white.png'
}
]

cardArray.sort(() => 0.5 - Math.random());

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
createBoard();

function flipCard(){
    console.log(cardArray)
    const cardID = this.getAttribute('data-id');
    console.log(cardArray[cardID].name)
    console.log(cardID);

}