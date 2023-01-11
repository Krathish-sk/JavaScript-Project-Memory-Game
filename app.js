const cardArray=[{
    name:'',
    img:''
},
{
    name:'',
    img:''
},
{
    name:'',
    img:''
}
]

cardArrray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector('#grid');

function createBoard{
    for(let i=1;i<=10;i++){
        const card=document.createElement('img');
        card.setAttribute('src','blank.png');
        card.setAttribute('data-id',i);
        gridDisplay.appendChild(card);
    }
}

cretaeBorad();