// shoes = ShoeFactory(shoesArray);


let cart = JSON.parse(localStorage.getItem('cart'));

if (cart) {
    console.log('Found some shoes in the cart');
    console.log(cart);

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