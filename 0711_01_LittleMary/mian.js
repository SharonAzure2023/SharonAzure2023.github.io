let brickData = [
    {
        id: '1', // box-id
        img: 'pic/bread.png',
        fraction: 10,
        target: function () { // target 踩到做事情
            return 'bread'
        }
    },
    {
        id: '2',
        img: 'pic/burger.png',
        fraction: 10,
        target: function () {
            return 'burger'
        }
    },
    {
        id: '3',
        img: 'pic/cookie.png',
        fraction: 10,
        target: function () {
            return 'cookie'
        }
    },
    {
        id: '4',
        img: 'pic/cupnoddle.png',
        fraction: 10,
        target: function () {
            return 'cupnoddle'
        }
    },
    {
        id: '5',
        img: 'pic/dimsum.png',
        fraction: 10,
        target: function () {
            return 'dimsum'
        }
    },
    {
        id: '6',
        img: 'pic/egg.png',
        fraction: 10,
        target: function () {
            return 'egg'
        }
    },
    {
        id: '7',
        img: 'pic/fruit.png',
        fraction: 10,
        target: function () {
            return 'fruit'
        }
    },
    {
        id: '8',
        img: 'pic/jpnoddle.png',
        fraction: 10,
        target: function () {
            return 'jpnoddle'
        }
    },
    {
        id: '9',
        img: 'pic/McDonald.png',
        fraction: 10,
        target: function () {
            return 'MacDonald'
        }
    },
    {
        id: '10',
        img: 'pic/noddle.png',
        fraction: 10,
        target: function () {
            return 'noddle'
        }
    },
    {
        id: '11',
        img: 'pic/pizza.png',
        fraction: 10,
        target: function () {
            return 'pizza'
        }
    },
    {
        id: '12',
        img: 'pic/rice.png',
        fraction: 10,
        target: function () {
            return 'rice'
        }
    },
    {
        id: '13',
        img: 'pic/sandwich.png',
        fraction: 10,
        target: function () {
            return 'sandwich'
        }
    },
    {
        id: '14',
        img: 'pic/steak.png',
        fraction: 10,
        target: function () {
            return 'steak'
        }
    },
    {
        id: '15',
        img: 'pic/sushi.png',
        fraction: 10,
        target: function () {
            return 'sushi'
        }
    },
    {
        id: '16',
        img: 'pic/sweets.png',
        fraction: 10,
        target: function () {
            return 'sweets'
        }
    },
    {
        id: '17',
        img: 'pic/bread.png',
        fraction: 10,
        target: function () {
            return 'bread'
        }
    },
    {
        id: '18',
        img: 'pic/burger.png',
        fraction: 10,
        target: function () {
            return 'burger'
        }
    },
    {
        id: '19',
        img: 'pic/cookie.png',
        fraction: 10,
        target: function () {
            return 'cookie'
        }
    },
    {
        id: '20',
        img: 'pic/cupnoddle.png',
        fraction: 10,
        target: function () {
            return 'cupnoddle'
        }
    },
    {
        id: '21',
        img: 'pic/dimsum.png',
        fraction: 10,
        target: function () {
            return 'dimsum'
        }
    },
    {
        id: '22',
        img: 'pic/egg.png',
        fraction: 10,
        target: function () {
            return 'egg'
        }
    },
    {
        id: '23',
        img: 'pic/fruit.png',
        fraction: 10,
        target: function () {
            return 'fruit'
        }
    },
    {
        id: '24',
        img: 'pic/jpnoddle.png',
        fraction: 10,
        target: function () {
            return 'jpnoddle'
        }
    },
    {
        id: '25',
        img: 'pic/McDonald.png',
        fraction: 10,
        target: function () {
            return 'MacDonald'
        }
    },
    {
        id: '26',
        img: 'pic/noddle.png',
        fraction: 10,
        target: function () {
            return 'noddle'
        }
    },
    {
        id: '27',
        img: 'pic/pizza.png',
        fraction: 10,
        target: function () {
            return 'pizza'
        }
    },
    {
        id: '28',
        img: 'pic/rice.png',
        fraction: 10,
        target: function () {
            return 'rice'
        }
    },
    {
        id: '29',
        img: 'pic/sandwich.png',
        fraction: 10,
        target: function () {
            return 'sandwich'
        }
    },
    {
        id: '30',
        img: 'pic/steak.png',
        fraction: 10,
        target: function () {
            return 'steak'
        }
    },
    {
        id: '31',
        img: 'pic/sushi.png',
        fraction: 10,
        target: function () {
            return 'sushi'
        }
    },
    {
        id: '32',
        img: 'pic/sweets.png',
        fraction: 10,
        target: function () {
            return 'sweets'
        }
    },
]


window.onload = function () {
    renderBrick();
}


function renderBrick() {
    let bricks = document.querySelectorAll('[box-id]')

    // bricks = Array.from(bricks).sort((a, b) => { return a.getAttributeNode('box-id').value - b.getAttributeNode('box-id').value })
    brickData.forEach(function ({ id: boxId, img: imgSrc}) {

        let targetElement = document.querySelector('[box-id="' + boxId + '"]');
        let imgElement = document.createElement('img');
        imgElement.src = imgSrc;
        targetElement.appendChild(imgElement);
    });








}