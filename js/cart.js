let shoesData = JSON.parse(localStorage.getItem('shoesData'));

shoes = ShoeFactory(shoesData);

let cart = JSON.parse(localStorage.getItem('cart'));

if (cart) {
    console.log('Found some shoes in the cart');
} else {
    console.log('this cart is empty');
}



let tmpCart = JSON.parse(localStorage.getItem('cart'));

// let tmpCart = getTmpShoes();


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


// ============================================= REMOVE FROM CART ====================================================== //
let removeFromCart = function (item) {
    let tmpCart = JSON.parse(localStorage.getItem('cart'));
    let shoeToRemove = shoes.getShoes({
        id: item
    })[0];


    //remove the item from list

    try {
        tmpCart = tmpCart.filter(function (shoe) {
            return parseInt(item) !== shoe.id;
        });
    } finally {
        shoeToRemove.qty++;
        localStorage.setItem('shoesData', JSON.stringify(shoesData));
        localStorage.setItem('cart', JSON.stringify(tmpCart));
        displayCart(tmpCart);
    }







    // tmpCart = tmpCart.splice

    // console.log(tmpCart);
    // console.log(shoeToRemove);

    // shoeToAdd[0].qty++;
    // shoeIndex = tmpCart.indexOf(shoeToRemove);
    // console.log(shoeIndex);





    // tmpCart.push(shoeToAdd[0]);
    // localStorage.setItem('shoesData', JSON.stringify(shoesData));







    // if (!tmpCart.some(function (shoe) {
    //         return shoe.id === shoeToAdd[0].id;
    //     })) {
    //     if (shoeToAdd[0].qty > 0) {

    //     };
    // };
};






// let removeFromCart = function (item) {
//     let shoeToRemove = shoes.getShoes({
//         id: item
//     });
//     tmpShoes = tmpShoes.filter(function (shoe) {
//         return shoe.id !== shoeToRemove[0].id
//     });
//     setTmpShoes();

//     if (tmpShoes.length > 0) {
//         displayCart(tmpShoes);
//     } else {
//         displayCart('Cart Empty!')
//     }
// };


// // ==============================the code below will be used for a sliding cart in future===================================//

// // var maxHoldingArrayIndex = holdingArray.length
// // var shoeElementIndex = 1;

// // function nextShoeElement() {
// //     shoeElementIndex += 1;
// //     if (shoeElementIndex > maxHoldingArrayIndex) {
// //         shoeElementIndex = 0;
// //     }
// //     if (tmpShoes[shoeElementIndex]) {
// //         displayCart([tmpShoes[shoeElementIndex]]);
// //     } else {
// //         displayCart('Cart Empty!');
// //     }
// // }