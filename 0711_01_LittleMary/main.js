let brickData = [
    {
        id: '1', // box-id
        img: 'pic/bread.png',
        fraction: 10,
        target: function () { // target 踩到做事情
            return 'Bread'
        }
    },
    {
        id: '2',
        img: 'pic/burger.png',
        fraction: 10,
        target: function () {
            return 'Burger'
        }
    },
    {
        id: '3',
        img: 'pic/cookie.png',
        fraction: 10,
        target: function () {
            return 'Cookie'
        }
    },
    {
        id: '4',
        img: 'pic/cupnoddle.png',
        fraction: 10,
        target: function () {
            return 'Cup noddle'
        }
    },
    {
        id: '5',
        img: 'pic/dimsum.png',
        fraction: 10,
        target: function () {
            return 'Dim Sum'
        }
    },
    {
        id: '6',
        img: 'pic/egg.png',
        fraction: 10,
        target: function () {
            return 'Egg'
        }
    },
    {
        id: '7',
        img: 'pic/fruit.png',
        fraction: 10,
        target: function () {
            return 'Fruit'
        }
    },
    {
        id: '8',
        img: 'pic/jpnoddle.png',
        fraction: 10,
        target: function () {
            return 'Ramen'
        }
    },
    {
        id: '9',
        img: 'pic/McDonald.png',
        fraction: 10,
        target: function () {
            return 'MacDonald\'s'
        }
    },
    {
        id: '10',
        img: 'pic/noddle.png',
        fraction: 10,
        target: function () {
            return 'Noddle'
        }
    },
    {
        id: '11',
        img: 'pic/pizza.png',
        fraction: 10,
        target: function () {
            return 'Pizza'
        }
    },
    {
        id: '12',
        img: 'pic/rice.png',
        fraction: 10,
        target: function () {
            return 'Rice'
        }
    },
    {
        id: '13',
        img: 'pic/sandwich.png',
        fraction: 10,
        target: function () {
            return 'Sandwich'
        }
    },
    {
        id: '14',
        img: 'pic/steak.png',
        fraction: 10,
        target: function () {
            return 'Steak'
        }
    },
    {
        id: '15',
        img: 'pic/sushi.png',
        fraction: 10,
        target: function () {
            return 'Sushi'
        }
    },
    {
        id: '16',
        img: 'pic/sweets.png',
        fraction: 10,
        target: function () {
            return 'Sweets'
        }
    },
    {
        id: '17',
        img: 'pic/bread.png',
        fraction: 10,
        target: function () {
            return 'Bread'
        }
    },
    {
        id: '18',
        img: 'pic/burger.png',
        fraction: 10,
        target: function () {
            return 'Burger'
        }
    },
    {
        id: '19',
        img: 'pic/cookie.png',
        fraction: 10,
        target: function () {
            return 'Cookie'
        }
    },
    {
        id: '20',
        img: 'pic/cupnoddle.png',
        fraction: 10,
        target: function () {
            return 'Cup noddle'
        }
    },
    {
        id: '21',
        img: 'pic/dimsum.png',
        fraction: 10,
        target: function () {
            return 'Dim Sum'
        }
    },
    {
        id: '22',
        img: 'pic/egg.png',
        fraction: 10,
        target: function () {
            return 'Egg'
        }
    },
    {
        id: '23',
        img: 'pic/fruit.png',
        fraction: 10,
        target: function () {
            return 'Fruit'
        }
    },
    {
        id: '24',
        img: 'pic/jpnoddle.png',
        fraction: 10,
        target: function () {
            return 'Ramen'
        }
    },
    {
        id: '25',
        img: 'pic/McDonald.png',
        fraction: 10,
        target: function () {
            return 'MacDonal\'s'
        }
    },
    {
        id: '26',
        img: 'pic/noddle.png',
        fraction: 10,
        target: function () {
            return 'Noddle'
        }
    },
    {
        id: '27',
        img: 'pic/pizza.png',
        fraction: 10,
        target: function () {
            return 'Pizza'
        }
    },
    {
        id: '28',
        img: 'pic/rice.png',
        fraction: 10,
        target: function () {
            return 'Rice'
        }
    },
    {
        id: '29',
        img: 'pic/sandwich.png',
        fraction: 10,
        target: function () {
            return 'Sandwich'
        }
    },
    {
        id: '30',
        img: 'pic/steak.png',
        fraction: 10,
        target: function () {
            return 'Steak'
        }
    },
    {
        id: '31',
        img: 'pic/sushi.png',
        fraction: 10,
        target: function () {
            return 'Sushi'
        }
    },
    {
        id: '32',
        img: 'pic/sweets.png',
        fraction: 10,
        target: function () {
            return 'Sweets'
        }
    },
]

//Variable Declaration
let steps = 0 //剩餘步數
let allStep = 0 //全部步數
let currentIdx = 0 //目前走到哪一格
let speed //速率 
let bricks 
window.onload = function () {
    renderBrick();
    gameStart()
}


function renderBrick() {
    brickData.forEach(function ({ id: boxId, img: imgSrc }) {

        let targetElement = document.querySelector('[box-id="' + boxId + '"]');
        let imgElement = document.createElement('img');
        imgElement.classList.add('w-100', 'p-1')
        imgElement.src = imgSrc;
        targetElement.appendChild(imgElement);
    });
}

function gameStart(){
bricks = document.querySelectorAll('[box-id]')
bricks = Array.from(bricks).sort((a, b) => { return a.getAttributeNode('box-id').value - b.getAttributeNode('box-id').value })
console.log(bricks)

document.querySelector('.btn').addEventListener('click', function () {
    speed = 50

    let random = Math.floor(Math.random() * brickData.length) + 1;
    steps = random + (3 + bricks.length);
    allStep = steps
    turnAround();
})
}

function turnAround(){
    bricks[currentIdx].classList.remove('active')
    currentIdx++
    if(currentIdx>=bricks.length){ currentIdx = 0}
   
    bricks[currentIdx].classList.add('active');
    steps--

    //一般版本
    // if(steps >0){
    //     setTimeout(turnAround,speed)
    // }
    // else{
    //     let msgBox = document.getElementById('msg')
    //     let val = brickData[currentIdx].target()
    //     msgBox.innerText = `Eat  ${val}`
    // }
    
    //變速版本
    if(steps>0){
        setTimeout(turnAround,speed)
        if(steps< Math.floor((allStep/3))){
            speed +=4
        }
        console.log(speed)
    }
    else{
        let msgBox = document.getElementById('msg')
        let val = brickData[currentIdx].target()
        msgBox.innerText = `Eat  ${val}`
    }
}