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
    cartData['shoes'] = shoesToDisplay.reverse()
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

    holdingArray.push(shoeToRemove[0]);

    holdingArray = tmpShoes.filter(function (shoe) {
        return shoe.id !== shoeToRemove[0].id
    });
    setTmpShoes();

    console.log(holdingArray);
    // console.log(tmpShoes);
    displayCart(holdingArray);
    // return holdingArray

    // console.log(shoeToRemove);
    // return shoeToRemove
    // console.log(holdingArray);
    // shoes.doSales(shoeToRemove).returnItem();
};


displayCart(tmpShoes);