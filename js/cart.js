shoes = ShoeFactory(shoesArray);

let holdingArray = [];

let setTmpShoes = function () {
    localStorage.setItem('tmpShoes', JSON.stringify(holdingArray));
}

let getTmpShoes = function () {
    return JSON.parse(localStorage.getItem('tmpShoes'));
};
let tmpShoes = getTmpShoes();


let displayCart = function (shoesToDisplay) {
    let cartData = {};
    if (typeof (shoesToDisplay) == 'object') {
        cartData['shoes'] = shoesToDisplay.reverse()
    } else {
        cartData['message'] = shoesToDisplay;
    }
    var cartDataElement = document.getElementById("cartArea");
    var cartDataTemplateSource = document.getElementById("cartTemplate").innerHTML;
    var cartTemplate = Handlebars.compile(cartDataTemplateSource);
    var cartHTML = cartTemplate(cartData);
    cartDataElement.innerHTML = cartHTML;
};


let addToCart = function (item) {

    let shoeToAdd = shoes.getShoes({
        id: item
    });


    holdingArray.push(shoeToAdd[0]);

    let checkOut = function () {
        shoes.doSales(shoeToAdd[0]).buyItem();
        setTmpShoes();
        displayShoes(shoeToAdd);
        return shoeToAdd
    }

    return {
        checkout: checkOut()
    }

};

let removeFromCart = function (item) {
    let shoeToRemove = shoes.getShoes({
        id: item
    });
    tmpShoes = tmpShoes.filter(function (shoe) {
        return shoe.id !== shoeToRemove[0].id
    });
    setTmpShoes();

    if (tmpShoes.length > 0) {
        displayCart(tmpShoes);
    } else {
        displayCart('Cart Empty!')
    }
};


// ==============================the code below will be used for a sliding cart in future===================================//

// var maxHoldingArrayIndex = holdingArray.length
// var shoeElementIndex = 1;

// function nextShoeElement() {
//     shoeElementIndex += 1;
//     if (shoeElementIndex > maxHoldingArrayIndex) {
//         shoeElementIndex = 0;
//     }
//     if (tmpShoes[shoeElementIndex]) {
//         displayCart([tmpShoes[shoeElementIndex]]);
//     } else {
//         displayCart('Cart Empty!');
//     }
// }