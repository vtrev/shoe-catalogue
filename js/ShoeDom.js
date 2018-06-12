shoes = ShoeFactory(shoesArray);

let searchBtnElement = document.getElementById('searchButton');




function buy(item) {
    var data = item.spit;
    console.log(item);
}

let displayShoes = function (shoesToDisplay) {
    let shoesData = {};
    shoesData['shoes'] = shoesToDisplay.reverse()
    var shoesDataElement = document.getElementById("shoesArea");
    var shoesDataTemplateSource = document.getElementById("shoesTemplate").innerHTML;
    var shoesTemplate = Handlebars.compile(shoesDataTemplateSource);
    var platesHTML = shoesTemplate(shoesData);
    shoesDataElement.innerHTML = platesHTML;
};


searchBtnElement.addEventListener('click', function search() {
    let shoeBrand = document.getElementById('shoeBrand').value;
    let shoeColor = document.getElementById('shoeColor').value;
    let shoeSize = document.getElementById('shoeSize').value;
    let specs = {};
    if (shoeBrand !== 'null') {
        specs.brand = shoeBrand
    }
    if (shoeColor !== 'null') {
        specs.color = shoeColor
    }
    if (shoeSize !== 'null') {
        specs.size = shoeSize
    }
    console.log(specs);
    displayShoes(shoes.getShoes(specs));

})