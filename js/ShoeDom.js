let localShoes = JSON.parse(localStorage.getItem('shoesData'));

let shoesArray = [{
        brand: "Adidas",
        color: "Black",
        price: 999,
        id: 0,
        qty: 10,
        size: 5,
        "img-link": "img/ad-black.jpg"
    }, {
        brand: "Adidas",
        color: "White",
        price: 1500,
        id: 1,
        qty: 5,
        size: 10,
        "img-link": "img/ad-white.jpg"
    }, {
        brand: "Converse",
        color: "Black",
        price: 799,
        id: 2,
        qty: 7,
        size: 5,
        "img-link": "img/con-black.jpg"
    },
    {
        brand: "Fila",
        color: "Green",
        price: 299,
        id: 3,
        qty: 50,
        size: 7,
        "img-link": "img/fila-green.jpg"
    }, {
        brand: "Jordan",
        color: "Cream",
        price: 2999,
        id: 4,
        qty: 10,
        size: 9,
        "img-link": "img/jordan-cream.jpg"
    }, {
        brand: "Nike",
        color: "Black",
        price: 899,
        id: 5,
        qty: 6,
        size: 8,
        "img-link": "img/nike-black.png"
    }, {
        brand: "Nike",
        color: "Blue",
        price: 560,
        id: 6,
        qty: 15,
        size: 7,
        "img-link": "img/nike-blue.jpg"
    }, {
        brand: "Nike",
        color: "Orange",
        price: 899,
        id: 7,
        qty: 10,
        size: 7,
        "img-link": "img/nike-orange.jpg"
    }, {
        brand: "Puma",
        color: "Brown",
        price: 699,
        id: 8,
        qty: 50,
        size: 8,
        "img-link": "img/puma-brwn.jpg"
    }, {
        brand: "Soviet",
        color: "Purple",
        price: 500,
        id: 9,
        qty: 17,
        size: 8,
        "img-link": "img/sov-purple.png"
    }, {
        brand: "Timberland",
        color: "Brown",
        price: 2999,
        id: 10,
        qty: 5,
        size: 8,
        "img-link": "img/timbs-brwn.png"
    }
]
let shoes;
// console.log(localShoes);
if (localShoes) {
    console.log('found catalogue on local storage')
    shoes = ShoeFactory(localShoes);
} else {
    console.log('using defualt catalogue')
    shoes = ShoeFactory(shoesArray);
}


let searchBtnElement = document.getElementById('searchButton');

let addToCart = function (shoe) {
    shoes.addToCart(shoe);
    let prevSpecs = JSON.parse(localStorage.getItem('specs'));
    displayShoes(shoes.getShoes(prevSpecs));

}

let displayShoes = function (shoesToDisplay) {
    let shoesData = {};
    shoesData['shoes'] = shoesToDisplay.reverse()
    var shoesDataElement = document.getElementById("shoesArea");
    var shoesDataTemplateSource = document.getElementById("shoesTemplate").innerHTML;
    var shoesTemplate = Handlebars.compile(shoesDataTemplateSource);
    var shoesHTML = shoesTemplate(shoesData);
    shoesDataElement.innerHTML = shoesHTML;
};

searchBtnElement.addEventListener('click', function search() {
    let shoeBrand = document.getElementById('shoeBrand').value;
    let shoeColor = document.getElementById('shoeColor').value;
    let shoeSize = document.getElementById('shoeSize').value;
    let specs = {};
    try {
        if (shoeBrand !== 'null') {
            specs.brand = shoeBrand
        }
        if (shoeColor !== 'null') {
            specs.color = shoeColor
        }
        if (shoeSize !== 'null') {
            specs.size = shoeSize
        }
    } finally {
        displayShoes(shoes.getShoes(specs));
    }

});